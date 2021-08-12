sponsorsList = ["sponsor1","sponsor2","sponsor3","sponsor4","sponsor5","sponsor6","sponsor7","sponsor8","sponsor9","sponsor10","sponsor11","sponsor12"]
class SponsorsDataContainer{
    constructor()
    {
        let main_div=document.createElement("div");
        main_div.className="main_div";

        // let sponsors_image=document.createElement("img");
        // sponsors_image.src=ImageSrc;
        // sponsors_image.id="sponsors_image";
        // sponsors_image.className="sponsors_image";

        let popup_window=document.createElement("div");
        popup_window.className="popup_window";
        popup_window.id="popup_window";
        popup_window.className="popup_window";

        let back_button=document.createElement("span");
        
        back_button.className="back_button";
        back_button.innerText="x";
        back_button.id="back_button";
        popup_window.appendChild(back_button);

        let popup_image=document.createElement("img");
        popup_image.id="popup_image";
        // popup_image.src=ImageSrc;
        popup_image.className="popup_image";
        popup_window.appendChild(popup_image);


        let description_container=document.createElement("div");
        description_container.id="description_container";
        description_container.className="description_container";
        popup_window.appendChild(description_container);


        let image_description=document.createElement("p");
        image_description.id="image_description";
        image_description.className="image_description";
        // image_description.innerHTML=document_description;
        description_container.appendChild(image_description);

        // main_div.appendChild(sponsors_image);
        main_div.appendChild(popup_window);
        return main_div;
    }
    
   
}
let div  = document.getElementById("container")
let popup = new SponsorsDataContainer()
div.appendChild(popup);
function handleClick(){
    sponsorsList.map((node, index) => {
        console.log(node,index);
        let description  = document.getElementById("image_description");
        let close_button=document.getElementById("back_button");
        let popup_container=document.getElementById("popup_window");
        // let logo = document.getElementById("sponsor1")
        if (index >=9){
            index = index-9;
        };
        document.getElementById(node).onclick = function() 
        {
            
            description.innerHTML = data[index].title;
            popup_container.style.opacity = 1;
            popup_image.src = "assets/image 8.png";


        }
        close_button.onclick = function()
        {  
            popup_container.style.opacity = 0;
        }
    });
}
handleClick();