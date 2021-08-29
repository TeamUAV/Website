class SponsorsDataContainer{
    constructor()
    {
        let main_div=document.createElement("div");
        main_div.className="main_div";

        let popup_window=document.createElement("div");
        popup_window.className="popup_window";
        popup_window.id="popup_window";
        popup_window.className="popup_window";

        let back_button=document.createElement("span");
        
        back_button.className="back_button";
        let i = document.createElement('i');
        i.className = 'material-icons';
        i.id = 'back_button';
        i.innerText = 'close';
        // back_button.id="back_button";
        // back_button.appendChild(i);
        popup_window.appendChild(back_button);

        let image_div=document.createElement("div");
        image_div.className="image_div";
        image_div.id="image_div";
        image_div.className="image_div";

        let popup_image=document.createElement("img");
        popup_image.id="popup_image";
        // popup_image.src=ImageSrc;
        popup_image.className="popup_image";
        image_div.appendChild(popup_image);
        image_div.appendChild(i);   
        popup_window.appendChild(image_div);


        let description_container=document.createElement("div");
        description_container.id="description_container";
        description_container.className="description_container";
        

        //TITLE OF THE SPONSOR NEEDS TO BE ADDED
        // let title_container = document.createElement("div");
        let sponsors_title=document.createElement("div");
        sponsors_title.id="sponsors_title";
        sponsors_title.className="sponsors_title"
        // title_container.appendChild(sponsors_title);

        let image_description=document.createElement("p");
        image_description.id="image_description";
        image_description.className="image_description";
        
        description_container.appendChild(sponsors_title);
        description_container.appendChild(image_description);
        popup_window.appendChild(description_container);
        main_div.appendChild(popup_window);
        return main_div;
    }
    
   
}
export {SponsorsDataContainer}