import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Card from './Card'
import data from './data'

export default function App() {
  const cards = data.map(items => {
    return (
      <Card 
        key = {items.id}
        //usin spead synax
        item = {items}

        /*
        img = {items.coverImg}
        rating = {items.stats.rating}
        reviewCount = {items.stats.reviewCount}
        location = {items.location}
        title = {items.title}
        price = {items.price}
        openSpots = {items.openSpots}
        */
      />
    )
  })
  
  return (
    <div className='container'>
      <NavBar />
      <Hero />
      {cards}
    </div>
  )
}


