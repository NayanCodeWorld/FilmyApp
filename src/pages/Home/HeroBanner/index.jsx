import {useState, useEffect} from 'react'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
// import useFetch component
import useFetch from '../../../hooks/useFetch'

//import contentWrapper and Lazyload components 
import Lazyload from '../../../components/Lazyload'
import ContentWrapper from '../../../components/ContentWrapper'

import './index.scss'

const HeroBanner = () =>{ 
    //state to handle heorbanner images
    const [background, setBackground] = useState('')
    //state to hadle search input
    const [query, setQuery] = useState('');

    //making instance variables of useNavigation
    const navigate = useNavigate()

    // destructuring data from useFetch
    const {data, loading} = useFetch('/movie/upcoming')

    const {url} = useSelector((state) => state.home)

     //Select any rendom img for poster 
     useEffect(() => { 
        const randomBgImage = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
        setBackground(randomBgImage)
    }, [data])

    // onChange method to search input
    const searchQueryHandler = (event) => {
        if(event.key === 'Enter' && query.length > 0) {
           return navigate(`/search/${query}`);
        }
    }

    return(
            <div className='heroBanner'>
                {!loading && (<div className="backdrop-img">
                    <Lazyload src={background} />
                </div>)} 
                {/* div for transition look */}
                <div className='opacity-layer' />
                <ContentWrapper>
                    <div className="heroBannerContent">
                        <span className="title">
                            Welcome.
                        </span>
                        <span className="subTitle">
                            Millions of movies, TV shows and people to discover.
                            Explore now.
                        </span>
                        <div className="searchInput">
                            <input 
                                type="text" 
                                placeholder="Search for a movie or tv show..." 
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <button>Search</button>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        )
}

export default HeroBanner