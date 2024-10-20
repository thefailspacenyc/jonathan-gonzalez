import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// === Pages

    function Video(props) {

        let project = props.data;

        return (
            <div className="video-wrapper">     
                <hr></hr>
                <video controls id="vid" autoplay="true" muted className="gallery-video">
                    <source type="video/mp4" src={ `${process.env.REACT_APP_BACKEND}${ project.Video.data.attributes.url }`} />
                </video>
                <BlocksRenderer className="credit single-image-credit" content={ project.Description } /> 
                <hr></hr>
            </div>
        );
    }
    
    export default Video;
