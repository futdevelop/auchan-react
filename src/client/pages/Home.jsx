import React from 'react'
import ContentContainer from '../containers/ContentContainer';
import HeaderContainer from '../containers/HeaderContainer';
import SideBarContainer from '../containers/SidebarContainer';

const Home = () => {
  return (
    <div className='home-page'>
      <HeaderContainer />
      <div className='main-content'>
        <SideBarContainer />
        <ContentContainer page='home-page' />
      </div>
    </div>
  )
}

export default Home;
