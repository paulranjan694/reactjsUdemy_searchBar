import React from 'react';
import '../style/imageList.css';
import ImageCard from './imageCard';

const ImageList = (props) => {
    const image = props.image.map(showImage => {
        return <ImageCard key={showImage.id} image={showImage} />;
    });

    return <div className="image-list">{image}</div>;
};

export default ImageList;