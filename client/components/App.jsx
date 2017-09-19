import React from 'react'
import ArticleList from './ArticleList.jsx'
import Article from './Article.jsx'
import request from 'request'
import articles from './beginningArticleData.js'
import {searchArticles} from '../util.js'
import LogIn from './LogIn.jsx'
import Header from './Header.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    }
  }

  submitHandler() {
    var value = $('.form-control').val();
    searchArticles.call(this, value);
  };

  render() {
    return (
      <div>
        <div>
          <Header childVisible={this.state.childVisible}/>
        </div>
        <h1 className="search-bar"> Olden Times Search</h1>
        <div className="form-inline search-div">
          <input className="search-form form-control" type="text" />
          <button onClick={this.submitHandler.bind(this)}>Find Old News</button>
        </div>
        <div>
       <div>
         <ArticleList articles={this.state.articles}/>
       </div>
      </div>
      </div>
    );
  }
}

export default App
