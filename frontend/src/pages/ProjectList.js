import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';
import { useState } from "react";

// === Components
import TagHandler from '../components/TagHandler';

    function ProjectList() {    

        return (
            <>
                <div className="project-list-wrapper">
                    <div className="tag-handler-wrapper">
                        <TagHandler />                        
                    </div>
                </div>
            </>
        );
    }
    
    export default ProjectList;