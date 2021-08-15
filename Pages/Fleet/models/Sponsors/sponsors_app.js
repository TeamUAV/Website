class SponsorsDataContainer{
    constructor(ImageSrc, document_description)
    {
        let main_div=document.createElement("div");
        main_div.className="main_div";

        let sponsors_image=document.createElement("img");
        sponsors_image.src=ImageSrc;
        sponsors_image.id="sponsors_image";
        sponsors_image.className="sponsors_image";

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
        popup_image.src=ImageSrc;
        popup_image.className="popup_image";
        popup_window.appendChild(popup_image);


        let description_container=document.createElement("div");
        description_container.id="description_container";
        description_container.className="description_container";
        popup_window.appendChild(description_container);


        let image_description=document.createElement("p");
        image_description.id="image_description";
        image_description.className="image_description";
        image_description.innerHTML=document_description;
        description_container.appendChild(image_description);

        main_div.appendChild(sponsors_image);
        main_div.appendChild(popup_window);

        this.domElement=main_div;
    }
    render()
    {
        return this.domElement;
    }
   
}
let arr=[
    new SponsorsDataContainer("Pages/Fleet/assets/grass.jpeg",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
     
    new SponsorsDataContainer("Pages/Fleet/assets/hex.png",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
];
  arr.map((elem)=>document.body.appendChild(elem.render()));

//   popup_function()
//   {
      let image=document.getElementById("sponsors_image");
      let popup_container=document.getElementById("popup_window");
  
      let close_button=document.getElementById("back_button");
  
      image.onclick=function()
      {
          popup_container.style.display = "flex";
      }
  
      close_button.onclick = function()
       {  
          popup_container.style.display = "none";
      }
//   }
  
