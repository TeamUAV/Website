import {AboutPage, AboutKnowMorePage} from '../About/MainPage/script/about.js';
import {FleetPage} from '../Fleet/scripts/fleet.js';

class Navbar {
  constructor() {
    this.navNodeList = [];
    this.domObj  = {dom : null};
  }
  render() {
    let navbar = document.createElement("nav");
    navbar.className = "navbar";
    let description = document.createElement("ul");
    description.className = "description";
    let logoImg = document.createElement("li");
    let img = document.createElement("img");
    img.src = "Pages/GlobalAssets/logo.png";
    logoImg.appendChild(img);
    let text = document.createElement("li");
    let name = document.createElement("p");
    name.innerText = "Team UAV";
    let desc = document.createElement("p");
    desc.innerText = "VIT's official autonomous aerial vehicle team";
    text.appendChild(name);
    text.appendChild(desc);
    description.appendChild(logoImg);
    description.appendChild(text);

    let links = document.createElement("ul");
    links.className = "links";
    let linkItems = ["Home", "About", "Fleet", "Sponsors", "Gallery"];
    for (let i = 0; i < linkItems.length; i++) {
      let li = document.createElement("li");
      li.innerText = linkItems[i];
      li.id = `nav-link ${linkItems[i].toLowerCase()}`;
      links.appendChild(li);
      this.navNodeList.push(li);
    }

    navbar.appendChild(description);
    navbar.appendChild(links);
    document.body.appendChild(navbar);
    let container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
    this.handleClick();
    if(!location.hash){
      location.hash = 'home';
  }
    // new Home();
    this.newPage = true;
    // renders the page with the required content
    this.renderPage(location.hash);

    window.addEventListener("hashchange", () => {
      this.renderPage(location.hash);
    })
  }

  handleClick() {
    for (let node of this.navNodeList) {
      switch (node.id) {
        case "nav-link home":
          node.addEventListener("click", () => {
            location.hash = '#home';
            this.toggleHelper(node.id);
            // this.renderPage(location.hash);
          });
          break;
        case "nav-link about":
          node.addEventListener("click", (e) => {
            location.hash = '#about';
            this.toggleHelper(node.id);
            // this.renderPage(location.hash);
          });
          break;
        case "nav-link fleet":
          node.addEventListener("click", () => {
            location.hash = '#fleet';
            this.toggleHelper(node.id);
            // this.renderPage(location.hash);
          });
          break;
        case "nav-link sponsors":
          node.addEventListener("click", () => {
            this.toggleHelper(node.id);
          });
          break;
        case "nav-link gallery":
          node.addEventListener("click", () => {
            this.toggleHelper(node.id);
          });
          break;
      }
    }
  }
  toggleHelper(id) {
    this.navNodeList.map((obj) => obj.classList.remove("active"));
    this.navNodeList.filter((obj) => obj.id === id)[0].classList.add("active");
  }

  renderPage(hash) {
    this.active = [...document.querySelector('.container').classList];
    this.active.splice(this.active.indexOf('container') ,1);
    if(!this.newPage){
        this.active.includes('fleet') ? console.log(this.domObj.dom.destroy()) : "";
        this.active.map((act) => document.querySelector('.container').classList.remove(act));
    }
    this.newPage = false;

    const myNode = document.querySelector('.container');
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

    switch (hash) {
        case '#home':
            this.toggleHelper(this.navNodeList[0].id);
            document.querySelector('.container').classList.add('home');
            this.domObj.dom = new Home();
            break;
        case '#about':
          this.toggleHelper(this.navNodeList[1].id);
            document.querySelector('.container').classList.add('about');
            this.domObj.dom = new AboutPage();
            break;
        case '#fleet':
          this.toggleHelper(this.navNodeList[2].id);
            document.querySelector('.container').classList.add('fleet');
            this.domObj.dom = new FleetPage();
            break;
        case '#know-more-board':
          this.toggleHelper(this.navNodeList[1].id);
            document.querySelector('.container').classList.add('about');
            document.querySelector('.container').classList.add('know-more');
            this.domObj.dom = new AboutKnowMorePage(knowMorePageData[0].title, knowMorePageData[0].list.map((obj) => obj.listTitle), knowMorePageData[0].list);                    
            break;
        case '#know-more-core':
          this.toggleHelper(this.navNodeList[1].id);
            document.querySelector('.container').classList.add('about');
            document.querySelector('.container').classList.add('know-more');
            this.domObj.dom = new AboutKnowMorePage(knowMorePageData[1].title, knowMorePageData[1].list.map((obj) => obj.listTitle), knowMorePageData[1].list);                    
            break;
    }
  }
}



export { Navbar };
