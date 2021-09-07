class GalleryHeading{
    constructor(){
        let DOMelement = document.createElement('div');
        DOMelement.className = 'title';

        let back_text = document.createElement('div');
        back_text.id = 'back-text';
        back_text.innerText = 'Explore Team UAV';

        let fore_text = document.createElement('div');
        fore_text.id = 'fore-text';

        let font_1 = document.createElement('font');
        font_1.innerText = 'Explore';
        let font_2 = document.createElement('font');
        font_2.innerText = 'Team UAV';

        fore_text.appendChild(font_1);
        fore_text.appendChild(font_2);

        DOMelement.appendChild(back_text);
        DOMelement.appendChild(fore_text);

        this.domElement = DOMelement;
    }
}

class ImageCard{
    constructor(imgSrc){
        this.active = false;
        let domElement = document.createElement('div');
        domElement.className = 'image-card';

        let img = document.createElement('img');
        img.src = imgSrc;
        domElement.appendChild(img);

        this.domElement = domElement;
    }
    toggleActive(){
        this.active = !this.active;
        this.domElement.classList.toggle('active');
    }
}

class ImageFrame{
    constructor(imgSrcList){
        let container = document.createElement('div');
        container.id = 'all-images-container';

        let up_arrow = document.createElement('i');
        up_arrow.className = 'material-icons';
        up_arrow.id = 'toggle-up';
        up_arrow.innerText = 'expand_less';

        let down_arrow = document.createElement('i');
        down_arrow.className = 'material-icons';
        down_arrow.id = 'toggle-down';
        down_arrow.innerText = 'expand_more';


        let img_frame = document.createElement('div');
        img_frame.className = 'main-container';

        let img_card_list = []
        for(let imgSrc of imgSrcList){
            let card = new ImageCard(imgSrc);
            img_card_list.push(card);
            img_frame.appendChild(card.domElement);
        }

        container.appendChild(up_arrow);
        container.appendChild(img_frame);
        container.appendChild(down_arrow);

        this.containerDOM = container;
        this.img_card_list = img_card_list;
        this.up_arrow = up_arrow;
        this.down_arrow = down_arrow;
    }
}

class FocusedImage{
    constructor(imgSrc, heading, description){
        let domElement = document.createElement('div');
        domElement.id = 'focused-image';

        let img = document.createElement('img');
        img.src = imgSrc;

        domElement.appendChild(img);

        let miniInfo = document.createElement('div');

        miniInfo.className = 'mini-info';

        let p1 = document.createElement('p'); 
        let p2 = document.createElement('p'); 

        p1.className = 'heading';
        p2.className = 'description';

        p1.innerText = heading;
        p2.innerText = description;

        miniInfo.appendChild(p1);
        miniInfo.appendChild(p2);

        domElement.appendChild(miniInfo);

        this.domElement = domElement;
        this.img = img;
        this.heading = p1;
        this.description = p2;
    }
    changeImage(imgSrc, heading, description){
        this.img.src = imgSrc;
        this.heading.innerText = heading;
        this.description.innerText = description;
    }
}