import HeroBanner from './HeroBanner'
import Trending from './Trending'
import Popular from './Popular'
import TopRated from './TopRated'

import './index.scss'

const Home = () => (
    <div className='homePage'>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
    </div>
)

export default Home