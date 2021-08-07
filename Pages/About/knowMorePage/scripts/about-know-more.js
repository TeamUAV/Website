import { MemberList, KnowMoreCard } from "./components.js";

class AboutKnowMorePage{
    constructor(title, listTitles, listItemContents){
        this.domElement = document.querySelector('.container.about.know-more');

        let pageTitle = document.createElement('p');
        pageTitle.innerText = title;
        pageTitle.id = "title";

        let contentDom = document.createElement('div');
        contentDom.className = "content";

        this.domElement.appendChild(pageTitle);
        this.domElement.appendChild(contentDom);

        this.memberList = new MemberList(listTitles);
        this.memberList.render();
        
        this.cardContents = listItemContents;
        this.activeIndex = 0;

        this.knowMoreCard = new KnowMoreCard(
            this.cardContents[this.activeIndex].name,
            this.cardContents[this.activeIndex].about,
            this.cardContents[this.activeIndex].skillSet,
            this.cardContents[this.activeIndex].positionsHeld,
            this.cardContents[this.activeIndex].contact,
            this.cardContents[this.activeIndex].imgSrc,
            this.cardContents[this.activeIndex].callSign,
        );
        this.knowMoreCard.render();
        contentDom.appendChild(this.knowMoreCard.DOMCard);
        this.handleClick();
    }
    handleClick(){
        this.memberList.nodeList.map((node, index) => {
            console.log(node.component);
            node.component.addEventListener('click', () => {
                if(this.activeIndex != index){
                    this.memberList.nodeList[this.activeIndex].toggleActive();
                    this.activeIndex = index;

                    this.memberList.nodeList[this.activeIndex].toggleActive();

                    this.knowMoreCard.updateCard(
                        this.cardContents[this.activeIndex].name,
                        this.cardContents[this.activeIndex].about,
                        this.cardContents[this.activeIndex].skillSet,
                        this.cardContents[this.activeIndex].positionsHeld,
                        this.cardContents[this.activeIndex].contact,
                        this.cardContents[this.activeIndex].imgSrc,
                        this.cardContents[this.activeIndex].callSign,
                    );
                }
            })
        });
    }
}

new AboutKnowMorePage(knowMorePageData[0].title, knowMorePageData[0].list.map((obj) => obj.listTitle), knowMorePageData[0].list);