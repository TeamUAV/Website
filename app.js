// import { urlRouter } from "./Pages/GlobalAssets/router.js";
import { Navbar } from "./Pages/GlobalAssets/navbar.js";

class App{
    constructor(){
        this.navbar = new Navbar();
        this.navbar.render();
    }
}

const app = new App();

window.addEventListener("popstate", (event) => {
    // let navbar = app.navbar;
    // navbar.renderPage(location.hash);
    console.log('hello');
})