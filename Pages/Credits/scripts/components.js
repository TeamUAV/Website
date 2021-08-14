class TitleDiv{
    constructor(name, description){
        let section = document.createElement('section');
        section.className = "title-div-extra";

        let credits_div = document.createElement('div');
        credits_div.className = 'title-div-credits';
        section.appendChild(credits_div);

        let ids = ['title', 'subtitle', 'subtitle', 'description'];
        let content = ['Credits', name, 'Project Lead', description];

        let text_content = document.createElement('div');
        text_content.id = 'text-content';

        for(let i = 0; i< 4; i++){
            let p = document.createElement('p');
            p.id = ids[i];
            p.innerText = content[i];
            text_content.appendChild(p);
        }

        credits_div.appendChild(text_content);

        let img_panel_div = document.createElement('div');
        img_panel_div.id = 'image-panel-div';

        let image_panel = document.createElement('div');
        image_panel.id = 'image-panel';

        let overlay = document.createElement('div');
        overlay.className = "overlay";
        image_panel.appendChild(overlay);

        this.moreBtn = document.createElement('p');
        this.moreBtn.innerText = 'More';
        image_panel.appendChild(this.moreBtn);


        img_panel_div.appendChild(image_panel);

        credits_div.appendChild(img_panel_div);

        let line = document.createElement('div');
        line.id = 'bottom-line';

        section.appendChild(line);

        this.domElement = section;
    }
}

class CreditsCard{
    constructor(name, imgSrc){
        let mainDiv = document.createElement('div');
        mainDiv.className = 'credits-card';

        let img = document.createElement('img');
        img.src = imgSrc;

        mainDiv.appendChild(img);

        let p_list = ['name', name, 'More']

        let expanding_div = document.createElement('div');
        expanding_div.className = "expanding-div";

        for(let i = 0; i < 3;i++){
            let p = document.createElement('p');
            p.innerText = p_list[i];
            expanding_div.appendChild(p);
            if(i == 2)
                this.moreBtn = p;
        }
        mainDiv.appendChild(expanding_div);

        this.domElement = mainDiv;
    }
}

class CreditsPanel{
    constructor(title, contents){
        this.nodeList = [];
        let contributors = document.createElement('section');
        contributors.className = "contributors";
        let title_p = document.createElement('p');
        title_p.innerText = title;
        title_p.id = 'title';

        this.key = title;

        contributors.appendChild(title_p);

        let scroll_container = document.createElement('div');
        scroll_container.className = 'scroll-container';

        for(let i of contents){
            let card = new CreditsCard(i.name, i.imgSrc);
            scroll_container.appendChild(card.domElement);
            this.nodeList.push(card.moreBtn);
        }
        contributors.appendChild(scroll_container);

        this.domElement = contributors;
    }
}

let titleDiv = new TitleDiv("Gaurav Singh", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolores fugit magni fuga deleniti minima nulla cumque cum consectetur tempore, totam repudiandae tempora ratione a laudantium architecto enim odit temporibus.");


let content = {
    name: "Gaurav Singh",
    imgSrc: '/Pages/About/knowMorePage/Assets/Senior Core/gaurav.jpeg'
}

let contents = []

for(let i =0;i < 10;i++){
    contents.push(content)
}

let panel = new CreditsPanel('Developers', contents);

document.querySelector('.container.credits .content').appendChild(titleDiv.domElement);
document.querySelector('.container.credits .content').appendChild(panel.domElement);