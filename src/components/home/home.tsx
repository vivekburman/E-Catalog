import { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import ProductCollection from '../productcollection/productcollection';
class Home extends Component {
    render () {
        return (
            <div className="ec-home-wrapper">
                <Header />
                <ProductCollection />
                <Footer />
            </div>
        ); 
    }
}
export default Home;