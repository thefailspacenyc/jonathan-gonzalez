import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// === Pages

    function SingleImage(props) {

        let project = props.data;

        return (
            <div className="single-image-wrapper">     
                <img className="single-image" src={ `${process.env.REACT_APP_BACKEND}${ project.Image.data.attributes.url }`} />
                <BlocksRenderer className="credit single-image-credit" content={ project.Image_Description } /> 
            </div>
        );
    }
    
    export default SingleImage;
