import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';

function App() {
  return (
    <div className="App">
      <h1>Teacher to Techie</h1>
      <HomePage />
      <AboutPage />
      <ArticlesList />
      <ArticlePage />
    </div>
  );
}

export default App;
