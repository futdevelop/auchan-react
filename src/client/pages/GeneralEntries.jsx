import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import TableContainer from '../containers/TableContainer'
import SideBarContainer from '../containers/SidebarContainer'

const GeneralEntries = () => {
  return (
    <div className='entries-page'>
      <HeaderContainer />
      <div className='main-content'>
        <SideBarContainer />
        <TableContainer />
      </div>
    </div>
  )
}

export default GeneralEntries;
