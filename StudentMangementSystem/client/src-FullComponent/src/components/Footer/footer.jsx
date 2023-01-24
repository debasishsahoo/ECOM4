import React from "react";
import Fickerimage from "./fickerimage";
import Flickermenu from "./flickermenu";
import Footerrow from "./footerrow";
const footer = () => {
  return (
    <footer>
      <div className="row expanded callout secondary">
        <Fickerimage />

        <Flickermenu />
        <div className="large-4 columns">
          <h5>RANDOM MAG</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            quam voluptatum vel repellat ab similique molestias molestiae ea
            omnis eos, id asperiores est praesentium, voluptate officia nulla
            aspernatur sequi aliquam.
          </p>
        </div>
      </div>
      <Footerrow/>
    </footer>
  );
};

export default footer;
