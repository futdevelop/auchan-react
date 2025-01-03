import React, { useState } from 'react'
import Sidebar from '../../components/SideBar'

const SideBarContainer = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return <Sidebar open={open} handleClick={handleClick} />
}

export default SideBarContainer;