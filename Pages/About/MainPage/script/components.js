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
            case 2:
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

        this.domElement.appendChild(content);
    }
}

class AboutPage{
    constructor(){
        this.domElement = document.querySelector('.container.about');

        let heading = document.createElement('div');
        let head = ["About", "Team UAV"];
        for (let i of head){
            let p = document.createElement('p');
            p.innerText = i;
            heading.appendChild(p);
        }
        heading.id = "heading";
        this.domElement.appendChild(heading);

        let body = document.createElement('p');
        body.id = "about-body";
        body.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ullam ipsa quam, ipsam minus eligendi quibusdam sapiente natus impedit nesciunt, nulla ab modi quae et, suscipit delectus! Qui, modi impedit! Nisi, quaerat, ullam debitis veniam cupiditate, ducimus quis quam deleniti dolore possimus quae repudiandae hic fugit facilis fugiat natus id tempora voluptatum perspiciatis? Numquam molestiae repellat itaque error expedita eius.";

        this.domElement.appendChild(body);

        let banner = new ImagePanel();
        this.domElement.appendChild(banner.domElement);
        
        let card = new AboutPageCard(
            "",
            "Board members",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ut! Impedit iusto eligendi, sunt quos omnis adipisci perferendis aliquid nihil accusamus soluta dolores, molestias, odit odio ad? Nisi, deleniti beatae?",
            0
        );
        this.domElement.appendChild(card.domElement);

        card = new AboutPageCard(
            "",
            "Senior Core",
            "The up and coming members of our team, responsible for its future endeavors. They are responsible for handling the management of the team and preparing its juniors to deal with mechanical and avionics tools with expertise.",
            1
        );
        this.domElement.appendChild(card.domElement);

        card = new AboutPageCard(
            "",
            "Board members",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ut! Impedit iusto eligendi, sunt quos omnis adipisci perferendis aliquid nihil accusamus soluta dolores, molestias, odit odio ad? Nisi, deleniti beatae?",
            2
        );
        this.domElement.appendChild(card.domElement);
    }
}



let banner = new AboutPage();
document.querySelector('.container.about').appendChild(banner.domElement);