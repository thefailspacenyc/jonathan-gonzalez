    function Gallery( props ) {

        let section = props.data

        return (
            <div className="gallery-wrapper">
                <hr></hr>
                <div className="gallery">
                    {section.Gallery.data.map((image) => 
                        <img className="gallery-image" src={ `${process.env.REACT_APP_BACKEND}${ image.attributes.url }` } />
                    )}
                </div>
            </div>
        );
    }
    
    export default Gallery;
