const currentLocation = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        description : "Your current location"
      },
      geometry: {
        type: "Point",
        coordinates: [106.696327, 10.729355],
      },
    },
  ],
};
export default currentLocation;

