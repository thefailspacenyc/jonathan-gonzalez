import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';
import { useState } from "react";

// === Components
import TagHandler from './TagHandler';
import { useParams } from 'react-router-dom';

    function ProjectsFilter(props) {    
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/tags?filters[Tag_Title][$eq]=${props.project}&populate=deep`)
        let projects = null;

        if (data) {

            projects = data.data[0].attributes.projects.data

            return (
                <>
                    <div className="project-list-container">
                        <div className="project-list-bar"></div>
                        <div className="project-list-scroll">
                            {projects.map((project) => 
                                <a href={`/projects/${project.attributes.slug}`}>
                                    <div className="project-preview">
                                        <img className="project-list-thumbnail" src={`${process.env.REACT_APP_BACKEND}${project.attributes.Cover_Image.data.attributes.url}`} />
                                        <BlocksRenderer content={ project.attributes.Title } />
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </>
            );
        }
       
    }
    
    export default ProjectsFilter;