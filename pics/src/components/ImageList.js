/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ImageList = props => {
  const images =  props.images.map(({id,urls})=> {
        return <img key = {id}src={urls.regular}/>;
    });

    return <div>{images}</div>;
};

export default ImageList;