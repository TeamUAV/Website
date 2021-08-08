import { IconFrame, InfoPanel } from "./components.js";
import {
  init,
  modelInitialize,
  modelToggler,
  dispose,
} from "./model-renderer.js";

// let activeIndex = 0;

// init(document.querySelector('.fleet-model'));
// modelInitialize("Pages/Fleet/models/vaayu/vaayu.gltf");

class FleetPage {
  constructor() {
    this.activeIndex = 0;
    this.domElement = document.querySelector(".container.fleet");
    let actives = fleet_data.map((obj) => obj.active_icon_url);
    let inactives = fleet_data.map((obj) => obj.inactive_icon_url);

    this.iconsFrame = new IconFrame(inactives, actives);
    this.iconsFrame.render();
    this.iconsFrame.iconDOMs[this.activeIndex].toggleActive();

    this.domElement.appendChild(this.iconsFrame.domElement);

    this.infoPanel = new InfoPanel();
    this.infoPanel.render(
      fleet_data[this.activeIndex].name,
      fleet_data[this.activeIndex].short_description,
      fleet_data[this.activeIndex].miniStats,
      fleet_data[this.activeIndex].long_description,
      fleet_data[this.activeIndex].graph_stats
    );

    this.domElement.appendChild(this.infoPanel.domElement);

    let elem = document.createElement("div");
    elem.className = "fleet-model";
    this.domElement.appendChild(elem);
    this.destroy = () => {
      dispose();
    };
    init(elem);
    this.clickHandler();
    modelInitialize(fleet_data[this.activeIndex].model_url);
  }
  clickHandler() {
    this.infoPanel.domBtn.addEventListener("click", () => {
      document.querySelector(".fleet-info").classList.toggle("expanded");
      this.infoPanel.blockIconClick = true;
    });

    this.infoPanel.domClose.addEventListener("click", () => {
      document.querySelector(".fleet-info").classList.toggle("expanded");
      this.infoPanel.blockIconClick = false;
    });

    this.iconsFrame.iconDOMs.map((element, index) => {
      element.domElement.addEventListener("click", () => {
        console.log("works");
        if (!this.infoPanel.blockIconClick && this.activeIndex != index) {
          if (
            modelToggler(
              fleet_data[index].model_url,
              fleet_data[index].model_coordinates.height,
              fleet_data[index].model_coordinates.x,
              fleet_data[index].model_coordinates.y,
              fleet_data[index].model_coordinates.z
            )
          ) {
            this.iconsFrame.iconDOMs[this.activeIndex].toggleActive();
            this.activeIndex = index;
            element.toggleActive();
            this.infoPanel.render(
              fleet_data[this.activeIndex].name,
              fleet_data[this.activeIndex].short_description,
              fleet_data[this.activeIndex].miniStats,
              fleet_data[this.activeIndex].long_description,
              fleet_data[this.activeIndex].graph_stats
            );
          }
        }
      });
    });
  }
}

// let page = new FleetPage();
export { FleetPage };
