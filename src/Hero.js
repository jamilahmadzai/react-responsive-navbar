import React from "react";

import { useGlobalContext } from "./context";

const Background = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Change the size of screen to see sidebar</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            possimus quibusdam similique unde architecto fugiat cumque sint
            nemo, ea aliquid esse. Quod, sequi numquam eveniet minus iusto
            adipisci cum harum!
          </p>
          <button className="btn signup-btn">Sign up</button>
        </article>
      </div>
    </section>
  );
};

export default Background;
