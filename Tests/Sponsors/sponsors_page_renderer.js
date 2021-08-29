import {SponsorsDataContainer} from './sponsors_card.js';
class Sponsors_page_title{
    constructor(){
        let title_container = document.createElement("div");
        title_container.id = "title-container"
        let title_filled = document.createElement("h1");
        let title_border = document.createElement("h1");
        title_filled.id = 'title_filled';
        title_border.id = 'title_border';

        title_filled.innerText = "Sponsors";
        title_border.innerText = "Sponsors";

        title_container.appendChild(title_border);
        title_container.appendChild(title_filled);
        
        return title_container;
    }
}
var sponsorsList = ["sponsor1","sponsor2","sponsor3","sponsor4","sponsor5","sponsor6","sponsor7","sponsor8","sponsor9"]
class sponsors_card{
    constructor(list,data) {
        let sponsors_card_container = document.createElement("div");
        sponsors_card_container.className = "sponsors_card_container"
        let card_content = document.createElement("ul");
        card_content.className = "card_content";
        let colour_list = ["blue", "green", "yellow", "red","grey", "white","purple","orange", "pink"];
        this.sponsorsList = list;
        this.data = data;
        for(let i=0; i<9; i++) {
            let li = document.createElement("li");
            let sponsors_logo_card = document.createElement("div");
            let img = document.createElement("img");
            img.src = this.data[i].src;
            img.id = this.sponsorsList[i];
            sponsors_logo_card.className = "sponsors_logo_card"
            sponsors_logo_card.style.backgroundColor = colour_list[i];
            sponsors_logo_card.appendChild(img);
            li.appendChild(sponsors_logo_card);
            card_content.appendChild(li);
        }
        sponsors_card_container.appendChild(card_content)
        // this.handleClick();
        return sponsors_card_container

    }
}
class sponsors_renderer{
    constructor(data) {
        this.data = data;
        let div = document.createElement("div");
        div.id = 'container';

        let div2 = document.createElement("div");
        div2.id = "toBeBlur";
        let title = new Sponsors_page_title();
        let card = new sponsors_card(sponsorsList,this.data);
        div2.appendChild(title);
        div2.appendChild(card);
        div.appendChild(div2);
        let popup = new SponsorsDataContainer()
        div.appendChild(popup);
        return div;
    }
}
let sponsors_page = new sponsors_renderer(sponsorsData)
document.body.appendChild(sponsors_page);

function handleClick(sponsors_data) {
    sponsorsList.map((node, index) => {
        console.log(node,index);
        let description  = document.getElementById("image_description");
        let popup_container=document.getElementById("popup_window");
        let sponsorsTitle = document.getElementById("sponsors_title")

        document.querySelector(`#${node}`).addEventListener("click", function() 
        {
            
            description.innerHTML = sponsors_data[index].description;
//             popup_container.style.opacity = 1;
            sponsorsTitle.innerHTML = sponsors_data[index].title;
            popup_image.src = sponsors_data[index].src;
            popup_container.classList.add("active");
            popup_container.classList.remove("inactive");
            document.querySelector(".card_content").classList.add("animateStop");
            document.querySelector("#toBeBlur").classList.add("blur");


        });
        document.querySelector('#back_button').addEventListener("click", function()
        {  
//             popup_container.style.opacity = 0;
            popup_container.classList.remove("active");
            popup_container.classList.add("inactive");
            document.querySelector(".card_content").classList.remove("animateStop");
            document.querySelector("#toBeBlur").classList.remove("blur");
            
        });
    });
}
handleClick(sponsorsData);
