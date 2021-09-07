class Title {
  constructor() {
    let titleContainer = document.createElement("section");
    titleContainer.className = "title-content";

    let titleTextDiv = document.createElement("div");
    titleTextDiv.className = "title-text";
    let titleText = document.createElement("p");
    titleText.innerText = "Team UAV";
    let subTitleText = document.createElement("p");
    subTitleText.innerText = "VIT's official autonomous aerial vehicle team";
    titleTextDiv.appendChild(titleText);
    titleTextDiv.appendChild(subTitleText);

    let imageDiv = document.createElement("div");
    imageDiv.className = "image";
    let img = document.createElement("img");
    img.id = "display-triangles";
    img.src = "Pages/Home/All_together.png";

    let scrollText = document.createElement("p");
    scrollText.innerText = "Scroll Down";
    imageDiv.appendChild(img);
    imageDiv.appendChild(scrollText);

    titleContainer.appendChild(titleTextDiv);
    titleContainer.appendChild(imageDiv);
    
    titleContainer.appendChild(this.bars(true));
    titleContainer.appendChild(this.bars(false));

    this.domElement = titleContainer;
  }
  render() {
    return this.domElement;
  }

  bars(upper){
    let bar = document.createElement("div");
    let white = document.createElement('div');
    let red = document.createElement('div');
    for (let i = 0 ;i < 2; i++){
      white.appendChild(document.createElement('div'));
      red.appendChild(document.createElement('div'));
    }
    white.id = "white";
    red.id = "red";

    bar.appendChild(white);
    bar.appendChild(red);

    bar.className = "bars";
    bar.id = upper? "upper" : "lower";
    return bar;
  }
}




class HomeDataContainer {
  constructor(title, subtitle, description, imgSrc, reverse) {
    let dataContainer = document.createElement("section");
    dataContainer.className = "home-data-container";

    let gradientContent = document.createElement("div");
    gradientContent.className = "gradient-content";
    reverse ? (gradientContent.id = "reverse") : "";

    let textContent = document.createElement("div");
    textContent.className = "text-content";

    let titleH1 = document.createElement('h1');
    titleH1.id = "title";
    titleH1.innerText = title;
    textContent.appendChild(titleH1);


    let subTitleH1 = document.createElement('h1');
    subTitleH1.id = "subtitle";
    subTitleH1.innerText = subtitle;
    textContent.appendChild(subTitleH1);

    let p = document.createElement("p");
    p.id = "description";
    p.innerText = description;
    textContent.appendChild(p);

    let imgDiv = document.createElement("img");
    imgDiv.className = "image-content";

    imgDiv.src = imgSrc;

    gradientContent.appendChild(textContent);
    gradientContent.appendChild(imgDiv);

    dataContainer.appendChild(gradientContent);
    
    this.titleH1 = titleH1;
    this.domElement = dataContainer;
    this.handleClick();
  }
  handleClick(){
    this.titleH1.addEventListener("click", () => {
      location.hash = this.titleH1.innerText.toLowerCase();
    });
  }
  render() {
    return this.domElement;
  }
}




class Home{
  constructor(){
    let arr = [
      new HomeDataContainer(
        "About",
        "Know the hands that create these UAVs",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt voluptas voluptatem provident debitis laudantium enim temporibus unde alias rem voluptatibus porro praesentium, blanditiis, at perspiciatis ipsum illum quos. Odit.",
        "Pages/Home/about-ref.jpeg",
        false
      ),
      new HomeDataContainer(
        "Fleet",
        "See our expansive and versatile collection of UAVs",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt voluptas voluptatem provident debitis laudantium enim temporibus unde alias rem voluptatibus porro praesentium, blanditiis, at perspiciatis ipsum illum quos. Odit.",
        "Pages/Home/fleet-ref.jpeg",
        true
      ),
      new HomeDataContainer(
        "Gallery",
        "Look behind the scenes of work, fun and creations",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt voluptas voluptatem provident debitis laudantium enim temporibus unde alias rem voluptatibus porro praesentium, blanditiis, at perspiciatis ipsum illum quos. Odit.",
        "Pages/Home/gallery-ref.jpeg",
        false
      ),
      new HomeDataContainer(
        "Credits",
        `Credit where it's due, view the creators of this site`,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt voluptas voluptatem provident debitis laudantium enim temporibus unde alias rem voluptatibus porro praesentium, blanditiis, at perspiciatis ipsum illum quos. Odit.",
        "Pages/Home/credits-ref.jpeg",
        true
      ),
    ];
    let data = new Title();
    let div = document.querySelector(".container.home");
    div.appendChild(data.render());
    arr.map((elem, abc) => div.appendChild(elem.render()));
  }
}

