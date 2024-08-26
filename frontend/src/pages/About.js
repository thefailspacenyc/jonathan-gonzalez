import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';

// === Pages

    function About() {    

        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/about-page`)

        let about = null;

        console.log('about')
        if (data) {

            about = data.data.attributes

            console.log(about)

            return (
                <div className="page-wrapper">
                    <div className="main-container about-page">
                        <BlocksRenderer content={ about.Biography } />
                    </div>
                    <div className="side-container about-page">
                        <a href={ about.CV }><h2>CV</h2></a>
                    </div>
                </div>
            );
        }
       
    }
    
    export default About;