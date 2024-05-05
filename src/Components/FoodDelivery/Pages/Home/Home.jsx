import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'

export const Home = () => {
    const [category, setCetegory] = useState("All");

  return (
    <div className='home-container'>
        <Header></Header>
        <ExploreMenu category={category} setCategory={setCetegory}></ExploreMenu>
        <FoodDisplay category={category} ></FoodDisplay>
        <AppDownload></AppDownload>
    </div>
  )
}
