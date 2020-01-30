import React from 'react';

const Intro = () => (
  <section className="hero is-fullheight">

    <div className="columns is-centered is-middle has-text-centered">
      <div className="column is-2">
        <h1 className="title">
          Legal text title
        </h1>
        <h2 className="subtitle">
        Legal text
        </h2>
      </div>
      <div className="column is-5">
        <h1 className="title is-1">Vector</h1>
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

    {/* <h1 className="title is-1">hello</h1>
    <h2 className="subtitle is-5">Lorem, ipsum.</h2>
    <a href="#" className="button is-primary">Link</a> */}
  </section>
);

export default Intro;
