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
        img.className = "know-more-card";
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

        // fields
        details.appendChild(new KnowMoreGeneralField('name', this.name, false));
        details.appendChild(new KnowMoreGeneralField('about', this.about, false));
        details.appendChild(new KnowMoreGeneralField('skills', this.skills, false));
        details.appendChild(new KnowMorePositionsField(this.positions));
        details.appendChild(new KnowMoreLinkField(this.links));

        this.DOMCard.appendChild(details);
        this.DOMCard.appendChild(img);
    }
}

class KnowMoreGeneralField{
    constructor(title, body, long){
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