import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';
import { useState } from "react";

// === Components
import TagHandler from './TagHandler';
import { useParams } from 'react-router-dom';

    function ProjectsAll() {    
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/projects?populate=deep`)
        let projects = null;

        if (data) {

            projects = data.data
            console.log(projects)

            return (
                <>
                    <div className="project-list-container">
                        <hr className="project-list-bar"></hr>
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
    
    export default ProjectsAll;