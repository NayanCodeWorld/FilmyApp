import {useState} from 'react'

import ContentWrapper from '../../../components/ContentWrapper'
// import swithch tab component
import SwitchTabs from '../../../components/SwitchTabs'
//import fetch components for fetching data
import useFetch from '../../../hooks/useFetch'
//import Carousel Component
import Carousel from '../../../components/Carousel'

const TopRated = () => {
     //State to handle active tab
    const [endPoint, setEndPoint] = useState('movie')

    // fetchMethod calling
    const {data, loading} = useFetch(`/${endPoint}/top_rated`)

    //Method to change active tab and fetching trending data
    const onTabChange = (tab) => {
      setEndPoint(tab === 'Movies' ? 'movie' : 'tv')
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">
                Top Rated
            </span>
            <SwitchTabs options={['Movies','TV Shows']} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default TopRated