class about_page_title{
    constructor(text,title,text_id,title_id){
        this.text = text;
        this.title = title;
        this.text_id = text_id;
        this.title_id = title_id;
    }
    render(){
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.id = this.title_id;
        h1.innerText = this.title;
        let line1 = document.createElement("div");
        line1.id = 'about-title-underline';
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
    constructor(src,id,className){
        this.src = src;
        this.id = id;
        this.className = className;
    }

    render(){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.id = this.id;
        img.className = this.classname;
        img.src = this.src;
        div.appendChild(img);
        return div;
        
    }
}

class Departments {
    constructor(){
        let dept_section = document.createElement("div");
        dept_section.id = 'dept_section';

        let background_image_left = document.createElement("img");
        background_image_left.src ="../assets/rectangle.png";
        background_image_left.id = 'background_image_left';

        let background_image_right = document.createElement("img");
        background_image_right.src ="../assets/rectangle.png";
        background_image_right.id = 'background_image_right';

        let dept_images = document.createElement("div");
        dept_images.id = 'dept_images';

        let dept = new images(data[4].src3,"dept",undefined)
        let cs = new images(data[4].src4,"cs",'cs-elec')
        let elec = new images(data[4].src5,"elec",'cs-elec')
        let manage = new images(data[4].src6,"manage",'manage-mech')
        let mech = new images(data[4].src7,"mech",'manage-mech')

        dept_images.appendChild(dept.render());
        dept_images.appendChild(cs.render());
        dept_images.appendChild(elec.render());
        dept_images.appendChild(manage.render());
        dept_images.appendChild(mech.render());        

        dept_section.appendChild(background_image_right);
        dept_section.appendChild(background_image_left);
        dept_section.appendChild(dept_images);

        this.dept_ = dept_section;
    }

    render() {
        return this.dept_
    }
}


class Departments_Card{
    constructor(id,classs,top,titlee,text,src,line_width,top_bullet,number){
        this.id = id;
        this.classs = classs;
        this.top = top;
        this.titlee = titlee;
        this.text = text;
        this.src = src ;
        this.line_width = line_width;
        this.top_bullet = top_bullet;
        this.number = number;
    }
    render() {
        let div = document.createElement("div");
        div.id = this.id;
        div.className = this.classs;
        div.style.top = this.top + 'vh';
        let img = document.createElement("img");
        img.className = "image";
        let box_title = document.createElement("div");
        box_title.className = "box_title";
        let line = document.createElement("div");
        line.className = 'card_title_underline';
        line.style.width = this.line_width + 'vw';
        let box_content = document.createElement("div");
        box_content.className = "box-content";
        img.src = this.src;
        box_title.innerText = this.titlee;
        box_content.innerText = this.text;

        let button = document.createElement("button")
        button.className = "button";
        button.innerText = "View More";

        let bullet = document.createElement("div");
        bullet.className = "bullet";
        bullet.style.top = this.top_bullet + 'vh';
        bullet.innerText = this.number;

        div.appendChild(img);
        div.appendChild(box_title);
        div.appendChild(line);
        div.appendChild(box_content);
        div.appendChild(button)
        div.appendChild(bullet);
        return div;
    }
}


function about_box(){
    let info_box = document.createElement("div");
    info_box.id = "info_box";
    let about_ = new about_page_title(data[0].content,data[0].title,'about-text','about-title');
    info_box.appendChild(about_.render());
    return info_box;
}

function departments_section ()
{   
    let department = new Departments();
    return department.render();
}
function box_(){
    let Box_container = document.createElement("div");
    Box_container.id = "Box_container";

    let box1 = new Departments_Card('board','box',93,data[1].title,data[1].content,data[4].src8,29,18,1);
    Box_container.appendChild(box1.render());
    let line5 = document.createElement("div");
    line5.id = 'vertical_line1';
    line5.className = 'vertical_line'
    Box_container.appendChild(line5);

    let box2 = new Departments_Card('alumni','box',97,data[2].title,data[2].content,data[4].src9,14,18.5,2);
    Box_container.appendChild(box2.render());
    let line6 = document.createElement("div");
    line6.id = 'vertical_line2';
    line6.className = 'vertical_line'
    Box_container.appendChild(line6);
    let box3 = new Departments_Card('alumni','box',101,data[3].title,data[3].content,data[4].src10,27,19,3);
    Box_container.appendChild(box3.render());
    return Box_container;
}
function about_page() {
    let container = document.createElement("div");
    container.id = "container";
    container.appendChild(about_box());
    container.appendChild(departments_section());
    container.appendChild(box_());
    document.body.appendChild(container);
}
about_page();