let reverse = false;
let secondAnimationFlag = false;

function background() {
  let baseURL = "Projects/Assets/Components/";
  let imgsrcList = [
    "Group10.svg",
    "Group17.svg",
    "Group18.svg",
    "Group15.svg",
    "Group14.svg",
    "Group12.svg",
    "Group11.svg",
    "Group16.svg",
  ];
  let idList = [
    "img-top-left",
    "img-bottom-left-1",
    "img-bottom-left-2",
    "img-top-middle",
    "img-middle-middle",
    "img-middle-bottom",
    "img-middle-right",
    "img-bottom-right",
  ];
  let div = document.createElement("div");
  div.className = "background";
  for (let i = 0; i < imgsrcList.length; i++) {
    let img = document.createElement("img");
    img.src = `${baseURL}${imgsrcList[i]}`;
    img.id = idList[i];
    div.appendChild(img);
  }
  return div;
}

function navbar() {
  let navbar = document.createElement("div");
  navbar.className = "navbar";
  let teamInfo = document.createElement("div");
  teamInfo.id = "team-info";
  let logo = document.createElement("div");
  logo.id = "logo";
  let textInfo = document.createElement("div");
  textInfo.id = "text-info";
  let title = document.createElement("p");
  title.innerText = "Team UAV";
  let about = document.createElement("p");
  about.innerText = "VIT's official autonomous aerial robotics Team";
  textInfo.appendChild(title);
  textInfo.appendChild(about);

  teamInfo.appendChild(logo);
  teamInfo.appendChild(textInfo);
  navbar.appendChild(teamInfo);

  let routes = ["Home", "About", "Projects", "Sponsors", "Gallery"];
  let routes_container = document.createElement("div");
  routes_container.id = "page-routes";
  let route_list = document.createElement("ul");
  route_list.id = "route-list";
  for (let i = 0; i < routes.length; i++) {
    let li = document.createElement("li");
    li.innerText = routes[i];
    if (routes[i] === "Projects") li.className = "active";
    route_list.appendChild(li);
  }
  routes_container.appendChild(route_list);
  navbar.appendChild(routes_container);
  return navbar;
}

function viewIcons() {
  let view_icon_holder = document.createElement("div");
  view_icon_holder.id = "view-icon-holder";

  let up_icon = document.createElement("div");
  let down_icon = document.createElement("div");
  up_icon.className = "view-toggler";
  up_icon.id = "up";
  down_icon.className = "view-toggler";
  down_icon.id = "down";
  let ul = document.createElement("ul");
  ul.id = "project-icons-list";
  for (let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    li.className = "icon-content";
    let div = document.createElement("div");
    let img_1 = document.createElement("img");
    let img_2 = document.createElement("img");
    img_1.id = "img-inactive";
    img_1.src = `Projects/Assets/Icons/Unselected-${i + 1}.svg`;
    img_2.id = "img-active";
    img_2.src = `Projects/Assets/Icons/Selected-${i + 1}.svg`
    div.appendChild(img_1);
    div.appendChild(img_2);
    li.appendChild(div);
    ul.appendChild(li);
  }
  view_icon_holder.appendChild(up_icon);
  view_icon_holder.appendChild(ul);
  view_icon_holder.appendChild(down_icon);
  return view_icon_holder;
}

function overlayInfo() {
  let div_1 = document.createElement("div");
  div_1.id = "space-holder";
  let div_2 = document.createElement("div");
  div_2.id = "threejs-container";
  return [div_1, div_2];
}

function project_page() {
  let project_container = document.createElement("div");
  project_container.className = "projects-container";
  project_container.appendChild(navbar());
  project_container.appendChild(background());

  let overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.appendChild(viewIcons());
  divs = overlayInfo();
  overlay.appendChild(divs[0]);
  overlay.appendChild(divs[1]);

  project_container.appendChild(overlay);

  document.body.appendChild(project_container);
}

project_page();

let data_container = document.createElement("div");
data_container.id = "overlay-info-content";

let trace = document.querySelector("#space-holder").getBoundingClientRect();
data_container.style.left = `${trace.left}px`;
data_container.style.top = `${trace.top}px`;
data_container.style.width = `${trace.width}px`;
data_container.style.height = `${trace.height}px`;
document.body.appendChild(data_container);

let flag = true;

data_container.addEventListener("click", function () {
  data_container.classList.toggle("blur");
  [reverse, secondAnimationFlag] = background_animate(reverse, secondAnimationFlag);
  if (flag) {
    data_container.style.backgroundColor = "#19193851";
    let trace = document.querySelector(".overlay").getBoundingClientRect();
    data_container.style.left = `${trace.left}px`;
    data_container.style.top = `${trace.top}px`;
    data_container.style.width = `${trace.width}px`;
    data_container.style.height = `${trace.height}px`;
    document.querySelector("#threejs-container").style.opacity="0";
  } else {
    data_container.style.backgroundColor = "";
    document.querySelector("#threejs-container").style.opacity="";
    let trace = document.querySelector("#space-holder").getBoundingClientRect();
    data_container.style.left = `${trace.left}px`;
    data_container.style.top = `${trace.top}px`;
    data_container.style.width = `${trace.width}px`;
    data_container.style.height = `${trace.height}px`;
  }
  flag = !flag;
});

let list = document.querySelectorAll(".icon-content");
let list_inactive = document.querySelectorAll(".icon-content #img-inactive");
let list_active = document.querySelectorAll(".icon-content #img-active");

backgroundImageChanger(0);

let index = 0;

for (let i = 0; i < list.length; i++){
  list[i].addEventListener('click', function() {
  [reverse, secondAnimationFlag] = background_animate(reverse, secondAnimationFlag);
    index = i;
    backgroundImageChanger(index);
  })
}

function backgroundImageChanger(index){
  for (let i = 0; i < list.length; i++){
    if (i != index){
      list[i].classList.remove('active');
      list_active[i].style.opacity = "0";
      list_inactive[i].style.opacity = "1";
    }
    else{
      list[index].classList.add('active');
      list_active[i].style.opacity = "1";
      list_inactive[i].style.opacity = "0";
  }
  }
}