import Banner from '../banner/banner';
import Collection from '../collection/collection';
import './productcollection.scss';

const ProductCollection = () => {
    return(
        <div className="ec-product-collection-wrapper ec-full-height">
            <Banner />
            <Collection />
        </div>
    );
}
export default ProductCollection;