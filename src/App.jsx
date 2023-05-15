import {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import redux-toolkit methods from changing the sliceState
import { useSelector, useDispatch } from 'react-redux'

// import Actions(method) from 'homeSlice to handle state 
import {getApiConfigration} from './reduxStore/homeSlice'

//import the methods from the store to handle state
import {fetchDataFromAPI} from './utils/api'

// import all pages
import Home from './pages/Home'
import Explore from './pages/Explore'
import PageNotFound from './pages/PageNotFound'
import Details from './pages/Details'
import SearchResult from './pages/SearchResult'
import Header from './components/Header'
import Footer from './components/Footer'

// import css file
// import './App.css'

const App = () => {
  // creating a new instance
  const dispatch = useDispatch()

  //useing useSelector hooks we can access the store state there home is the name of stateSlice
  const {url} = useSelector((state) => state.home)

  useEffect(() =>{
    fetchApiCongi();
  },[])

  const fetchApiCongi = async() => {
    const resData = await fetchDataFromAPI('/configuration')
    const url = {
      backdrop: resData.images.secure_base_url + "original",
      poster: resData.images.secure_base_url + "original",
      profile: resData.images.secure_base_url + "original",

    }
    //assign fetched data is redux state by using instance of useDispatch hook
    dispatch(getApiConfigration(url))
  }

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default App

//https://gist.github.com/ShariqAnsari88/09dbadfd81c41b399a30f6eb9f1f9548