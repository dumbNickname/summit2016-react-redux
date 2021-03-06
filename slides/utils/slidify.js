import React from "react";
import { Slide } from "../../src";

export default (metaSlide) => {
  const { slideContent, ...other } = metaSlide;
  const props = Object.assign({
    align: "center center",
    transition: ["slide"]
  }, other);

  return (
    <Slide { ... props }>
      {metaSlide.slideContent()}
    </Slide>
  );
};
