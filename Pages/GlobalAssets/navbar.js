class Navbar {
  constructor() {
    this.navNodeList = [];
    document.querySelector(
      "head"
    ).innerHTML += `<link rel="stylesheet" href="Pages/GlobalAssets/navbar.css"/>`;
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
      if (linkItems[i] === "Home") {
        li.classList.add("active");
      }
      links.appendChild(li);
      this.navNodeList.push(li);
    }

    navbar.appendChild(description);
    navbar.appendChild(links);
    document.body.appendChild(navbar);
    // let container = document.createElement("div");
    // container.className = "container home";
    // document.body.appendChild(container);
    this.handleClick();
  }

  handleClick() {
    for (let node of this.navNodeList) {
      switch (node.id) {
        case "nav-link home":
          node.addEventListener("click", () => {
            new Home();
            this.toggleHelper(node.id);
          });
          break;
        case "nav-link about":
          node.addEventListener("click", (e) => {
            const url = new URL(window.location.href);
            console.log("nav-link about");
            this.toggleHelper(node.id);
          });
          break;
        case "nav-link fleet":
          node.addEventListener("click", () => {
            console.log("nav-link fleet");
            this.toggleHelper(node.id);
          });
          break;
        case "nav-link sponsors":
          node.addEventListener("click", () => {
            console.log("nav-link sponsors");
            this.toggleHelper(node.id);
          });
          break;
        case "nav-link gallery":
          node.addEventListener("click", () => {
            console.log("nav-link gallery");
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
}

let navbar = new Navbar();
navbar.render();
// navbar.handleClick();
