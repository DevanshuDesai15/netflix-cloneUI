import React from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import requests from '../Request'
import Row from '../Row'

function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav/>
        <Banner/>
        <Row title='NETFLIX ORIGINAL' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
        <Row title='TRENDING NOW' fetchUrl = {requests.fetchTrending} />
        <Row title='ROMANTIC MOVIES' fetchUrl = {requests.fetchRomanceMovies} />
        <Row title='ANIMATION MOVIES' fetchUrl={requests.fetchAnimationMovies} />
        <Row title='ACTION MOVIES' fetchUrl = {requests.fetchActionMovies} />
        <Row title='COMEDY MOVIES' fetchUrl = {requests.fetchComedyMovies} />
        <Row title='NEW DOCUMENTARIES' fetchUrl = {requests.fetchDocumentaries} />
        <Row title='HORROR MOVIES' fetchUrl = {requests.fetchHorrorMovies} />

    </div>
  )
}

export default HomeScreen