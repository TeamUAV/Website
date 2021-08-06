function graph_coordinates_generator(x_coordinates, y_coordinates) {
  let arr = [];
  for (let i = 0; i < x_coordinates.length; i++) {
    arr.push({
      x: x_coordinates[i],
      y: y_coordinates[i],
    });
  }
  return arr;
}

class Icon {
  constructor(inactive_url, active_url) {
    this.inactive_url = inactive_url;
    this.active_url = active_url;

    this.domElement = document.createElement("div");
    this.domElement.className = "fleet-icons-icon";
  }
  render() {
    this.img_1 = document.createElement("img");
    this.img_1.src = this.inactive_url;
    this.img_1.classList.toggle("active");

    this.img_2 = document.createElement("img");
    this.img_2.src = this.active_url;

    this.domElement.appendChild(this.img_1);
    this.domElement.appendChild(this.img_2);
  }
  toggleActive() {
    this.domElement.classList.toggle("active");
    this.img_1.classList.toggle("active");
    this.img_2.classList.toggle("active");
  }
}

class IconFrame {
  constructor(list_inactive_urls, list_active_urls) {
    this.domElement = document.createElement("div");
    this.domElement.className = "fleet-icons-container";
    this.iconDOMs = [];
    for (let i = 0; i < list_active_urls.length; i++)
      this.iconDOMs.push(new Icon(list_inactive_urls[i], list_active_urls[i]));

    this.up_icon = document.createElement("div");
    this.up_icon.className = "toggle";
    this.up_icon.id = "up";
    let img_1 = document.createElement("img");
    img_1.src = "Pages/Fleet/assets/up_btn.svg";
    this.up_icon.appendChild(img_1);

    this.down_icon = document.createElement("div");
    this.down_icon.className = "toggle";
    this.down_icon.id = "down";
    let img_2 = document.createElement("img");
    img_2.src = "Pages/Fleet/assets/down_btn.svg";
    this.down_icon.appendChild(img_2);

    this.icons_holder = document.createElement("div");
    this.icons_holder.className = "fleet-icons";

    this.domElement.appendChild(this.up_icon);
    this.domElement.appendChild(this.icons_holder);
    this.domElement.appendChild(this.down_icon);
  }
  render() {
    this.iconDOMs.map((ele) => {
      ele.render();
      this.icons_holder.appendChild(ele.domElement);
    });

    this.down_icon.addEventListener("click", () => {
      this.icons_holder.scrollBy({ top: 150, left: 0, behavior: "smooth" });
    });
    this.up_icon.addEventListener("click", () => {
      this.icons_holder.scrollBy({ top: -150, left: 0, behavior: "smooth" });
    });
  }
}

class InfoPanel {
  constructor() {
    this.graphActiveIndex = 0;

    this.blockIconClick = false;

    this.domElement = document.createElement("div");
    this.domElement.className = "fleet-info";
    let main_state = document.createElement("div");
    main_state.id = "main-state";

    let drone_name = document.createElement("h1");
    this.domDroneName = drone_name;
    main_state.appendChild(drone_name);

    let p = document.createElement("p");
    p.id = "body";
    main_state.appendChild(p);
    this.domPreviewText = p;

    let btn = document.createElement("div");
    btn.id = "view-more-btn";
    btn.innerText = "View More Details";
    main_state.appendChild(btn);

    this.domBtn = btn;

    let stats = document.createElement("table");
    stats.id = "mini-stats";
    this.miniStats = [];
    for (let i = 0; i < 3; i++) {
      let temp = [];
      let tr = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        let stat = document.createElement("td");
        tr.appendChild(stat);
        if (j != 1) temp.push(stat);
        else {
          stat.innerText = ":";
        }
      }
      // adding to class
      this.miniStats.push(temp);
      stats.appendChild(tr);
    }

    main_state.appendChild(stats);

    let expanded_state = document.createElement("div");
    expanded_state.id = "expanded-state";
    expanded_state.className = "plane";

    let close = document.createElement("i");
    close.className = "material-icons";
    close.id = "remove-expanded";
    close.innerText = "highlight_off";

    this.domClose = close;

    expanded_state.appendChild(close);

