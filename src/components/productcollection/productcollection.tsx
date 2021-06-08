import Banner from '../banner/banner';
import Collection from '../collection/collection';
import './productcollection.scss';

const ProductCollection = () => {
    return(
        <main className="ec-product-collection-wrapper ec-full-height">
            <Banner />
            <Collection />
        </main>
    );
}
export default ProductCollection;