import {AboutPage, AboutKnowMorePage} from './Pages/About/MainPage/script/about.js';
import {FleetPage} from './Pages/Fleet/scripts/fleet.js';

class urlRouter{
    constructor(){
        this.active = ['home'];
        window.addEventListener('hashchange', () => {
            let hash = location.hash;
            this.active.map((act) => document.querySelector('.container').classList.toggle(act));
            document.querySelector('.container').innerHTML = "";
            switch (hash) {
                case '#home':
                    this.active = ['home'];
                    document.querySelector('.container').classList.toggle('home');
                    new Home();
                    break;
                case '#about':
                    this.active = ['about'];
                    document.querySelector('.container').classList.toggle('about');
                    new AboutPage();
                    break;
                // case '#about':
                //
                //     this.active = 'about';
                //     document.querySelector('.container').classList.toggle('about');
                //     new FleetPage();
                //     break;
                case '#fleet':
                    this.active = ['fleet'];
                    document.querySelector('.container').classList.toggle('fleet');
                    new FleetPage();
                    break;
                case '#know-more-board':
                    this.active = ['about', 'know-more'];
                    document.querySelector('.container').classList.toggle('about');
                    document.querySelector('.container').classList.toggle('know-more');
                    new AboutKnowMorePage(knowMorePageData[0].title, knowMorePageData[0].list.map((obj) => obj.listTitle), knowMorePageData[0].list);                    
                    break;
                case '#know-more-core':
                    this.active = ['about', 'know-more'];
                    document.querySelector('.container').classList.toggle('about');
                    document.querySelector('.container').classList.toggle('know-more');
                    new AboutKnowMorePage(knowMorePageData[1].title, knowMorePageData[1].list.map((obj) => obj.listTitle), knowMorePageData[1].list);                    
                    break;
            }
        });
    }
}

new urlRouter();