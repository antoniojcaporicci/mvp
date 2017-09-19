import ArticleList from './ArticleList.jsx'
import Article from './Article.jsx'
import request from 'request'
import articles from './beginningArticleData.js'
import {searchArticles} from '../util.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    }
  }

  clickHandler() {
    var value = $('.form-control').val();
    console.log('click handler: ', this)
    searchArticles.call(this, value);
  };

  render() {
    return (
      <div>
        <h1 className="search-bar"> Olden Times Search</h1>
        <div className="form-inline search-div">
          <input className="search-form form-control" type="text" />
          <button onClick={this.clickHandler.bind(this)}>Find Old News</button>
        </div>
       <div>
         <ArticleList articles={this.state.articles}/>
       </div>
      </div>
    );
  }
}

export default App
