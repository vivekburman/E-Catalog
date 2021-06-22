import './card.scss';

interface CardProps {
    imageSrc: string,
    title: string
};


const Card = (props: CardProps) => {
    return (
        <div className="ec-card-wrapper ec-full-height">
            <div className="ec-card-container">
                <div className="ec-card-img-wrapper ec-margin-bottom-10">
                    <img className="ec-card-img ec-full-width ec-full-height" src={props.imageSrc} alt={props.title} />
                </div>
                <div className="ec-card-title ec-text-align-center">{props.title}</div>
            </div>
        </div>
    );
}

export default Card;