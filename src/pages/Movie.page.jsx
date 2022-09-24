import React, { useContext ,useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'
import { MovieContext } from '../Context/Movie.context';
import axios from 'axios';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/posterSlider/poster.slider.component';
import MovieHero from '../components/MovieHero/MovieHero.component';
import Loading from '../components/Loading/Loading.component';
import {LoadingContext} from '../Context/Loading.context';
import MainLayoutHoc from '../layouts/Main.layout';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
function MoviePage() {
    const {id} = useParams();
    const {movie,setMovie} = useContext(MovieContext);
    const [cast,setCast] = useState([]);
    const [crew,setCrew] = useState([]);
    const [similar,setSimilar] = useState([]);
    const [Recomended,setRecomended] = useState([]);
    const {load,setLoad,setProgress,progress} = useContext(LoadingContext)

    useEffect(() => {
        setLoad(false);
        setProgress(10);
        const getMovie = async () =>{
            const movie = await axios.get(`/movie/${id}`);
            setProgress(50)
            setMovie(movie.data);
            setProgress(70)
            setLoad(true);
            setProgress(100)
        }
        getMovie();
        
    }, [id])
    useEffect(() => {
        setLoad(false);
        const getCredits = async () =>{
            const movie = await axios.get(`/movie/${id}/credits`);
            setCast(movie.data.cast);
            setCrew(movie.data.crew);
            setLoad(true);
        }
        getCredits();
        
    }, [id])
    useEffect(() => {
        setLoad(false);
        const getSimilar = async () =>{
            const movie = await axios.get(`/movie/${id}/similar`);
            setSimilar(movie.data.results);
            setLoad(true);
        }
        getSimilar();
        
    }, [id])
    useEffect(() => {
        setLoad(false);
        const getRecomended = async () =>{
            const movie = await axios.get(`/movie/${id}/recommendations`);
            setRecomended(movie.data.results);
            setLoad(true);
        }
        getRecomended();
        
    }, [id])

    console.log(progress)
    const castSettings = {
        arrows: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 5,
        infinite:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    arrows:false
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows:false,
                },
            },
        ],
    }
    const movieSettings = {
        arrows: true,
        slidesToShow: 4,
        speed: 500,
        slidesToScroll: 4,
        infinite:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows:false
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows:false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
        ],
    }
  return (
    <>
    {!load && <Loading></Loading>}
    {load && <div>
        <MovieHero></MovieHero>
    <div className='contianer w-full lg:w-2/3 lg:ml-10 px-3'>
        <div className='my-8'>
            <h2 className='font-bold text-2xl mb-3'>About the Movie</h2>
            <p className='text-justify '>{movie.overview}</p>
        </div>

        <hr />
        
        <div className='my-8'>
            <h1 className='font-bold text-2xl my-4'>Applicable offfers</h1>

            <div className='flex gap-3 flex-col lg:flex-row '>
                <div className='h-30 lg:w-1/2 flex gap-4 items-center border-2 border-dashed my-4 rounded bg-yellow-200 px-5 py-4 border-yellow-500'>
                    <div className='h-8'>
                        <img src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202" className='h-full w-full' alt="" />
                    </div>
                    <div>
                        <h4 className='font-bold'>PVR Privilege Points</h4>
                        <p className='text-sm'>Now earn and burn PVR privilege points on BookMyShow.</p>
                    </div>
                </div>
                <div className='h-30 lg:w-1/2 flex items-center gap-4 border-2 border-dashed my-4 rounded bg-yellow-200 px-5 py-4 border-yellow-500'>
                    <div className='h-8'>
                        <img src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202" className='h-full w-full' alt="" />
                    </div>
                    <div>
                        <h4 className='font-bold'>Secure your cards, before it’s too late!</h4>
                        <p className='text-sm'>Limited Period Offer</p>
                    </div>
                </div>
            </div>
        </div>

        <hr />

        {cast.length!==0 && <div className='my-10 '>
            <h1 className='my-5 text-2xl font-bold'>Cast</h1>
            {/* <div className='flex gap-4'> */}
            <Swiper 
                slidesPerView={2}
                spaceBetween={20}  
                modules={[Navigation]}
                navigation={true}
                slidesPerGroup={2}
                breakpoints={{
                 
                 668: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                   slidesPerGroup:3,
                 },
                 1024: {
                   slidesPerView: 4,
                   spaceBetween: 20,
                   slidesPerGroup:4,
                 },
               }}
            >
                {cast.map((each) =>(
                    each.profile_path &&(<SwiperSlide> <Cast img={each.profile_path} name={each.name} profile={each.character} / > </SwiperSlide>)
                ))}
            </Swiper>
        </div>}
           { crew.length!==0 && <div className='my-10   '>
            <h1 className='my-5 text-2xl font-bold'>Crews</h1>
            {/* <div className='flex gap-4'> */}
            <Swiper 
                slidesPerView={2}
                spaceBetween={20}  
                modules={[Navigation]}
                navigation={true}
                slidesPerGroup={2}
                breakpoints={{
                 
                 668: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                   slidesPerGroup:3,
                 },
                 1024: {
                   slidesPerView: 4,
                   spaceBetween: 20,
                   slidesPerGroup:4,
                 },
               }}
            >
                {crew.map((each) =>(
                    each.profile_path &&(<SwiperSlide> <Cast img={each.profile_path} name={each.name} profile={each.character} / > </SwiperSlide>)
                ))}
            </Swiper>
        </div>}
        {similar.length!==0 && <div className='my-6 '>
            <PosterSlider posters = {similar} title = "You might also Like" subtitle = "" isDark = {false} moviePage={true}></PosterSlider>
        </div>}

        {Recomended.length !==0 && <div className='my-6 '>
            <PosterSlider posters = {Recomended} title = "Recomended Movies" subtitle = "" isDark = {false} moviePage={true}></PosterSlider>
        </div>}
    </div> 
    </div>}
    </>
  )
}

export default MainLayoutHoc(MoviePage);
