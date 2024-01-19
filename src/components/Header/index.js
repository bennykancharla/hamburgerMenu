// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <Link to="/" className="link-ele">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          /* eslint-disable-next-line */
          <button
            data-testid="hamburgerIconButton"
            className="button"
            type="button"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
      >
        {getPopup => (
          <div className="popup-container">
            {/* eslint-disable-next-line */}
            <button
              onClick={getPopup}
              data-testid="closeButton"
              type="button"
              className="close-button"
            >
              <IoMdClose className="close-icon" />
            </button>

            <ul className="option-container">
              <li>
                <Link to="/" className="link-ele">
                  <div className="options">
                    <AiFillHome className="option-icon" />
                    <h1>Home</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-ele">
                  <div className="options">
                    <BsInfoCircleFill className="option-icon" />
                    <h1>About</h1>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
    <hr className="break" />
  </>
)

export default Header
