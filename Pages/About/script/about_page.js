class about {
    constructor(text,title,text_id,title_id){
        this.text = text;
        this.title = title;
        this.text_id = text_id;
        this.title_id = title_id;
    }
    run(){
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.id = this.title_id;
        h1.innerText = this.title;
        let line1 = document.createElement("div");
        line1.id = 'line1';
        let content_box = document.createElement("div");
        content_box.id =this.text_id;
        content_box.innerText = this.text

        div.appendChild(h1);
        div.appendChild(line1);
        div.appendChild(content_box);
        return div;
    }
}  
class images{
    constructor(src,id,classs,iconn,left){
        this.src = src;
        this.id = id;
        this.classs = classs;
        this.iconn = iconn;
        this.left = left;
    }

    run(){
        let img = document.createElement("img");
        img.id = this.id;
        img.className = this.classs;
        img.src = this.src;
        img.style.left = this.left + 'px';

        if(this.iconn == true){
            img.onclick = () =>{
                console.log("Click");
            };
        };
        return img;
    }
}

class box{
    constructor(id,classs,top,titlee,text,src,line_width){
        this.id = id;
        this.classs = classs;
        this.top = top;
        this.titlee = titlee;
        this.text = text;
        this.src = src ;
        this.line_width = line_width;
    }
    run(){
        let div = document.createElement("div");
        div.id = this.id;
        div.className = this.classs;
        div.style.top = this.top + 'px';
        let img = document.createElement("img");
        img.className = "image";
        let box_title = document.createElement("div");
        box_title.className = "box_title";
        let line = document.createElement("div");
        line.className = 'line';
        line.style.width = this.line_width + 'px';
        let box_content = document.createElement("div");
        box_content.className = "box-content";
        img.src = this.src;
        box_title.innerText = this.titlee;
        box_content.innerText = this.text;

        let button = document.createElement("button")
        button.className = "button";
        button.innerText = "View More";

        div.appendChild(img);
        div.appendChild(box_title);
        div.appendChild(line);
        div.appendChild(box_content);
        div.appendChild(button)
        return div;
    }
}

class bullets{
    constructor(classs,top,num_classs,number){
        this.classs = classs;
        this.top = top;
        this.num_classs = num_classs;
        this.number = number;
    }

    run(){
        let bullet = document.createElement("div");
        bullet.className = this.classs;
        bullet.style.top = this.top + 'px';

        let num = document.createElement("div");
        num.className =this.num_classs;
        num.innerText = this.number;
        bullet.appendChild(num);
        return bullet;
    }

}

function about_box(){
    let info_box = document.createElement("div");
    info_box.id = "info_box";
    let about_ = new about(data[0].content,data[0].title,'about-text','about-title');
    info_box.appendChild(about_.run());
    return info_box;
}

function departments_section ()
{   
    let image = document.createElement("div");
    image.id = 'image';
    let left = new images(data[4].src1,"left",undefined,false,undefined)
    let right = new images(data[4].src2,"right",undefined,false,undefined)
    let dept = new images(data[4].src3,"dept",undefined,false,undefined)
    let cs = new images(data[4].src4,"cs",'cs-elec',true,270)
    let elec = new images(data[4].src5,"elec",'cs-elec',true,850)
    let manage = new images(data[4].src6,"manage",'manage-mech',true,20)
    let mech = new images(data[4].src7,"mech",'manage-mech',true,1145)
    image.appendChild(left.run());
    image.appendChild(right.run());
    image.appendChild(dept.run());
    image.appendChild(cs.run());
    image.appendChild(elec.run());
    image.appendChild(manage.run());
    image.appendChild(mech.run());
    return image;
}
function box_(){
    let Box_container = document.createElement("div");
    Box_container.id = "Box_container";

    let box1 = new box('board','box',1512,data[1].title,data[1].content,data[4].src8,540);
    Box_container.appendChild(box1.run());

    let box2 = new box('alumni','box',1552,data[2].title,data[2].content,data[4].src9,250);
    Box_container.appendChild(box2.run());

    let box3 = new box('alumni','box',1622,data[3].title,data[3].content,data[4].src10,500);
    Box_container.appendChild(box3.run());
    return Box_container;

}
function bullet(){
    let div = document.createElement("div");
    let bullet1 = new bullets('bullet',259,'number',1);
    let line5 = document.createElement("div");
    line5.id = 'vertical_line1';
    line5.className = 'vertical_line'
    let bullet2 = new bullets('bullet',700,'number',2);
    let line6 = document.createElement("div");
    line6.id = 'vertical_line2';
    line6.className = 'vertical_line'
    let bullet3 = new bullets('bullet',1135,'number',3);
    div.appendChild(bullet1.run());
    div.appendChild(line5);
    div.appendChild(bullet2.run());
    div.appendChild(line6);
    div.appendChild(bullet3.run());
    return div;
}
function about_page() {
    let container = document.createElement("div");
    container.id = "container";
    container.appendChild(about_box());
    container.appendChild(departments_section());
    container.appendChild(box_());
    container.appendChild(bullet());
    document.body.appendChild(container);
}
about_page();