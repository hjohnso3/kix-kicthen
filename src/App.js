import './App.css';
import { HashRouter , Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <HashRouter>
        <div className="App">
			<Routes>
			  <Route path="/" element={<HomePage />} />
			  <Route path="/about" element={<AboutPage />} />
			  <Route path="/menu" element={<MenuPage />} />
			  <Route path="*" element={<NotFoundPage />} />
			</Routes>
        </div>
     </HashRouter>
  );
}

export default App;
