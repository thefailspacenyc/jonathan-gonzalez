    function Gallery( props ) {

        let section = props.data

        return (
            <div className="gallery-wrapper">
                <hr></hr>
                <div className="gallery">
                    {section.Gallery.data.map((image) => 
                        <img className="gallery-image" src={ `${ image.attributes.url }` } />
                    )}
                </div>
            </div>
        );
    }
    
    export default Gallery;
