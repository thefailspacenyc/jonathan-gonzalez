import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsAll from "./ProjectsAll";
import useTimeout from "../useTimeout";

// === Components
    function TagHandler() {    
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/tags`)
        const [filter, setFilter] = useState('Performance')
        const { clear, reset } = useTimeout(() => setFilter(tags[0].attributes.Tag_Title), 500)

        const [all, setAll] = useState(true)

        let tags = null;
        let tagsDisplay = null;

        function menuHandle(arg, id) {
            setAll(false)
            setFilter(arg)
            let oldEl = document.getElementsByClassName('selected')[0];
            let el = document.getElementById(id);
            if (oldEl === undefined) {
                el.classList.add("selected");
            }
            oldEl.classList.remove('selected');
            el.classList.add("selected");
        }

        if (data) {

            tags = data.data 
            
            tagsDisplay = tags.map((tag, index) => {
                if (index === 0) {
                    return <p className="selected" id={tag.id} onClick={() => menuHandle(tag.attributes.Tag_Title, tag.id)}>{tag.attributes.Tag_Title}</p>
                } else {
                    return <p id={tag.id} onClick={() => menuHandle(tag.attributes.Tag_Title, tag.id)}>{tag.attributes.Tag_Title}</p>
                }
            })

            
            return (
                <>
                    <div className="tag-handler-wrapper">
                        <h1>Projects</h1>
                        <div className="tag-handler">
                            { tagsDisplay }
                        </div>
                        <ProjectsFilter project={filter}/>

                        {/* { all === true ? 
                            <div>
                                <ProjectsAll />
                            </div>
                            :
                            <div>
                                <ProjectsFilter project={filter}/>
                            </div>
                        }  */}
                    </div>
                </>
            );
        }
       
    }
    
    export default TagHandler;