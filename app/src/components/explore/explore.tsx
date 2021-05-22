import { Link } from 'react-router-dom';
import './explore.scss';
import Heart from '../../images/heart.svg';
import Diamond from '../../images/diamond.svg';
const Explore = () => {
    return (
        <div className="ec-explore-wrapper">
            <div className="ec-explore-container ec-display-flex ec-align-items-center">
            <Link className="ec-explore-item ec-margin-right-10 ec-display-inlineflex" to="/wishlist">
                <img src={Diamond} alt="Explore" className="ec-action-icon"/>
            </Link>
            <Link className="ec-explore-item ec-display-inlineflex" to="/wishlist">
                <img src={Heart} alt="Wishlist" className="ec-action-icon"/>
            </Link>
            </div>
        </div>
    )
}

export default Explore;