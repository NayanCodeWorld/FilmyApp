import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedin,} from 'react-icons/fa'

import ContentWrapper from '../ContentWrapper'

import './index.scss'

const Footer = () => (
    <footer className="footer">
        <ContentWrapper>
            <ul className="menuItems">
                <li className="menuItem">About</li>
                <li className="menuItem">Blog</li>
                <li className="menuItem">FAQ</li>
                <li className="menuItem">Terms of Use</li>
                <li className="menuItem">Privacy-Policy</li>
            </ul>
            <div className="infoText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas ea praesentium natus saepe blanditiis architecto consectetur amet eligendi suscipit omnis ex cupiditate ipsum recusandae optio officia, debitis eveniet quo?
            </div>
            <div className="socialIcons">
                <span className="icon">
                    <FaFacebookF />
                </span>
                <span className="icon">
                    <FaInstagram />
                </span>
                <span className="icon">
                    <FaTwitter />
                </span>
                <span className="icon">
                    <FaLinkedin />
                </span>
            </div>
        </ContentWrapper>
    </footer>
)

export default Footer