import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';

function About() {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/about-page`)

    if (data) {
        const about = data.data.attributes
        return (
            <div className="page-wrapper">
                <div className="main-container about-page">
                    <BlocksRenderer content={about.Biography} />
                </div>
                <div className="side-container about-page">
                    <a className="pointer" target="_blank" href={about.CV}><h2>CV</h2></a>
                </div>
            </div>
        );
    }

}

export default About;