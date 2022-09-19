import axios from 'axios';
import React, {useEffect} from 'react'
import { useState } from 'react';
import MainLayoutHoc from '../layouts/Main.layout';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../components/Loading/Loading.component';
import Poster from '../components/posters/poster.component';
import { useContext } from 'react';
import { LoadingContext } from '../Context/Loading.context';
import PlayFilter from '../components/Filters/PlayFilter';
import HeroSliderComponent from '../components/HeroSlider/HeroSlider.component';
function StreamPage() {
    const [pageNo,setPage] = useState(5);
    // const [loading,setLoading] = (false);
    const [movie , setMovie] = useState([]);
    const [totalResults, setTotolResults]  = useState(0);
    const{setProgress} = useContext(LoadingContext)
    useEffect(() => {
        // setLoading(true);
        const FindMovies = async() =>{
            setProgress(10);
            let url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=${pageNo}`
            let data = await fetch(url);
            setProgress(50);
            let parsedData = await data.json();
            setProgress(70)
            setTotolResults(parsedData.totalResults);
            setMovie(parsedData.results);
            setProgress(90)
            // setLoading(false);
            console.log(parsedData);
            setProgress(100)
        }
       FindMovies();
    }, [])
    const fetchMoreData = async () =>{
        setPage(pageNo+1);
        let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=${pageNo}`
            let data = await fetch(url);
            let parsedData = await data.json();
            setMovie(movie.concat(parsedData.results))
            console.log(parsedData);
            setTotolResults(parsedData.totalResults);
    }
  return(
    <div className='bg-slate-100 '>
        <HeroSliderComponent></HeroSliderComponent>
        <InfiniteScroll
            dataLength={movie.length}
            next={fetchMoreData}
            hasMore={movie.length !==totalResults}
            loader={<Loading />}
        >
        <div className='lg:flex px-3  gap-3  md:px-10 lg:px-10 mt-5'>
            <div className=' w-full lg:w-1/5 mb-4 h-full'>
                <h1 className='font-bold text-xl py-3'>Filters</h1>
                <PlayFilter></PlayFilter>
            </div>
            <div className='grid bg-white rounded  grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-3 px-2 lg:px-5  md:px-5 w-full  lg:w-4/5  '>
            <h1 className='font-bold text-2xl my-4 col-span-2 lg:col-span-4 md:col-span-3 sm:col-span-3'>Streams</h1>
                {/* {loading && <Loading></Loading>} */}
                {movie.map((each,index) =>(
                    // <div>
                     <Poster isDark={false} title={each.title} key={index} poster_path= {each.poster_path} id={each.id}></Poster>
                    //  </div>
                ))}
            </div>
        </div>
        </InfiniteScroll>
    </div>
  )
}

export default MainLayoutHoc(StreamPage);