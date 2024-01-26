import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
			<Routes>
			  <Route path="/" element={<HomePage />} />
			  <Route path="/about" element={<AboutPage />} />
			  <Route path="/menu" element={<MenuPage />} />
			  {/*<Route path="/contact-us" element={<CreateAccountPage />} />*/}
			  <Route path="*" element={<NotFoundPage />} />
			</Routes>
        </div>
     </BrowserRouter>
  );
}

export default App;
