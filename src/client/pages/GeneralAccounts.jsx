import React from 'react'
import HeaderContainer from '../containers/HeaderContainer';
import SidebarContainer from '../containers/SidebarContainer';
import EnhancedTableContainer from '../containers/EnhancedTableContainer';

const GeneralAccounts = () => {
  return (
    <div className='accounts-page'>
      <HeaderContainer />
      <div className='main-content'>
        <SidebarContainer />
        <EnhancedTableContainer />
      </div>
    </div>
  )
}

export default GeneralAccounts
