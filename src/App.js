import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home.page';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import MoviePage from './pages/Movie.page';
import LoadingBar from 'react-top-loading-bar'
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from 'react';
import { LoadingContext } from './Context/Loading.context';
import MoviesMainPage from './pages/Movies.main.page';
import PlaysPage from './pages/Plays.page';
import StreamPage from './pages/Stream.page';
import EventsPage from './pages/Events.page';
import SliderPage from './pages/SliderPage';
function App() {
  axios.defaults.baseURL = "https://api.themoviedb.org/3"
  axios.defaults.params = {}
  axios.defaults.params["api_key"] = process.env.REACT_APP_MOVIE_KEY;
  // const {id} = useParams();
  // console.log(id);
  const {progress} = useContext(LoadingContext);
  return (
    <>
    <LoadingBar
          color='#f11946'
          progress={progress}
        />    
    <Routes>
      <Route  path='/' element={<HomePage / >} ></Route>
      <Route path = '/movie/:id' element={<MoviePage />}></Route>
      <Route path = '/movies' element={<MoviesMainPage></MoviesMainPage>}></Route>
      <Route path = '/plays' element={<PlaysPage></PlaysPage>}></Route>
      <Route path = '/stream' element={<StreamPage></StreamPage>}></Route>
      <Route path = '/shows' element={<EventsPage></EventsPage>}></Route>
      <Route path = '/slide' element={<SliderPage></SliderPage>}></Route>
    </ Routes>
    </>
  );
}

export default App;