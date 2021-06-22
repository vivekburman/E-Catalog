import Card from '../card/card';
import Slider from '../slider/slider';
import './collection.scss';

const BASE_URL = "https://firebasestorage.googleapis.com/v0/b/vivekjewellers-f09a8.appspot.com/o/thumbnail%2F";
const QUERY_PARAM = '?alt=media';

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

const THUMBNAILS = {
    [TYPES.GOLD]: `${BASE_URL}gold%2F`,
    [TYPES.SILVER]: `${BASE_URL}gold%2F`,
    [TYPES.DIAMOND]: `${BASE_URL}gold%2F`,
    [TYPES.STONE]: `${BASE_URL}gold%2F`,
}

const THUMBNAIL_ITEM = {
    [TYPES.GOLD]: [
        ["ring.png", "Ring"],
        ["earring.png", "Earring"],
        ["pendant.png", "Pendant"],
        ["chain.png", "Chain"],
        ["bracelet.png", "Bracelet"],
        ["necklace.png", "Necklace"],
        ["nosepin.png", "Nose Pin"],
    ],
    [TYPES.SILVER]: [
        ["ring.png", "Ring"],
        ["earring.png", "Earring"],
        ["pendant.png", "Pendant"],
        ["chain.png", "Chain"],
        ["bracelet.png", "Bracelet"],
        ["necklace.png", "Necklace"],
        ["nosepin.png", "Nose Pin"],
    ],
    [TYPES.DIAMOND]: [
        ["ring.png", "Ring"],
        ["earring.png", "Earring"],
        ["pendant.png", "Pendant"],
        ["chain.png", "Chain"],
        ["bracelet.png", "Bracelet"],
        ["necklace.png", "Necklace"],
        ["nosepin.png", "Nose Pin"],
    ],
    [TYPES.STONE]: [
        ["ring.png", "Ring"],
        ["earring.png", "Earring"],
        ["pendant.png", "Pendant"],
        ["chain.png", "Chain"],
        ["bracelet.png", "Bracelet"],
        ["necklace.png", "Necklace"],
        ["nosepin.png", "Nose Pin"],
    ],
}

const getSection = (val: string) => {
    return (
        <section key={val} className="ec-collection-items-wrapper">
            <h2 className="ec-item-title ec-text-align-center">{val} Collection</h2>
            <Slider getCard={getCard} id={val} size={7}/>
        </section>
    );
}

const getCard = (type: string, index: number) => {
    switch(type) {
        case TYPES.GOLD:
            return <Card imageSrc={THUMBNAILS[type] + THUMBNAIL_ITEM[type][index][0] + QUERY_PARAM} title={THUMBNAIL_ITEM[type][index][1]} />
        case TYPES.SILVER:
            return <Card imageSrc={THUMBNAILS[type] + THUMBNAIL_ITEM[type][index][0] + QUERY_PARAM} title={THUMBNAIL_ITEM[type][index][1]} />
        case TYPES.DIAMOND:
            return <Card imageSrc={THUMBNAILS[type] + THUMBNAIL_ITEM[type][index][0] + QUERY_PARAM} title={THUMBNAIL_ITEM[type][index][1]} />
        case TYPES.STONE:
            return <Card imageSrc={THUMBNAILS[type] + THUMBNAIL_ITEM[type][index][0] + QUERY_PARAM} title={THUMBNAIL_ITEM[type][index][1]} />
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