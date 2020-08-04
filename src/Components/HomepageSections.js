import React, { useState, useEffect } from 'react';
import { getContentfulHomepage } from '../Queries/index'
import RichText from './RichText';
import ProjectThumbnail from './ProjectThumbnail';
import { GridContainer, PullQuote, Section } from '../Styles/layout';
import { HeaderTwo, BodyText } from '../Styles/type';
import { uuid } from 'uuidv4';

const HomepageSections = () => {
    const [data, setData] = useState({});

    const getData = async () => {
        const theData = await getContentfulHomepage();
        setData(theData);
    }

    useEffect(() => {
        getData();
    }, []);

    if (Object.entries(data).length > 0) {
        return (
            <main>
                {data.fields.homepageSections.map((section) => {
                    const { sectionTitle, textContent, projects } = section.fields;
                    return (
                        <Section key={uuid()}>
                            <HeaderTwo align="center">
                                {sectionTitle}
                            </HeaderTwo>
                            <BodyText>
                                {textContent && <RichText content={textContent} />}
                            </BodyText>
                            {projects &&
                                <GridContainer>
                                    {projects.map((project, i) => {
                                        return <ProjectThumbnail key={uuid()} project={project} />
                                    })}
                                </GridContainer>
                            }
                        </Section>
                    )
                })}
                <PullQuote>
                    <RichText content={data.fields.pullQuote} />
                </PullQuote>
            </main>
        )
    }

    return <div>loading</div>
}

export default HomepageSections;