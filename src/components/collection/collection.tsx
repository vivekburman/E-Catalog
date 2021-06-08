import Slider from '../slider/slider';
import './collection.scss';


// 1. gold
// 2. silver
// 3. Diamond
// 4. Stones

enum TYPES {
    GOLD = "Gold",
    SILVER = "Silver",
    DIAMOND = "Diamond",
    STONE = "Stone"
}

const getSection = (val: string) => {
    return (
        <section key={val} className="ec-collection-items-wrapper">
            <h2 className="ec-item-title ec-text-align-center">{val} Collection</h2>
            <Slider />
        </section>
    );
}

const getSectionItems = () => {
    const result: JSX.Element[] = [];
    Object.values(TYPES).forEach(val => result.push(getSection(val)));
    return result;   
}



const Collection = () => {
    return(
        <div className="ec-collection-wrapper">
            <div className="ec-collection-container">
                {
                    getSectionItems()
                }
            </div>
        </div>
    );
}
export default Collection;