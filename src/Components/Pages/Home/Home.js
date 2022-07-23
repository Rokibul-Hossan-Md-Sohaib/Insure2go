import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Navs from '../Navs/Navs'
import Services from '../Services/Services'
import Topbar from '../Topbar/Topbar'
import WorkIdenttiy from '../WorkIdentity/WorkIdentity'

const Home = () => {
  return (
    <div>
<Topbar/>
<Navs></Navs>
<About/>
<Services/>
<WorkIdenttiy/>
<Footer/>

    </div>
  )
}

export default Home