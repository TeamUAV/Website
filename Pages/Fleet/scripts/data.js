let fleet_data = [
  {
    name: "Vaayu",
    active_icon_url: "Pages/Fleet/icons/icon-1-active.svg",
    inactive_icon_url: "Pages/Fleet/icons/icon-1.svg",
    model_url: "Pages/Fleet/models/vaayu/vaayu.gltf",
    model_coordinates: {
      x: 0,
      y: 150,
      z: 300,
      height: -30
    },
    short_description:
      "Vaayu is used as an emergency response system, the sole purpose of making this aircraft is to provide an emergency evacuation warning to people just before floods. Also, it can be used to guide people to the exact location of resources like food, clothing and shelter after floods and can be used to check upon poaching, forest fires and landslides.",
    long_description:
      "The aircraft is a 700mm wing span micro-class RC aircraft equipped with 10W full-bodied stereo realised through dual high-performance drivers to produce enhanced bass, soft, clearand dynamic sound, it also consists an FPV camera for 1080P HD surveillance. Vaayu is used as an emergency response system, the sole purpose of making this aircraft is to provide an emergency evacuation warning to people just before floods. Also, the same system can be used to guide people to the exact location of resources like food, clothing and shelter after floods, it can be used to check upon poaching, forest fires and landslides. By taking real-life situation of floods in Kerala we have taken stimulations how our aircraft will work before and aftermath of floods in a remote village and also explained how our aircraft has the best possible design and technology.",
    miniStats: [
      ["Wingspan", "700mm"],
      ["Wingspan", "700mm"],
      ["Wingspan", "700mm"],
    ],
    graph_stats: [
      {
        key: "fz vs alpha",
        x: [
          -7.70484, -6.01778, -3.98286, -2.38276, -0.99137, 0.01739, 1.33922,
          2.40015, 3.6698, 4.60899, 5.7395, 7.20046, 9.91368, 11.96598, 13.9835,
        ],
        y: [
          4.49918, 5.6179, 7.00413, 8.07421, 8.99837, 9.03068, 10.5062,
          11.16284, 11.91676, 12.54907, 13.23003, 14.10555, 15.68634, 16.80506,
          17.89945,
        ],
      },
      {
        key: "cl/cd^3/2 vs alpha",
        x: [
          -7.72802, -6.52327, -6.08251, -5.08345, -3.79055, -2.46827, -1.17536,
          0.05877, 1.93935, 3.8787, 5.552421, 7.43418, 9.31477, 11.34227,
          13.89869,
        ],
        y: [
          14.83788, 15.10766, 15.10766, 15.04022, 14.77044, 14.39949, 13.99482,
          13.62387, 13.01687, 12.51103, 12.10636, 11.19586, 11.19586, 10.79119,
          10.3652,
        ],
      },
      {
        key: "cd vs alpha",
        x: [
          -7.195, -5.04584, -3.42619, -2.08686, -0.49835, 2.21145, 3.42619,
          4.57836, 5.79337, 6.97697, 8.72121, 10.12283, 11.27527, 12.86378,
          14.7361,
        ],
        y: [
          0.02588, 0.03775, 0.04816, 0.05922, 0.07354, 0.10022, 0.11389,
          0.12755, 0.14252, 0.15814, 0.18222, 0.20174, 0.21931, 0.24209,
          0.27073,
        ],
      },
      {
        key: "cm vs alpha",
        x: [
          -3095022, -3.2573, -2.57528, -2.00239, -1.51134, -0.91117, 0, 0.56198,
          1.36403, 1.98602, 2.84263, 3.43189, 4.2394, 5.15057, 6.26907,
        ],
        y: [
          -0.08756, -0.08842, -0.08928, -0.09014, -0.091, -0.09186, -0.09271,
          -0.09357, -0.09443, -0.09529, -0.09701, -0.09786, -0.09872, -0.1004,
          -0.1013,
        ],
      },
    ],
  },
  {
    name: "Forest Ranger",
    active_icon_url: "Pages/Fleet/icons/icon-4-active.svg",
    inactive_icon_url: "Pages/Fleet/icons/icon-4.svg",
    model_url: "Pages/Fleet/models/Forest_Ranger/Forest_Ranger.gltf",
    model_coordinates: {
      x: 0,
      y: 200,
      z: 550,
      height: 20
    },
    short_description:
      "The forest ranger is a fixed-wing UAV designed to patrol National Parks and Wildlife sanctuaries and to be inaudible and indistinguishable by anyone on the ground as surveillance equipment.",
    long_description:
      "Ever since the lockdown was initiated, there was a surge in incidents related to poaching and illegal trading of endangered species. With over 1 lakh 65 thousand square kilometers of reserved or protected area, India is one of the most biodiverse nations in the whole world. The forest ranger is a fixed-wing UAV designed to patrol National Parks and Wildlife sanctuaries and to be inaudible and indistinguishable by anyone on the ground as surveillance equipment. It comes with easily interchangeable internals, stable flight characteristics, and can be customized for use in wildlife photography, bird watching, geographical surveys, etc.",
    miniStats: [
      ["Wingspan", "700mm"],
      ["Tail Height", "79mm"],
      ["Length", "697.3mm"],
    ],
    graph_stats: [
      {
        key: "alpha vs CDv, CD, CY",
        x: [
          -8.0, -7.5, -7.0, -6.5, -6.0, -5.5, -5.0, -4.5, -4.0, -3.5, -3.0,
          -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5,
          4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0,
        ],
        y: [
          0.203672, 0.24642, 0.289155, 0.331871, 0.374557, 0.417206, 0.45981,
          0.502359, 0.544845, 0.587261, 0.629597, 0.671845, 0.713997, 0.756045,
          0.797981, 0.839795, 0.881481, 0.923029, 0.964433, 1.005683, 1.046773,
          1.087694, 1.128438, 1.168998, 1.209367, 1.249536, 1.289499, 1.329247,
          1.368775, 1.408073, 1.447137,
        ],
      },
      {
        key: "alpha vs Cl, Cm",
        x: [
          -8.0, -7.5, -7.0, -6.5, -6.0, -5.5, -5.0, -4.5, -4.0, -3.5, -3.0,
          -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5,
          4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0,
        ],
        y: [
          0.01017, 0.01087, 0.01177, 0.01287, 0.01417, 0.01566, 0.01736,
          0.01925, 0.02133, 0.02362, 0.02609, 0.02876, 0.03163, 0.03468,
          0.03792, 0.04135, 0.04496, 0.04876, 0.05274, 0.0569, 0.06123, 0.06574,
          0.07042, 0.07526, 0.08028, 0.08545, 0.09078, 0.09627, 0.10191,
          0.10769, 0.11363,
        ],
      },
      {
        key: "alpha vs Cni, Qlnf",
        x: [
          -8.0, -7.5, -7.0, -6.5, -6.0, -5.5, -5.0, -4.5, -4.0, -3.5, -3.0,
          -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5,
          4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0,
        ],
        y: [
          0.032559, 0.031608, 0.030904, 0.030658, 0.030777, 0.031104, 0.03139,
          0.031623, 0.031791, 0.031856, 0.031829, 0.03174, 0.031657, 0.031638,
          0.031668, 0.03165, 0.031584, 0.031509, 0.031413, 0.031323, 0.031232,
          0.031135, 0.031036, 0.030932, 0.030888, 0.030865, 0.030879, 0.030982,
          0.032669, 0.033129, 0.035545,
        ],
      },
      {
        key: "alpha vs XCP",
        x: [
          -8.0, -7.5, -7.0, -6.5, -6.0, -5.5, -5.0, -4.5, -4.0, -3.5, -3.0,
          -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5,
          4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0,
        ],
        y: [
          0.042728, 0.042481, 0.042678, 0.043531, 0.044948, 0.046771, 0.048751,
          0.050874, 0.05313, 0.055477, 0.057928, 0.060509, 0.063288, 0.066322,
          0.069593, 0.073005, 0.076553, 0.080276, 0.084159, 0.088226, 0.092469,
          0.096879, 0.101458, 0.1062, 0.111168, 0.116318, 0.121664, 0.127254,
          0.134581, 0.140828, 0.149176,
        ],
      },
    ],
  },
  {
    name: "Stilt",
    model_url: "Pages/Fleet/models/stilt/stilt.gltf",
    model_coordinates: {
      x: 0,
      y: 300,
      z: 700,
      height: 0
    },
    active_icon_url: "Pages/Fleet/icons/icon-5-active.svg",
    inactive_icon_url: "Pages/Fleet/icons/icon-5.svg",
    short_description:
      "Stilt has been programmed to take-off and traverse to its location automatically and is already programmed autonomously deploy to the 2 boxes, carrying 200 vaccines at the destination entered by personnel. The A.I. technology has enabled us to tackle the problem of collision of aircraft with birds. The aircraft control software is a user friendly android application bringing the control of the aircraft to our fingertips providing easy accessibility to the ground personnel.",
    long_description:
      "After discovery of vaccine for COVID-19 people found difficulty in distributing it because of climatic changes of our country. Team UAV has designed a durable yet fast, a 2.8 m wingspan Vertical take-off and Landing aircraft (VTOL) , able to travel vast distances and thereby decreasing the human contact also it increases our flight time about an average of 3 times to an average drone and enables to carry a maximum weight of 40kgs. The aircraft is fully carbon fibre reinforced providing an aerodynamic perfection and ability to handle the harsh weather conditions ,it also providing full protection to the inflight avionics . The UAV consists 2 types of payload systems with high performing motors attached to super 55 cc two stroke gasoline engine. The UAV has been programmed to take-off and traverse to its location automatically and is already programmed autonomously deploy to the 2 boxes, carrying 200 vaccines at the destination entered by personnel. The A.I. technology has enabled us to tackle the problem of collision of aircraft with birds. The aircraft control software is a user friendly android application bringing the control of the aircraft to our fingertips providing easy accessibility to the ground personnel .",
    miniStats: [
      ["Wingspan", "2.8m"],
      ["Tail Height", "79mm"],
      ["FreeStream Speed", "26m/s"],
    ],
    graph_stats: [
      {
        key: "alpha vs CL",
        x: [
          -8, -7.75, -7.5, -7.25, -7, -6.75, -6.5, -6.25, -6, -5.75, -5.5,
          -5.25, -5, -4.75, -4.5, -4.25, -4, -3.75, -3.5,
        ],
        y: [
          -0.06006, -0.03698, -0.01389, 0.009213, 0.032318, 0.055428, 0.078543,
          0.10166, 0.124779, 0.1479, 0.17102, 0.194139, 0.217257, 0.240371,
          0.263481, 0.286586, 0.309685, 0.332777, 0.355861,
        ],
      },
      {
        key: "alpha vs QInf",
        x: [
          -8, -7.75, -7.5, -7.25, -7, -6.75, -6.5, -6.25, -6, -5.75, -5.5,
          -5.25, -5, -4.75, -4.5, -4.25, -4, -3.75, -3.5,
        ],
        y: [
          26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
          26, 26,
        ],
      },
      {
        key: "alpha vs CD",
        x: [
          -8, -7.75, -7.5, -7.25, -7, -6.75, -6.5, -6.25, -6, -5.75, -5.5,
          -5.25, -5, -4.75, -4.5, -4.25, -4, -3.75, -3.5,
        ],
        y: [
          0.002962, 0.002775, 0.002631, 0.00253, 0.002472, 0.002457, 0.002486,
          0.002558, 0.002673, 0.002831, 0.003033, 0.003278, 0.003567, 0.0039,
          0.004275, 0.004695, 0.005158, 0.005664, 0.006214,
        ],
      },
      {
        key: "alpha vs Cm",
        x: [
          -8, -7.75, -7.5, -7.25, -7, -6.75, -6.5, -6.25, -6, -5.75, -5.5,
          -5.25, -5, -4.75, -4.5, -4.25, -4, -3.75, -3.5,
        ],
        y: [
          0.29348, 0.281018, 0.268525, 0.256003, 0.243453, 0.230876, 0.218272,
          0.205644, 0.192991, 0.180315, 0.167616, 0.154896, 0.142156, 0.129396,
          0.116618, 0.103823, 0.091011, 0.078183, 0.065341,
        ],
      },
    ],
  },
];
