import React from 'react'
import Navbar from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { SmallCarts } from '../components/SmallCarts'
import { FilterItems } from '../components/FilterItems'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SmallCarts/>
      <FilterItems heading="Trending Products" Category ="smartphones"/>
      <FilterItems heading="New Arrival" Category ="fragrances"/>

    </div>
  )
}
