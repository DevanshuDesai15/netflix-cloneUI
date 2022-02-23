import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './Request'
import styled from 'styled-components';


const BannerHeader = styled.div`
  position: relative;
  height: 448px;
  color: white;
  object-fit: contain;
`;
const BannerContents = styled.div`
margin-left: 30px;
    padding-top: 140px;
    height: 190px;
`;
const BannerTitle = styled.h1`
font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`;
const BannerButtons = styled.div`
`;
const BannerButton = styled.button`
cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    margin-right: 1rem;

    &:hover{
        color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
    }
`;
const BannerDescription = styled.h1`
width: 45rem;
    line-height: 1.3;
    font-size: 1rem;
    max-width: 360px;
    height: 80px;
`;
const BannerFadeBottom = styled.div`
height: 7.5rem;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37,37,37,0.61),
        #111
    );
`;

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * (request.data.results.length - 1))
                ]
            );
            return request;
        }

        fetchData();
    },[])
    console.log(movie);

    function truncate(string, n){
        return string?.length>n ? string.substr(0,n-1) + '...' : string;
    }

  return (
    <BannerHeader style={{
        backgroundSize:'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center'
    }}>
        <BannerContents>
            <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
            <BannerButtons>
                <BannerButton>Play</BannerButton>
                <BannerButton>My List</BannerButton>
            </BannerButtons>
            <BannerDescription>{truncate(`${movie?.overview}`, 150)}</BannerDescription>
        </BannerContents>
        <BannerFadeBottom/>
    </BannerHeader>
  )
}

export default Banner