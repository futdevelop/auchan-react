import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { fetchData } from './store/dataSlice.js';
import { selectData, selectStore } from './store/selectors.js'
import GeneralAccounts from './pages/GeneralAccounts'
import GeneralEntries from './pages/GeneralEntries'
import Home from './pages/Home'

import './App.scss'

const App = () => {
  const { dataLoaded, data, statusLoading } = useSelector(selectData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  useEffect(() => {
      // console.log(data)
  }, [data])

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/general-accounts' element={<GeneralAccounts />} />
          <Route path='/general-entries' element={<GeneralEntries />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
