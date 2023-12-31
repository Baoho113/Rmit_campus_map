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
        description: "This is Building 2",
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
        name: "building 3",
        description: "This is Building 3",
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
        name: "building 4",
        description: "This is Building 4",
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
        name: "building 5",
        description: "This is Building 5",
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
        name: "building 6",
        description: "This is Building 6",
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
  ],
};
export default geojson;