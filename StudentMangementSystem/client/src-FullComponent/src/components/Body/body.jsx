import React from "react";
import Promoted from "./promoted";
import Heading from "./heading";
import Breakingnews from "./breakingnews";
import LatestNews from "./latestNews";
const body = () => {
  return (
    <>
      <br></br>

      <Promoted />

      <hr></hr>
      <Heading text="BREAKING NEWS" />

      <hr></hr>

      <Breakingnews />

      <hr></hr>
      <Heading text="LATEST STORIES" />

      <hr></hr>

      <LatestNews />
    </>
  );
};

export default body;
