import React from "react";

import "./body.css";

export default () => (
  <div>
    <section id="wrapper" class="skewed">
      <div class="layer top">
        <div class="content-wrap">
          <div class="content-body">
            <h1>Animation</h1>
          </div>
          <img
            src="http://www.traversymedia.com/downloads/assets/image2.png"
            alt=""
          />
        </div>
      </div>
      <div class="layer bottom">
        <div class="content-wrap">
          <div class="content-body">
            <h1>TouchMyLike</h1>
            <p>อธิบาย</p>
          </div>
          <img
            src="http://www.traversymedia.com/downloads/assets/image1.png"
            alt=""
          />
        </div>
      </div>
      <div class="handle" />
    </section>
    <div class="info">
      <div class="column">
        <img
          src="http://www.traversymedia.com/downloads/assets/image2.png"
          height="50%"
        />
        <p>Some text..</p>
      </div>
      <div class="column">
        <img
          src="http://www.traversymedia.com/downloads/assets/image2.png"
          height="50%"
        />
        <p>Some text..</p>
      </div>
      <div class="column">
        <img
          src="http://www.traversymedia.com/downloads/assets/image2.png"
          height="50%"
        />
        <p>Some text..</p>
      </div>
    </div>
    <div class="tapvdo top">
      <div class="content-body">
        <h1>Animation</h1>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RihSJHA_m68"
      />
    </div>
    <div class="test">
      <br />
    </div>
  </div>
);
