import Article from './Article.jsx'

var ArticleList = (props) => (

    <div className="article-list">
    {props.articles.map((item, key) =>
      <Article key={key} article={item} />
    )}
    </div>
);

export default ArticleList
