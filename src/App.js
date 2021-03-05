import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=65a1a4d3d5f3486194cddbcf72195b41';
    fetch(url)
    .then(res => res.json())
    .then(data =>setArticles(data.articles))
  },  [])
  return (
    <div>
      <h2>Headlines {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
