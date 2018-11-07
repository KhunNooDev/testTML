import React from "react";

import "./introduce.css";
import "./introduce2.css";
import "./introduce3.css";

export default () => (
  <div>
    <section id="wrapper" class="skewed">
      <div class="layer top">
        <div class="content-wrap">
          <div class="content-body">
            <h1>Animation</h1>
          </div>
          <img src="https://bit.ly/2DqFDIw" />
        </div>
      </div>
      <div class="layer bottom">
        <div class="content-body">
          <h1>TouchMyLike</h1>
          <p>อธิบาย</p>
        </div>
      </div>
    </section>
    <div class="info">
      <div class="column">
        <img src="https://bit.ly/2DqFDIw" />
        <p>Some text..</p>
      </div>
      <div class="column">
        <img src="https://bit.ly/2DqFDIw" />
        <p>Some text..</p>
      </div>
      <div class="column">
        <img src="https://bit.ly/2DqFDIw" />
        <p>Some text..</p>
      </div>
    </div>
    <div class="tapvdo top">
      <div class="content-body">
        <h1>อธิบาย</h1>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RihSJHA_m68"
      />
    </div>
  </div>
);
