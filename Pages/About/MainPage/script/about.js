import { AboutPageCard, ImagePanel } from "./components.js";
import {AboutKnowMorePage} from "../../knowMorePage/scripts/about-know-more.js";

class AboutPage{
    constructor(){
        this.domElement = document.querySelector('.container.about');

        let heading = document.createElement('div');
        let head = ["About", "Team UAV"];
        for (let i of head){
            let p = document.createElement('p');
            p.innerText = i;
            heading.appendChild(p);
        }
        heading.id = "heading";
        this.domElement.appendChild(heading);

        let body = document.createElement('p');
        body.id = "about-body";
        body.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ullam ipsa quam, ipsam minus eligendi quibusdam sapiente natus impedit nesciunt, nulla ab modi quae et, suscipit delectus! Qui, modi impedit! Nisi, quaerat, ullam debitis veniam cupiditate, ducimus quis quam deleniti dolore possimus quae repudiandae hic fugit facilis fugiat natus id tempora voluptatum perspiciatis? Numquam molestiae repellat itaque error expedita eius.";

        this.domElement.appendChild(body);

        let banner = new ImagePanel();
        this.domElement.appendChild(banner.domElement);
        
        let card_board = new AboutPageCard(
            "",
            "Board members",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ut! Impedit iusto eligendi, sunt quos omnis adipisci perferendis aliquid nihil accusamus soluta dolores, molestias, odit odio ad? Nisi, deleniti beatae?",
            0
        );
        this.board_btn = card_board.btn;

        this.domElement.appendChild(card_board.domElement);

        let card_core = new AboutPageCard(
            "",
            "Senior Core",
            "The up and coming members of our team, responsible for its future endeavors. They are responsible for handling the management of the team and preparing its juniors to deal with mechanical and avionics tools with expertise.",
            1
        );
        this.core_btn = card_core.btn;

        this.domElement.appendChild(card_core.domElement);

        let card_alumni = new AboutPageCard(
            "",
            "Board members",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ut! Impedit iusto eligendi, sunt quos omnis adipisci perferendis aliquid nihil accusamus soluta dolores, molestias, odit odio ad? Nisi, deleniti beatae?",
            2
        );
        this.alumni_btn = card_alumni.btn;

        this.domElement.appendChild(card_alumni.domElement);
        this.handleClick();
    }
    handleClick(){
        let defaultPageFunction = (data_type) => {
            // let content = document.querySelector('.container');
            // content.innerHTML = "";
            // content.classList.toggle('about');
            // content.classList.add('about know-more');
            const myNode = document.querySelector('.container');
            while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
            }
            document.querySelector('.container').classList.add('about');
                    document.querySelector('.container').classList.add('know-more');
            switch (data_type) {
                case 'board':
                    location.hash = 'know-more-board';
                    break;
                    case 'core':
                        location.hash = 'know-more-core';
                        break;
                default:
                    break;
            }
        }
        this.board_btn.addEventListener('click', () => {defaultPageFunction('board')});
        this.core_btn.addEventListener('click', () => {defaultPageFunction('core')});
        this.alumni_btn.addEventListener('click', () => {defaultPageFunction('alumni')});
    }
}

// let banner = new AboutPage();
// document.querySelector('.container.about').appendChild(banner.domElement);
export {AboutPage, AboutKnowMorePage};