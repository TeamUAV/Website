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
sponsorsList = ["sponsor1","sponsor2","sponsor3","sponsor4","sponsor5","sponsor6","sponsor7","sponsor8","sponsor9"]
class sponsors_card{
    constructor(list) {
        let sponsors_card_container = document.createElement("div");
        sponsors_card_container.className = "sponsors_card_container"
        let card_content = document.createElement("ul");
        card_content.className = "card_content";
        let colour_list = ["blue", "green", "yellow", "red","grey", "white","purple","orange", "pink"];
        this.sponsorsList = list;
        for(let i=0; i<9; i++) {
            let li = document.createElement("li");
            let sponsors_logo_card = document.createElement("div");
            let img = document.createElement("img");
            img.src = "assets/image 8.png";
            img.id = this.sponsorsList[i];
            sponsors_logo_card.className = "sponsors_logo_card"
            sponsors_logo_card.style.backgroundColor = colour_list[i];
            sponsors_logo_card.appendChild(img);
            li.appendChild(sponsors_logo_card);
            card_content.appendChild(li);
        }
        sponsors_card_container.appendChild(card_content)
        return sponsors_card_container

    }
    
}
class sponsors_renderer{
    constructor() {
        let div = document.createElement("div");
        div.id = 'container';
        let title = new Sponsors_page_title();
        let card = new sponsors_card(sponsorsList);
        div.appendChild(title);
        div.appendChild(card);
        return div;
    }
}
let sponsors_page = new sponsors_renderer()
document.body.appendChild(sponsors_page);
