export type Images = {
    title: string;
    slug: {
      current: string;
    };
    content: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    }[];
  };
  