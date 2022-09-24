import React,{useEffect, useState} from 'react'
import axios from 'axios';

import HeroSliderComponent from '../components/HeroSlider/HeroSlider.component';
import MainLayoutHoc from '../layouts/Main.layout';
import PosterSlider from '../components/posterSlider/poster.slider.component';
import EntertainmentSlider from '../components/Entertainment/Entertainment.component';
import Loading from '../components/Loading/Loading.component';
import { useContext } from 'react';
import { LoadingContext } from '../Context/Loading.context';


 function HomePage() {
  const [recomendedMovies,setRecomendedMovies] = useState([]);
  const [topRated,setTopRatedMovies] = useState([]);
  const [popular,setPopularMovies] = useState([]);
  const [nowPlaying,setNowPlayingMovie] = useState([]);
  const [loading,setLoading] = useState(false);

  const {progress,setProgress} = useContext(LoadingContext);
  useEffect(()=>{
    setLoading(false);
    const recomendedMovie = async() =>{
      
          const movie = await axios.get('/movie/popular');
          setRecomendedMovies(movie.data.results);
          setLoading(true);
      }
      recomendedMovie();

  },[])
  useEffect(()=>{
    setLoading(false);
    const topRatedMovie = async() =>{
        const movie = await axios.get('/movie/top_rated');
        setTopRatedMovies(movie.data.results);
        setLoading(true);
    }
    topRatedMovie();

},[])
useEffect(()=>{
  setLoading(false);
  const popularMovie = async() =>{
      const movie = await axios.get('/movie/upcoming');
      setPopularMovies(movie.data.results);
      setLoading(true);
  }
  popularMovie();

},[])
useEffect(()=>{
  setLoading(false);
  setProgress(10)
  const nowPlayingMovie = async() =>{
      setProgress(20)
      const movie = await axios.get('/movie/now_playing');
      setProgress(50)
      setNowPlayingMovie(movie.data.results);
      setProgress(70)
      setLoading(true);
      setProgress(100);
      console.log(movie.data);
  }
  nowPlayingMovie();

},[])
  // console.log(recomendedMovies);
  return (
    <>
  
    {!loading && <Loading></Loading>}
    {loading && <div>
      <HeroSliderComponent />
      <div className='container mx-auto my-5 px-2 md:px-12 sm:px-10'>
        <PosterSlider moviePage={false} posters = {recomendedMovies} title = "Recomended Movies" subtitle = "Watch the Latest Reccomended movies" isDark = {false} />
      </div>

      <div className='container mx-auto  my-8 px-2 md:px-12 sm:px-10 '>
        <h1 className='font-bold lg:text-2xl text-lg mb-3 '>The Best of Entertainment Cards</h1>
          <EntertainmentSlider />
      </div>

      <div className='my-10 bg-premier-800'>
        <div className="container mx-auto">
            <div className="hidden lg:block img h-30 py-3">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" className='w-full h-full object-cover' alt=""/>
            </div>
        </div>
      

      <div className='container  py-8 lg:py-0 lg:pb-5 mx-auto my-5 px-2 md:px-12 sm:px-10 '>
        <PosterSlider moviePage={false} posters = {topRated} title = "Premieres" subtitle = "Brand New Releases Every Friday" isDark = {true} />
      </div>
      </div>
      <div className='container mx-auto my-5 px-2 md:px-12 sm:px-10'>
        <PosterSlider moviePage={false} posters = {popular} title = "Popular Movies" subtitle = "Watch the latest popular movies" isDark = {false} />
      </div>

      <div className='container mx-auto my-5 px-2 md:px-12 sm:px-10'>
        <PosterSlider moviePage={false} posters = {nowPlaying} title = "Now Playing Movies" subtitle = "Watch the latest playing movies" isDark = {false} />
      </div>
    </div>}
    </>
  )
}
export default MainLayoutHoc(HomePage);
