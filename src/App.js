import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1>Teacher to Techie</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
