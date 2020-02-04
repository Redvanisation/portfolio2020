import React from 'react';

const Intro = () => (
  <section className="hero is-fullheight">
    <div className="columns is-centered is-middle has-text-centered is-vcentered">
      <div className="column is-2">
        <h2 className="title">
          Legal text title
        </h2>
        <h2 className="subtitle">
        Legal text
        </h2>
      </div>
      <div className="column is-5 middle-div">
        <div><img className="brain image" alt="" /></div>
        
        <a href="#" className="button is-full">Download Resume</a>
      </div>
      <div className="column is-2">
        <h1 className="title">
          Webdev text title
        </h1>
        <h2 className="subtitle">
          Web dev text
        </h2>
      </div>
    </div>

  </section>
);

export default Intro;
