class Gallery{
    constructor(){
        let domElement = document.querySelector('.container.gallery');

        let heading = new GalleryHeading();
        domElement.appendChild(heading.domElement);


        let imgMainContainer = document.createElement('div');

        imgMainContainer.className = 'image-main-container';
        

        let focusedImage = new FocusedImage(
            "https://res.cloudinary.com/demo/image/upload/c_crop,h_200,w_300/sample.jpg",
            "Heading Placeholder",
            "Description Placeholder"
        );
        let img_frame = new ImageFrame(['','','','','','','','']);

        imgMainContainer.appendChild(focusedImage.domElement);
        imgMainContainer.appendChild(img_frame.containerDOM);

        domElement.appendChild(imgMainContainer);
    }
}
