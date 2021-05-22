import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Home from '../../images/home.svg';
import HomeActive from '../../images/home_active.svg';
import Diamond from '../../images/diamond.svg';
import DiamondActive from '../../images/diamond_active.svg';
import Heart from '../../images/heart.svg';
import HeartActive from '../../images/heart_active.svg';
import LetterActive from '../../images/letter_active.svg';
import Letter from '../../images/letter.svg';
import './footer.scss';

const Footer = () => {
    const history = useHistory();
    useEffect(() => {
        const pathname = history.location.pathname;
        switch(pathname) {
            case "home":
                setHome(true);
                break;
            case "explore":
                setExplore(true);
                break;
            case "wishlist":
                setWishList(true);
                break;
            case "contact":
                setContact(true);
                break;
        }
    }, [history.location.pathname]);
    const [home, setHome] = useState(true);
    const [explore, setExplore] = useState(false);
    const [wishlist, setWishList] = useState(false);
    const [contact, setContact] = useState(false);

    return (
        <footer className="ec-footer-wrapper">
            <div className="ec-footer-container">
                <div className="ec-footer-mobile-wrapper">
                    <div className="ec-footer-mobile-container ec-display-flex ec-justify-content-spacebetween ec-position-fixed ec-full-width">
                        <div className="ec-footer-item">
                            <Link to="/home"
                            className="ec-no-style ec-display-flex ec-direction-column ec-align-items-center">
                                <img src={home ? HomeActive : Home} alt="home" className="ec-action-icon"/>
                                <span className="ec-footer-link">Home</span>
                            </Link>
                        </div>
                        <div className="ec-footer-item">
                            <Link to="/explore"
                            className="ec-no-style ec-display-flex ec-direction-column ec-align-items-center">
                                <img src={explore ? DiamondActive : Diamond} alt="home" className="ec-action-icon"/>
                                <span className="ec-footer-link">Explore</span>
                            </Link>
                        </div>
                        <div className="ec-footer-item">
                            <Link to="/wishlist"
                            className="ec-no-style ec-display-flex ec-direction-column ec-align-items-center">
                                <img src={wishlist ? HeartActive : Heart} alt="home" className="ec-action-icon"/>
                                <span className="ec-footer-link">WishList</span>
                            </Link>
                        </div>
                        <div className="ec-footer-item">
                            <Link to="/contact"
                            className="ec-no-style ec-display-flex ec-direction-column ec-align-items-center">
                                <img src={contact ? LetterActive : Letter} alt="home" className="ec-action-icon"/>
                                <span className="ec-footer-link">Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;