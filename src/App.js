import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <div id="page-background">
			  <NavBar />
			  <div className="section-intro">
				<h1>Welcome to Kix Kitchen!</h1>
			  </div>
          </div>
          <div className="info-section">
          	<p> Lorem ipsum dolor sit amet. Et culpa possimus qui debitis accusantium qui temporibus rerum et illo dolore qui labore error et quas consequatur
          	 et quod aspernatur. Ex eligendi molestias rem repudiandae alias qui accusantium facere quo cumque quasi qui quisquam ipsa rem galisum quia!
          	 Et nostrum vero non minus velit hic suscipit eveniet ut quis quia?

             Ea delectus obcaecati nam maiores similique in iusto nulla cum consequuntur repellendus et repellendus porro non corporis eius.
             Vel quisquam distinctio et aliquid velit qui aliquid repudiandae. Ea illum animi est omnis iure ex nisi libero et galisum illum
             33 aperiam rerum sed omnis temporibus nam quia nobis.

             Eos commodi nemo a dolores vitae aut repellat numquam et obcaecati magnam id quis ullam ab nemo temporibus et eius obcaecati.
             Ad autem minima non alias distinctio et odit quod et sunt voluptatem ut ipsa placeat. Ad veritatis recusandae vel dolore excepturi sed nisi delectus sit optio earum
             sit enim fugit At deleniti dolor non ipsam itaque. In soluta ullam eum galisum reprehenderit 33 dicta voluptatum.
             </p>
          </div>
        </div>
     </BrowserRouter>
  );
}

export default App;
