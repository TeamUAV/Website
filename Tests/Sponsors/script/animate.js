// const root = document.documentElement;
const new_card_Displayed = 3;
const card_Content = document.querySelector("ul.card_content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);
let colour_list = ["blue", "green", "yellow"]
let sponsorsList = ["sponsor10","sponsor11","sponsor12"]
for(let i=0; i<new_card_Displayed; i++) {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = "assets/image 8.png";
  img.id = sponsorsList[i];
  div.className = "sponsors_logo_card"
  div.style.backgroundColor = colour_list[i];
  div.appendChild(img);
  li.appendChild(div);
  card_Content.appendChild(li);
}