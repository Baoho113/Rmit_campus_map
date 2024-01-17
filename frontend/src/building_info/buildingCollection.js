import building_1 from "./building1.js";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        ...building_1,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.694707, 10.729503],
            [106.694697, 10.729203],
            [106.694793, 10.729203],
            [106.694799, 10.729118],
            [106.695008, 10.729118],
            [106.695013, 10.729203],
            [106.69555, 10.729213],
            [106.695545, 10.729503],
            [106.694707, 10.729503],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "building 2",
        image: "./image/b2.jpg",
        description:
          "building 2 is an academic building, contains 5 floors with a special architecture. It has a big auditorium, self-study regions for students, showroom and others features to give students the best experience in learning ",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.695856, 10.729519],
            [106.695942, 10.729308],
            [106.695829, 10.729266],
            [106.695888, 10.729134],
            [106.696124, 10.729213],
            [106.69628, 10.729203],
            [106.696275, 10.729123],
            [106.696516, 10.729113],
            [106.696516, 10.729203],
            [106.696715, 10.729218],
            [106.696629, 10.729398],
            [106.696699, 10.729445],
            [106.696645, 10.729582],
            [106.696516, 10.729519],
            [106.695856, 10.729519],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "canteen",
        image: "./image/canteen.jpg",
        description:
          "This is a part of building 1, it serves foods and beverages from different culture in the world, also have a vast space to give student comfort and enjoy the meals",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.69453, 10.729835],
            [106.69453, 10.729645],
            [106.69489, 10.729651],
            [106.69489, 10.729835],
            [106.69453, 10.729835],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "building 9",
        image: "./image/b9.jpg",
        description:
          "This is the dormitory only for RMIT students. Besides modern facilities, it contains good security and the best location to reach every places in school",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.693317, 10.72984],
            [106.693312, 10.729524],
            [106.693511, 10.729529],
            [106.693516, 10.729661],
            [106.693629, 10.729661],
            [106.693629, 10.72983],
            [106.693317, 10.72984],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "building 8",
        image: "./image/b8.jpg",
        description:
          "This is an academic and tutorial buildings for engineering student. Also students usually comes here for self-study, or to attend in differents groups and also there are 2 tops floors for staff only.",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.693312, 10.72945],
            [106.693317, 10.72915],
            [106.693634, 10.729155],
            [106.693623, 10.729324],
            [106.693516, 10.729313],
            [106.6935, 10.729456],
            [106.693312, 10.72945],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "building 10",
        image: "./image/b10.jpg",
        description:
          "Also called as Sport Hall. It contains different club office, and also a place for student to reduce stress and maintain the mental life, healthier and makes more friends in school",
      },
      geometry: {
        type: "Polygon",

        coordinates: [
          [
            [106.692346, 10.729882],
            [106.69248, 10.729877],
            [106.692485, 10.729751],
            [106.69255, 10.729719],
            [106.69255, 10.729798],
            [106.692931, 10.729793],
            [106.692942, 10.72973],
            [106.693087, 10.729724],
            [106.693081, 10.729271],
            [106.69292, 10.729287],
            [106.692926, 10.729203],
            [106.692545, 10.729203],
            [106.69255, 10.729282],
            [106.69241, 10.729287],
            [106.692416, 10.729529],
            [106.69233, 10.729519],
            [106.692346, 10.729882],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "parking 1",
        image: "./image/p1.jpg",
        description: "This is a parking place for motorbike",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.696365, 10.729967],
            [106.696123, 10.729956],
            [106.696075, 10.729935],
            [106.696074, 10.729777],
            [106.696846, 10.729751],
            [106.696841, 10.729935],
            [106.696676, 10.729925],
            [106.696665, 10.729972],
            [106.696365, 10.729967],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Parking 2",
        image: "./image/p2.jpg",
        description: "This is a parking place for motorbike",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.694918, 10.729803],
            [106.694918, 10.729656],
            [106.695675, 10.729672],
            [106.695669, 10.729814],
            [106.694918, 10.729803],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "basketball field",
        image: "./image/basketball.jpg",
        description:
          "This is basketball field, where student can play basketball, cheerleading or other sports usually being play here",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.694204, 10.729571],
            [106.694204, 10.72984],
            [106.694403, 10.72984],
            [106.694403, 10.729571],
            [106.694204, 10.729571],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Parking 3",
        image: "./image/p2.jpg",
        description:
          "This is where the school bus located, usually deliver student from different districts in Saigon to school and back home ",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.694226, 10.729123],
            [106.694226, 10.72926],
            [106.694457, 10.72926],
            [106.694457, 10.729123],
            [106.694226, 10.729123],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "football field",
        image: "./image/football.jpg",
        description:
          "This is football field, where student can play football or sometime other sport can be play here",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.691301, 10.73051],
            [106.691209, 10.730436],
            [106.691145, 10.730352],
            [106.691102, 10.730272],
            [106.691054, 10.730178],
            [106.691027, 10.730114],
            [106.690963, 10.729197],
            [106.691059, 10.729181],
            [106.691242, 10.729213],
            [106.691311, 10.729245],
            [106.692058, 10.729218],
            [106.692127, 10.729197],
            [106.692197, 10.729145],
            [106.692288, 10.729123],
            [106.692358, 10.729113],
            [106.692347, 10.729218],
            [106.692412, 10.729234],
            [106.692401, 10.729434],
            [106.692326, 10.729424],
            [106.692326, 10.729893],
            [106.692492, 10.729888],
            [106.692487, 10.729772],
            [106.692535, 10.729772],
            [106.692545, 10.729809],
            [106.692653, 10.729809],
            [106.692664, 10.729882],
            [106.692707, 10.729951],
            [106.692766, 10.730373],
            [106.692127, 10.730373],
            [106.692122, 10.730457],
            [106.692063, 10.730446],
            [106.692084, 10.73052],
            [106.691301, 10.73051],
          ],
        ],
      },
    },
  ],
};
export default geojson;