import React, { useState, useEffect } from "react";

// Icons for Navbar
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import { useNavigate, useLocation } from "react-router-dom";

import './index.scss'

import ContentWrapper from "../ContentWrapper"
import logo from "../../assets/movix-logo.png"

const Header = () => {
    // to control scrolling
    const [show, setShow] = useState('top')
    const [lastScrollY, setLastScrollY] = useState(0)
    // to control mobile view navigation button
    const [mobileMenu, setMobileMenu] = useState(false)
    // to control search query in mobile view
    const [query, setQuery] = useState('')
    const [showSearch, setShowSearch] = useState('')

    //hook to handle navigation
    const navigate = useNavigate()
    //hook to handle current location
    const location = useLocation()

    // Trick to start scroll from top always
    useEffect(() => {
        window.scrollTo(0,0)
    },[location])

    // method to handle navigation transition
    useEffect(() =>{
        window.addEventListener('scroll', controlNavbr)
        return  window.removeEventListener('scroll', controlNavbr)
    }, [lastScrollY])

    const controlNavbr = () =>{
        if(window.scrollY > 200){
            if(window.screenY > lastScrollY && !mobileMenu){
                setShow('hide')
            }
            else{
                setShow('show')
            }
        }else{
            setShow('show')
        }
        setLastScrollY(window.scrollY)
    }
    
    const openSearch = () => {
        setMobileMenu(false)
        setShowSearch(true)
    }
    // to handle navigation in mobile view
    const openMobileMenu = () => {
        setMobileMenu(true)
        setShowSearch(false)
    }

    // method to handle search action
    const searchQueryHandler = (event) => {
        if(event.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    const navigationHandler = (type) => {
        if(type === 'movie') {
            navigate(`/explore/movie`)
        }
        else{
            navigate(`/explore/tv`)
        }
        setMobileMenu(false)
    }

    return(
        <header className={`header ${mobileMenu && 'mobileView'} ${show}`}>
            <ContentWrapper >
                <div className="logo" onClick={() => navigate('/')}>
                    <img src={logo} alt="Filmy" />
                    <span className="logo-heading">Filmy</span>
                </div>
                {/* Navigation Link Container for laptop view */}
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
                    <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>
                {/* Navigation Link Container mobile view */}
                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {
                    mobileMenu ? 
                    (<VscChromeClose onClick={() => setMobileMenu(false)} />) : 
                     (<SlMenu onClick={openMobileMenu} />)
                    }
                </div>

            {/* Search Bar */}
            </ContentWrapper>
            {
                showSearch && (
                    <div className="searchBar">
                        <ContentWrapper>
                            <div className="searchInput">
                                <input 
                                    type="text" 
                                    placeholder="Search for a movie or tv show..." 
                                    onChange={(event) => setQuery(event.target.value)}
                                    onKeyUp={searchQueryHandler}
                                    onBlur={() => setShowSearch(false)}
                                />
                                    <VscChromeClose onClick={() => setShowSearch(false)} />
                            </div>
                        </ContentWrapper>
                    </div>
                )
            }
            
        </header>
    )
}

export default Header