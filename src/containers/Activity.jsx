import React from 'react';
import articles from '../helpers/articles.json';
import { GoLinkExternal } from 'react-icons/go';


const Activity = () => (
  <section className="activity has-text-centered">
    <h2 className="section-title title is-2" id="activity">Activity</h2>
    <div className="activity__articles-div">
      <h3 className="title is-5 activity__title">I write tech articles:</h3>
      <p className="activity__article"><a href={articles[0].url} className="activity__article--link" target="_blank" rel="noopener noreferrer">{articles[0].title} <GoLinkExternal className="activity__article--icon"/></a></p>
      <p className="activity__article"><a href={articles[1].url} className="activity__article--link" target="_blank" rel="noopener noreferrer">{articles[1].title} <GoLinkExternal className="activity__article--icon"/></a></p>
    </div>

    <div className="btn-div activity__btn-div">
      <h3 className="title is-5 activity__title">And I also have a blog:</h3>
      <a href="https://hashnode.com/@redvanisation" className="button button__red is-full" target="_blank" rel="noopener noreferrer">Visit my blog</a>
    </div>

  </section>
);

export default Activity;
