class CreditsPage{
    constructor(){
        let container = document.querySelector('.container.credits');
        let card = new CreditsMoreCard('/Pages/About/knowMorePage/Assets/Senior Core/gaurav.jpeg');
        card.render(creditsData[0].data[0].name, creditsData[0].data[0].about, creditsData[0].data[0].skills, creditsData[0].data[0].positions_held, creditsData[0].data[0].links, creditsData[0].data[0].callSign);
        this.card = card;
        container.appendChild(card.domElement);

        let content = document.createElement('div');
        content.className = 'content';

        let title = new TitleDiv(creditsData[0].data[0].name, creditsData[0].data[0].about);
        content.appendChild(title.domElement);

        this.titleMoreBtn = title.moreBtn;

        this.nodeListGroups = [];

        for(let values of creditsData){
            let panel_content = [];
            for(let value of values.data){
                panel_content.push({
                    name: value.name,
                    imgSrc: value.imgSrc
                });
            }
            let panel = new CreditsPanel(values.key, panel_content);
            this.nodeListGroups.push(
                {
                    key: values.key,
                    nodeList: panel.nodeList
                }
            );
            content.appendChild(panel.domElement);
        }
        this.domElement = container;
        this.domElement.scrollBy(0, 0);
        this.handleClick();
        container.appendChild(content);
    }
    handleClick(){
        for (let nodes of this.nodeListGroups){
            nodes.nodeList.map((node, index) => {
                node.addEventListener('click', () => {
                    let elem = creditsData.filter((data) => data.key === nodes.key)[0].data[index];
                    this.handleClickHelper(elem);
                });
            })
        }
        this.titleMoreBtn.addEventListener('click', () => {
            let elem = creditsData.filter((data) => data.key === 'Developers')[0].data[0];
            this.handleClickHelper(elem);
        });
    }
    handleClickHelper(elem) {
        this.card.update(elem.name, elem.about, elem.skills, elem.positions_held, elem.links, elem.callSign, elem.imgSrc);
        document.querySelector('.credit-more-card').classList.toggle('visible');
        document.querySelector('.container.credits').classList.toggle('know-more');
    }
}