const details = {
    name: "details",
    title: "details",
    type: "document",
    fields: [
      {
        name: "detailsField", 
        type: "object",
        fields: [
          {
            name: "selectedPackage",
            type: "string",
            options: {
              list: ["Basic", "Premium", "Luxury"]
            }
          },
          {
            name: "selectedCar",
            type: "string",
            options: {
              list: ["Small", "Medium", "Large"]
            }
          },
          {
            name: "price",
            type: "number"
          }
        ]
      }
    ]
  };
  
  export default details;
  