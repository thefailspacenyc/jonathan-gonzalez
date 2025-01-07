import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// === Pages

    function SingleImage(props) {

        let project = props.data;

        return (
            <div className="single-image-wrapper">     
                <img className="single-image" src={ `${ project.Image.data.attributes.url }`} />
                { project.Image_Description ? (
                    <BlocksRenderer className="credit single-image-credit" content={ project.Image_Description } /> 
                ) : (null) }
            </div>
        );
    }
    
    export default SingleImage;
