import request from 'request'
import App from './components/App.jsx'

export const searchArticles = function(value) {
  console.log('searchArticles this: ', this)
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': "f89ca40338a445e683d61c000034cec5",
      'q': value,
      'sort': 'oldest',
      'page': 0
    },
  }, (err, response, body) => {
    body = JSON.parse(body);
    this.setState({articles: body.response.docs});
  });
}
