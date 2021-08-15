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

class TextLinkContainer{
    constructor(title, body, long, links){
        let div = document.createElement('div');
        div.className = 'text-container';

        let p1 = document.createElement('p');
        p1.className = 'title';
        p1.innerText = title;

        let p2 = document.createElement('p');
        p2.className = 'text-content';
        if (body)
            p2.innerText = body;

        if(long || links)
            p2.classList.add('long');

        if(links)
            for(let i =0 ;i < links.length; i++){
                let a = document.createElement('a');
                a.href = links[i].href;
                a.target ="_blank";
                a.innerText = links[i].name;
                p2.appendChild(a);
                p2.appendChild(document.createElement('br'));
            }
        div.appendChild(p1);
        div.appendChild(p2);

        this.domElement = div;
    }
    update(title, body, long, links){
        let div = document.createElement('div');
        div.className = 'text-container';

        let p1 = document.createElement('p');
        p1.className = 'title';
        p1.innerText = title;

        let p2 = document.createElement('p');
        p2.className = 'text-content';
        if (body)
            p2.innerText = body;

        if(long || links)
            p2.classList.add('long');

        if(links)
            for(let i =0 ;i < links.length; i++){
                let a = document.createElement('a');
                a.href = links[i].href;
                a.target ="_blank";
                a.innerText = links[i].name;
                p2.appendChild(a);
                p2.appendChild(document.createElement('br'));
            }
        div.appendChild(p1);
        div.appendChild(p2);

        this.domElement = div;
    }
}

class CreditsMoreCard{
    constructor(imgSrc){
        let card = document.createElement('div');
        card.className = 'credit-more-card';

        let text_area = document.createElement('div');
        text_area.className = 'more-card-text';

        let view_btn = document.createElement('div');
        view_btn.id = 'view-more';
        let p = document.createElement('p');
        p.innerText = 'view more';
        let i = document.createElement('i');
        i.className = 'material-icons';
        i.id = 'arrow';
        i.innerText = 'arrow_back';
        view_btn.appendChild(p);
        view_btn.appendChild(i);

        this.nextBtn = view_btn;

        text_area.appendChild(view_btn);

        let pg1 = document.createElement('div');
        pg1.className = 'fields-container active';
        this.pg1 = pg1;

        let pg2 = document.createElement('div');
        pg2.className = 'fields-container';
        this.pg2 = pg2;

        let img_div = document.createElement('div');
        img_div.className = 'more-card-img';

        let dismiss = document.createElement('i');
        dismiss.className = 'material-icons';
        dismiss.id = 'dismiss';
        dismiss.innerText = 'highlight_off';

        dismiss.addEventListener('click', () => {
            document.querySelector('.credit-more-card').classList.toggle('visible');
            document.querySelector('.container.credits').classList.toggle('know-more');
        });

        let img = document.createElement('img');
        img.src = imgSrc;

        img_div.appendChild(img);
        img_div.appendChild(dismiss);
        this.img = img;

        text_area.appendChild(pg1);
        text_area.appendChild(pg2);

        card.appendChild(text_area);
        card.appendChild(img_div);

        this.domElement = card;
        this.nextBtn.addEventListener('click',() => {
            this.nextBtn.classList.toggle('pg2');
            this.pg1.classList.toggle('active');
            this.pg2.classList.toggle('active');
        });
    }

    render(name, about, skills, positions_held, contact, callSign){
        this.name = new TextLinkContainer('name', name);
        this.pg1.appendChild(this.name.domElement);

        this.about = new TextLinkContainer('about', about, true);
        this.pg1.appendChild(this.about.domElement);

        this.skills = new TextLinkContainer('skills', skills, true);
        this.pg1.appendChild(this.skills.domElement);

        this.positions = new TextLinkContainer('positions held', positions_held, false);
        this.pg2.appendChild(this.positions.domElement);

        this.contacts = new TextLinkContainer('Contact', false, true, contact);
        this.pg2.appendChild(this.contacts.domElement);

        this.callsign = new TextLinkContainer('callsign', callSign);
        this.pg2.appendChild(this.callsign.domElement);

    }
    update(name, about, skills, positions_held, contact, callSign, imgSrc){
        this.name.update('name', name);
        this.about.update('about', about, true);
        this.skills.update('skills', skills, true);
        this.positions.update('positions held', positions_held, false);
        this.contacts.update('Contact', false, true, contact);
        this.callsign.update('callsign', callSign);
        this.img.src = imgSrc;

        this.pg1.innerHTML = "";
        this.pg2.innerHTML = "";

        this.pg1.appendChild(this.name.domElement);
        this.pg1.appendChild(this.about.domElement);
        this.pg1.appendChild(this.skills.domElement);

        this.pg2.appendChild(this.positions.domElement);
        this.pg2.appendChild(this.contacts.domElement);
        this.pg2.appendChild(this.callsign.domElement);
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

let obj = {
    name: 'Gaurav Singh',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolores fugit magni fuga deleniti minima nulla cumque cum consectetur tempore, totam repudiandae tempora ratione a laudantium architecto enim odit temporibus.',
    skills: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolores fugit magni fuga deleniti minima nulla cumque cum consectetur tempore, totam repudiandae tempora ratione a laudantium architecto enim odit temporibus.',
    positions_held: 'bleh',
    links: [
        {href: 'a', name: 'a'},
        {href: 'a', name: 'a'},
        {href: 'a', name: 'a'}
    ],
    callSign: 'abc'
}

// let card = new CreditsMoreCard('/Pages/About/knowMorePage/Assets/Senior Core/gaurav.jpeg');
// card.render(obj.name, obj.about, obj.skills, obj.positions_held, obj.links, obj.callSign);

// document.querySelector('.container.credits').appendChild(card.domElement);

// let cont= document.createElement('div');
// cont.className = 'content';
// document.querySelector('.container.credits').appendChild(cont);

// document.querySelector('.container.credits .content').appendChild(titleDiv.domElement);
// document.querySelector('.container.credits .content').appendChild(panel.domElement);


// setInterval(() => {

//   }, 4000);