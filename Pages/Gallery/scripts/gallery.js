class Gallery{
    constructor(){
        let domElement = document.querySelector('.container.gallery');

        let heading = new GalleryHeading();
        domElement.appendChild(heading.domElement);


        let imgMainContainer = document.createElement('div');

        imgMainContainer.className = 'image-main-container';
        

        let focusedImage = new FocusedImage(
            "Pages/Gallery/assets/1.jpeg",
            "Heading Placeholder",
            "Description Placeholder"
        );
        const templatePathString = 'Pages/Gallery/assets/';
        let imgList = [];
        for (let i = 1; i<= 20;i++)
            imgList.push(`${templatePathString}${i}.jpeg`);

        let img_frame = new ImageFrame(imgList);

        img_frame.img_card_list[0].toggleActive();

        imgMainContainer.appendChild(focusedImage.domElement);
        imgMainContainer.appendChild(img_frame.containerDOM);

        domElement.appendChild(imgMainContainer);

        this.activeIndex = 0;
        this.domElement = domElement;
        this.imageFrame = img_frame;
        this.focusedImage = focusedImage;
        this.imgList = imgList;

        this.imageFrameClickHandler();
        this.imageFrameScrollHandler();
    }
    imageFrameClickHandler(){
        this.imageFrame.img_card_list.map((imageCard, index) => {
            imageCard.domElement.addEventListener('click', () => {
                if(!imageCard.active){
                    this.imageFrame.img_card_list[this.activeIndex].toggleActive();
                    imageCard.toggleActive();
                    this.activeIndex = index;
                    this.focusedImage.changeImage(
                        this.imgList[this.activeIndex],
                        "Heading Placeholder",
                        "Description Placeholder"
                    );
                }
            });
        })
    }
    imageFrameScrollHandler(){
        this.imageFrame.up_arrow.addEventListener("click", () => {
            this.imageFrame.imageScrollableFrame.scrollBy({ top: -200, left: 0, behavior: "smooth" });
          });
          this.imageFrame.down_arrow.addEventListener("click", () => {
            this.imageFrame.imageScrollableFrame.scrollBy({ top: 200, left: 0, behavior: "smooth" });
          });
    }
}
