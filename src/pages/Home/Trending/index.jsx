import {useState} from 'react'

import ContentWrapper from '../../../components/ContentWrapper'
// import swithch tab component
import SwitchTabs from '../../../components/SwitchTabs'
//import fetch components for fetching data
import useFetch from '../../../hooks/useFetch'
//import Carousel Component
import Carousel from '../../../components/Carousel'

const Trending = () => {
     //State to handle active tab
    const [endPoint, setEndPoint] = useState('day')

    // fetchMethod calling
    const {data, loading} = useFetch(`/trending/all/${endPoint}`)

    //Method to change active tab and fetching trending data
    const onTabChange = (tab) => {
      setEndPoint(tab === 'Day' ? 'day' : 'week')
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">
                Trending
            </span>
            <SwitchTabs options={['Day','Week']} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending