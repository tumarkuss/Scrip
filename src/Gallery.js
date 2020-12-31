import React, {useState} from 'react';
import { Modal,View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
 
const images = [ {
    url: '',
    props: {
        // Or you can set source directory.
        source: require('./img/Kowloon1.jpg')
    }
}, {
    url: '',
    props: {
        // Or you can set source directory.
        source: require('./img/Kowloon2.jpg')
    }
},
{
    url: '',
    props: {
        // Or you can set source directory.
        source: require('./img/Kowloon3.jpg')
    }
},
]


 const Gallery = () => {
        return (
                <ImageViewer imageUrls={images}
                saveToLocalByLongPress={false}
                enablePreload={true}
                />
        )
};
//npm i react-native-image-pan-zoom
//npm i react-native-image-zoom-viewer
export default Gallery;