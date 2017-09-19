import React from 'react'
import Icon from './Icon.jsx'

var Article = (props) => {

  var urlChanger = (url) => {
    return url.replace('gst/abstract.html', 'mem/archive-free/pdf').replace('https://', 'http://');
  }

  var url = urlChanger(props.article.web_url);

  return (
    <div className="article">
      <h2>{props.article.headline.main}</h2>
      <p>{props.article.snippet}</p>
      <a href={url}>{url}</a>
        <Icon />
    </div>
  );
};

export default Article
