import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home.page';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import MoviePage from './pages/Movie.page';

function App() {
  axios.defaults.baseURL = "https://api.themoviedb.org/3"
  axios.defaults.params = {}
  axios.defaults.params["api_key"] = "90f2a43e101ecd183bc3a356249e44ad"
  // const {id} = useParams();
  // console.log(id);
  return (

    <Routes>
      <Route  path='/' element={<HomePage / >}></Route>
      <Route path = '/movie/:id' element={<MoviePage />}></Route>
    </Routes>
    
  );
}

export default App;