    let text_details = document.createElement("div");
    text_details.id = "text-details";

    let text_expanded = document.createElement("h1");
    text_expanded.innerText = "Project Details";

    text_details.appendChild(text_expanded);

    let p_expanded = document.createElement("p");
    p_expanded.id = "body";
    text_details.appendChild(p_expanded);
    this.domCompleteText = p_expanded;

    expanded_state.appendChild(text_details);

    let graph_details = document.createElement("div");
    graph_details.id = "graph-details";

    let heading_text = document.createElement("h1");
    heading_text.innerText = "Graphical Analysis";

    graph_details.appendChild(heading_text);

    let plot = document.createElement("canvas");
    plot.id = "plot-graph";
    // adding to DOM list for class
    this.plot = plot;
    graph_details.appendChild(plot);

    let control_panel = document.createElement("div");
    control_panel.id = "graph-toggle-control-panel";

    let prev_div = document.createElement("div");
    prev_div.id = "prev";

    this.domPrev = prev_div;

    let back = document.createElement("i");
    back.className = "material-icons";
    back.innerText = "arrow_back_ios";
    prev_div.appendChild(back);

    let forw_div = document.createElement("div");
    forw_div.id = "next";

    this.domNext = forw_div;
    let forw = document.createElement("i");
    forw.className = "material-icons";
    forw.innerText = "arrow_forward_ios";

    forw_div.appendChild(forw);

    let legend = document.createElement("div");
    legend.id = "graph-legend";

    this.domLegend = legend;

    control_panel.appendChild(prev_div);
    control_panel.appendChild(legend);
    control_panel.appendChild(forw_div);

    graph_details.appendChild(control_panel);

    expanded_state.appendChild(graph_details);

    this.domElement.appendChild(main_state);
    this.domElement.appendChild(expanded_state);


    this.domPrev.addEventListener("click", () => {
      if (this.graphActiveIndex > 0) {
        this.graphActiveIndex--;
        console.log(this.graphActiveIndex);
        this.domLegend.innerText = this.graph_stats[this.graphActiveIndex].key;
        this.graph.data.datasets[0].data = null;
        this.graph.data.datasets[0].data = graph_coordinates_generator(
          this.graph_stats[this.graphActiveIndex].x,
          this.graph_stats[this.graphActiveIndex].y
        );
        this.graph.update();
      }
    });
    this.domNext.addEventListener("click", () => {
      if (this.graphActiveIndex < this.graph_stats.length - 1) {
        this.graph.data.datasets[0].data = null;
        this.graphActiveIndex++;
        console.log(this.graphActiveIndex);
        this.domLegend.innerText = this.graph_stats[this.graphActiveIndex].key;
        this.graph.data.datasets[0].data = graph_coordinates_generator(
          this.graph_stats[this.graphActiveIndex].x,
          this.graph_stats[this.graphActiveIndex].y
        );
        this.graph.update();
      }
    });
  }

  render(name, shortDescription, miniStats, longDescription, graph_stats) {
    console.log(graph_stats);
    this.graph_stats = graph_stats;
    this.domDroneName.innerText = name;
    this.domPreviewText.innerText = shortDescription;
    this.graphActiveIndex = 0;

    for (let i = 0; i < 3; i++) {
      this.miniStats[i][0].innerText = miniStats[i][0];
      this.miniStats[i][1].innerText = miniStats[i][1];
    }
    this.domCompleteText.innerText = longDescription;

    this.graph = new Chart(this.plot, {
      type: "scatter",
      data: {
        datasets: [
          {
            pointBorderColor: "red",
            borderColor: "rgba(255, 0, 0, 0.5)",
            pointBackgroundColor: "red",
            fill: true,
            data: graph_coordinates_generator(
              graph_stats[this.graphActiveIndex].x,
              graph_stats[this.graphActiveIndex].y
            ),
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        elements: {
          line: {
            tension: 0.1,
          },
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: true,
                color: "#000021",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: true,
                color: "#000021",
              },
            },
          ],
        },
      },
    });
    this.domLegend.innerText = graph_stats[this.graphActiveIndex].key;
    
  }
}

export {IconFrame, InfoPanel};