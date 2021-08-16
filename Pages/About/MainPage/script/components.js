class ImagePanel{
    constructor(){
        this.domElement = document.createElement('div');
        this.domElement.id = "departments-banner";
        let ls = ['left', 'right'];
        for (let i = 0; i< 2; i++){
            let divDom = document.createElement('div');
            divDom.id = ls[i]; 
            let ls_inner = ['top', 'bottom'];
            for (let j = 0; j< 2; j++){
                let temp = document.createElement('div');
                temp.className = ls_inner[j];
                divDom.appendChild(temp);
            }
            this.domElement.appendChild(divDom);
        }
        
        let dummy = document.createElement('div');
        dummy.id = "images-container-dummy";
        let main = document.createElement('div');
        main.id = "images-container-main";
        let images = ["Management", "CS", "Filled", "Electrical", "Mechanical"];
        let ids = ["manage", "CS", "depts", "elec", "mech"];

        for (let i =0; i< images.length; i++){
            let img = document.createElement('img');
            img.src = `Pages/About/MainPage/Assets/${images[i]}.svg`;
            img.id = ids[i];
            main.appendChild(img);
        }
        dummy.appendChild(main);

        this.domElement.appendChild(dummy);
    }
}

class AboutPageCard{
    constructor(imgSrc, title, body, index){
        this.domElement = document.createElement('div');
        this.domElement.className = "know-more-link-card";

        let numberCircle = document.createElement('div');
        numberCircle.innerText = index+1;
        numberCircle.className = 'number-circle';
        switch (index) {
            case 0:
                numberCircle.classList.add('first');
                break;
            case 1:
                numberCircle.classList.add('last');
            default:
                break;
        }

        this.domElement.appendChild(numberCircle);

        let content = document.createElement('div');
        content.id = "panel-content";

        let img = document.createElement('img');
        img.src = imgSrc;
        img.className = "display-image";

        content.appendChild(img);

        let domTextContent = document.createElement('div');
        domTextContent.className = "contents";

        let cardTitle = document.createElement('p');
        cardTitle.innerText = title;
        cardTitle.className = "title";

        domTextContent.appendChild(cardTitle);

        let cardBody = document.createElement('p');
        cardBody.innerText = body;
        cardBody.className = "body";
        
        domTextContent.appendChild(cardBody);

        let btn = document.createElement('div');
        btn.className = "btn-view";
        btn.innerText = "view more";

        domTextContent.appendChild(btn);

        content.appendChild(domTextContent);
        this.btn = btn;
        this.domElement.appendChild(content);
    }
}

export {ImagePanel, AboutPageCard};