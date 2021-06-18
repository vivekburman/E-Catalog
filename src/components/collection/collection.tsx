import Card from '../card/card';
import Slider from '../slider/slider';
import './collection.scss';
import GoldImage from '../../images/home/gold/ring.png';

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
            <Slider getCard={getCard} id={val}/>
        </section>
    );
}

const getCard = (type: string) => {
    switch(type) {
        case TYPES.GOLD:
            return <Card imageSrc={GoldImage} title="Ring" />
        case TYPES.SILVER:
            return <Card imageSrc={GoldImage} title="Ring" />
        case TYPES.DIAMOND:
            return <Card imageSrc={GoldImage} title="Ring" />
        case TYPES.STONE:
            return <Card imageSrc={GoldImage} title="Ring" />
    }
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