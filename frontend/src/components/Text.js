import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// === Pages

    function Text(props) {

        let project = props.data;

        return (
            <div className="page-wrapper">     
                <div className="main-container">     
                    <BlocksRenderer className="credit single-image-credit" content={ project.Text } /> 
                </div>
            </div>
        );
    }
    
    export default Text;
