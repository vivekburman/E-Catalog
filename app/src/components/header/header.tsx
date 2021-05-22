import Explore from '../explore/explore';
import Logo from '../logo/logo';
import './header.scss';

const Header = () => {
    return (
        <header className="ec-header-wrapper">
            <div className="ec-header-container ec-display-flex ec-align-items-center">
                <div className="ec-flex-grow">
                    <Logo />
                </div>
                <Explore />
            </div>
        </header>
    )
}

export default Header;