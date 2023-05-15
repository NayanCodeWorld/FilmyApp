import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import {fetchDataFromAPI} from '../../utils/api'
import ContentWrapper from '../../components/ContentWrapper'
import Spinner from '../../components/Spinner'
import MovieCard from '../../components/MovieCard'

import noResult from '../../assets/no-results.png'

import './index.scss'

const SearchResult = () => {
    const [data, setData] = useState(null)
    const [pageNum, setPageNum] = useState(1)
    const [loading, setLoading] = useState(false)
    const {query} = useParams()

    const fetchInitialData = () => {
        setLoading(true)
        fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`)
        .then((res) => {
            setData(res)
            setPageNum((prv) => prv + 1)
            setLoading(false)
        })
    }

    const fetchNxtPageData = () => {
        fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`)
        .then((res) => {
            if(data?.results){
                setData({
                    ...data, results: [...data?.results, ...res.results]
                })
            }
            else{
                setData(res)
            }
            setPageNum(prv => prv + 1)
        })
    }

    useEffect(() =>{
        fetchInitialData()
    }, [query])

    return(
    <div className="searchResultsPage">
        {loading && <Spinner initial={true} /> }
        {!loading && (
            <ContentWrapper>
                {data?.results?.length > 0 ? (
                    <>
                        <div className="pageTitle">
                            {`Search ${data.total_results.length > 1 ? 'results': 'result'} of '${query}'`}
                        </div>
                        <InfiniteScroll>
                            {data.results.map((item, index ) => {
                                // if(item.media_type === 'person') return;
                                // return(
                                //     <MovieCard key={index} data={item} />
                                // )
                            })}
                        </InfiniteScroll>
                    </>
                ) : (
                    <span className="resultNotFound">
                        Sorry Result Not Found
                    </span>
                )}
            </ContentWrapper>
        )}
    </div>
)}

export default SearchResult