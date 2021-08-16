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
        description_container.appendChild(image_description);

        main_div.appendChild(popup_window);
        return main_div;
    }
    
   
}
export {SponsorsDataContainer}