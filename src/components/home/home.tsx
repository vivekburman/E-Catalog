import { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import ProductCollection from '../productcollection/productcollection';
import Loading from '../../images/loader_gif.gif';
import './home.scss';
interface HomeProps {

}
interface HomeState {
    showLoader: boolean;
};
  
class Home extends Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            showLoader: true
        };
    }

    componentDidMount() {
        window.addEventListener('load', this.onloadListener);
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.onloadListener);
    }
    onloadListener = () => {
        this.setState({
            showLoader: false
        });
    }
    render () {
        const { showLoader } = this.state;
        return (
            <div className={"ec-home-wrapper " + (showLoader ? "ec-full-height" : "")}>
                <div className={"ec-home-container " + (showLoader ? "ec-visiblity-hidden" : "")}>
                    <Header />
                    <ProductCollection />
                    <Footer />
                    <div className={"ec-home-loader-wrapper ec-full-width ec-full-height ec-position-fixed " + (showLoader ? "" : "ec-display-none")}>
                        <div className="ec-home-loader-container ec-full-width ec-full-height ec-display-flex ec-justify-content-center ec-align-items-center">
                            <img src={Loading} className="ec-home-loading-img" alt="Loading" />
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}
export default Home;