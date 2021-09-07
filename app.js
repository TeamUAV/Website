// import { urlRouter } from "./Pages/GlobalAssets/router.js";
import { Navbar } from "./Pages/GlobalAssets/navbar.js";

class App{
    constructor(){
        this.navbar = new Navbar();
        this.navbar.render();
    }
}
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  /* your code here */
}
else{
    new App();

}