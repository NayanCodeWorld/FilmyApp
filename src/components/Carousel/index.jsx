import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

import ContentWrapper from '../ContentWrapper'
import Lazyloade from '../LazyLoad'
import PosterFallback from '../../assets/no-poster.png'
import CircleRating from '../CircleRating'
import Genres from '../Genres'

import './index.scss'

const Carousel = (props) => {
  const carouselContainerRef = useRef();

  const {url} = useSelector((state) => state.home)
  const navigate = useNavigate()


  const navigation = (direction) => {
    const container = carouselContainerRef.current
    
    const scrollAmount = direction === 'left' ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)

    container.scrollTo({
      left: scrollAmount,
      behaviour: "smooth",
    })
  }

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton">
          <div className="textBlock">
            <div className="title skeleton"></div>
            <div className="date skeleton"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='carousel'>
      <ContentWrapper>
        {props.title && <div className='carouselTitle'>{props.title}</div>}
        <BsFillArrowLeftCircleFill 
          className='carouselLeft arrow'
          onClick={() =>navigation("left")}
        />
        <BsFillArrowRightCircleFill 
          className='carouselRight arrow'
          onClick={() =>navigation("right")}
        />
        {!props.loading ? (
          <div 
            className='carouselItems' 
            ref={carouselContainerRef}
          >
            {props.data?.map((item) => {
              console.log(item.id)
              const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
              return (
                <div 
                  key={item.id} 
                  className='carouselItem'
                  onClick={() => navigate(`/${item.media_type || props.endPoint}/${item.id}`)}
                >
                  <div className="posterBlock">
                    <Lazyloade src={posterUrl} />
                    <CircleRating rating={
                      item.vote_average.toFixed(1)
                    } />
                    {/* <Genres data={item.genre_ids.slice(0,2)} /> */}
                  </div>
                  <div className="textBlock">
                    <span className="title">
                      {item.title || item.name}
                    </span>
                    <span className="date">
                      {dayjs(item.release_Date).format('MMM D, YYYY')}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel