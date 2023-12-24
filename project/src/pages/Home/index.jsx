import React from 'react'
import Products from '../../components/Products'
import Header from '../../layouts/Header'
import BrowseByCategory from '../../components/BrowseByCategory'
import EnhanceYourMusicExperience from '../../components/EnhanceYourMusicExperience'
import NewArrival from '../../components/NewArrival'
import OurService from '../../components/OurService'


const Home = () => {
  return (
    <div className='max-w-[80%] mx-auto'>
      <Header />
      <BrowseByCategory />
      <Products />
      <EnhanceYourMusicExperience />
      <NewArrival />
      <OurService />
    </div>
  )
}

export default Home