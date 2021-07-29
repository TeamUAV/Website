class MemberListComponent {
  constructor(title, index) {
    this.title = title;
    this.index = index;
  }
  render(active) {
    let li = document.createElement("li");
    li.innerText = this.title;
    if(active)
        li.classList.add('active');
    this.component = li;
  }
}

class MemberList {
  constructor(titles) {
    this.nodeList = titles.map(
      (title, index) => new MemberListComponent(title, index)
    );
  }

  render() {
    let dom = document.querySelector(".container.about-info .content");
    let ul = document.createElement("ul");
    dom.appendChild(ul);
    this.nodeList.map((node, index) => node.render(index == 0));
    this.nodeList.map((node) => ul.appendChild(node.component));
  }
}

let list = new MemberList([
  "Captain",
  "Vice-Captain",
  "Vice-Captain",
  "Vice-Captain",
  "Vice-Captain",
  "Vice-Captain",
  "Avionics Head",
  "Avionics Head",
  "Avionics Head",
  "Avionics Head",
  "Avionics Head",
]);
list.render();

class KnowMoreCard{
    constructor(name, about, skills, positions, contactLinks, image){
        this.name = name;
        this.about = about;
        this.skills = skills.join(", ");
        this.positions = positions;
        this.contactLinks = contactLinks;
        this.image = image;
    }
    render(){
        this.DOMCard = document.createElement('div');
        this.DOMCard.className = "know-more-card";
        
        let details = document.createElement('div');
        details.className = "know-more-details";

        let img = document.createElement('img');
        img.className = "know-more-image";
        img.src = this.image;

        // view more button
        let btn = document.createElement('div');
        btn.className = "view-more-btn";
        let p = document.createElement('p');
        p.innerText = "view more";
        btn.appendChild(p);

        let i = document.createElement('i');
        i.className = 'material-icons';
        i.id = 'view-more-arrow';
        i.innerText = 'arrow_back';
        btn.appendChild(i);

        details.appendChild(btn);

        let pg1 = document.createElement('div');
        pg1.className = "know-more-details-fields";

        let pg2 = document.createElement('div');
        pg2.className = "know-more-details-fields";

        // fields
        pg1.appendChild(new KnowMoreGeneralField('name', this.name, true, false));
        pg1.appendChild(new KnowMoreGeneralField('about', this.about, false, true));
        pg1.appendChild(new KnowMoreGeneralField('skill set', this.skills, false, true));
        pg2.appendChild(new KnowMorePositionsField(this.positions));
        pg2.appendChild(new KnowMoreLinkField(this.contactLinks));
        pg2.appendChild(new KnowMoreGeneralField('call sign', 'maverick', true, false));

        pg1.classList.add('active');

        // navigation index
        let navDiv = document.createElement('div');
        let dot1 = new Dot();
        let dot2 = new Dot();

        dot2.toggle();

        console.log(dot1.dot.innerHTML)
        console.log(dot2.dot.innerHTML)

        navDiv.appendChild(dot1.dot);
        navDiv.appendChild(dot2.dot);
        navDiv.id ="navigation-dots";

        details.appendChild(navDiv);

        details.appendChild(pg1);
        details.appendChild(pg2);

        this.DOMCard.appendChild(details);
        this.DOMCard.appendChild(img);

        btn.addEventListener('click', () => {
            pg1.classList.toggle('active');
            pg2.classList.toggle('active');
            dot1.toggle();
            dot2.toggle();
            p.classList.toggle('pg2');
            i.classList.toggle('pg2');
        });

        return this.DOMCard;
    }
}

class Dot{
    constructor(){
        let dot = document.createElement('div');
        dot.className = "dot";
        let img1 = document.createElement('img');
        img1.src = "Pages/About/Assets/active.png";
        let img2 = document.createElement('img');
        img2.src = "Pages/About/Assets/inactive.png";

        dot.appendChild(img1);
        dot.appendChild(img2);

        this.dot = dot;
        this.img1Ref = img1;
        this.img2Ref = img2;
        this.img1Ref.classList.toggle('active');
    }
    toggle(){
            this.img1Ref.classList.toggle('active');
            this.img2Ref.classList.toggle('active');
    }
}

class KnowMoreGeneralField{
    constructor(title, body, bold, long){
        let elem =  document.createElement('div');
        elem.className = "field";
        let p = document.createElement('p');
        p.id = "name";
        p.innerText = title;
        elem.appendChild(p);

        p = document.createElement('p');
        p.id = "name-value";
        p.innerText = body;
        if(long){
            p.className = 'long';
        }
        else if (bold)
            p.className = 'bold';
        elem.appendChild(p);

        return elem;
    }
}

class KnowMoreLinkField{
    constructor(links){
        let elem =  document.createElement('div');
        elem.className = "field";
        let p = document.createElement('p');
        p.id = "name";
        p.innerText = "contact";
        elem.appendChild(p);

        for(let link of links){
            let a = document.createElement('a');
            a.id = "name-value";
            a.innerText = link.body;
            a.href = link.ref;

            elem.appendChild(a);
        }

        return elem;
    }
}

class KnowMorePositionsField{
    constructor(positions){
        let elem =  document.createElement('div');
        elem.className = "field";
        let p = document.createElement('p');
        p.id = "name";
        p.innerText = "positions held";
        elem.appendChild(p);

        for(let position of positions){
            let a = document.createElement('a');
            a.id = "name-value";
            a.innerText = position;

            elem.appendChild(a);
        }

        return elem;
    }
}

let card = new KnowMoreCard('Valentino Rossi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus. Ex repudiandae ullam doloribus molestiae ad mollitia porro consectetur quisquam quam ipsa, laboriosam asperiores quidem voluptatum id iusto nesciunt eaque',
 ['abc', 'def', 'ghi'], ['abc', 'efg'], [{body: 'abc', ref:'ref'}], 'https://m.gpone.com/sites/default/files/images/2021/article/foto/05/MotoGP/05-LeMans/rossi-box-1621097058.jpg');
document.querySelector(".content").appendChild(card.render());


let currentHTML = {
    domContent: ''
};