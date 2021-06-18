import { Component, createRef, RefObject } from "react";
import Card from "../card/card";
import './slider.scss';
import Arrow from '../../images/arrow.svg';

interface SliderProps{
    getCard: Function,
    id: string
}
interface SliderState{
    currentOffset: number,
    movementDirection: number | null
}
const DIRECTION = {
    FORWARD: 1,
    BACKWARD: 2
}; 

const ITEMS_TO_SHOW = {
    300: 1,
    450: 2,
    800: 3,
    992: 4,
};

const GUTTER_H = 40;
class Slider extends Component<SliderProps, SliderState> {
    rootRef: RefObject<HTMLDivElement>;
    firstItemRef: RefObject<HTMLDivElement>;
    windowResizeTimer!: NodeJS.Timeout;
    swipeTimer!: NodeJS.Timeout;
    touchStartX: number | null;
    touchStartY: number | null;
    constructor(props: SliderProps) {
        super(props);
        this.rootRef = createRef<HTMLDivElement>();
        this.firstItemRef = createRef<HTMLDivElement>();
        this.state = {
            currentOffset: 0,
            movementDirection: null
        };
        this.touchStartX = null;
        this.touchStartY = null;
    }
    positionElements = () => {
        // 1. get rootref width
        // 2. get card width
        // 3. calculate how many elements to show math.floor(rootRefWidth / cardWidth)
        // 4. Only show those elements rest all hidden
        if (this.rootRef.current) {
            const rootRef = this.rootRef.current;
            requestAnimationFrame(() => {
                const windowWidth = window.innerWidth;
                const rootWidth = rootRef.offsetWidth;
                let childrenToBeShown = 0;
                if (windowWidth < 300) {
                    childrenToBeShown = ITEMS_TO_SHOW[300];
                } 
                else if (windowWidth < 450) {
                    childrenToBeShown = ITEMS_TO_SHOW[450];
                } 
                else if (windowWidth < 800) {
                    childrenToBeShown = ITEMS_TO_SHOW[800];
                } else {
                    childrenToBeShown = ITEMS_TO_SHOW[992];
                }
                const itemWidth = rootWidth / childrenToBeShown;
                Array.from(rootRef.children).forEach((el, index: number) => {
                    const _index = index + 1;
                    const _el = el as HTMLElement
                    _el.style.width = `${itemWidth}px`;
                    _el.style.height = `${itemWidth + GUTTER_H}px`;
                    if ((this.state.currentOffset < _index
                        && _index <= this.state.currentOffset + childrenToBeShown)
                        || (this.state.movementDirection === DIRECTION.FORWARD && index === this.state.currentOffset - 1)
                        || (this.state.movementDirection === DIRECTION.BACKWARD && index === this.state.currentOffset + childrenToBeShown)) {
                        _el.classList.remove("ec-visibility-hidden");
                    } 
                    else {
                        _el.classList.add("ec-visibility-hidden");
                    }
                });
                //  root ref animation
                rootRef.style.transform = `translateX(${-(itemWidth || 0) * this.state.currentOffset}px)`;
            });
        }
    }

    debouncePositionUpdate = () => {
        clearTimeout(this.windowResizeTimer);
        this.windowResizeTimer = setTimeout(() => {
            this.positionElements();
        }, 1000);
    }
    onTouchStart = (event: any) => {
        console.log('touchstart');
        this.touchStartX = event.touches[0].clientX;
        this.touchStartY = event.touches[0].clientY;
    }
    onTouchMove = (event: any) => {
        clearTimeout(this.swipeTimer);
        this.swipeTimer = setTimeout(() => {
            if (!this.touchStartX || !this.touchStartY) {
                return;
            }
            const touchX = event.touches[0].clientX;
            const touchY = event.touches[0].clientY;
            const xDiff = this.touchStartX - touchX;
            const yDiff = this.touchStartY - touchY;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                xDiff > 0 ? this.onNext() : this.onPrev();
            }
            this.touchStartX = null;
            this.touchStartY = null;
        }, 100);
    }
    componentDidMount() {
        this.positionElements();
        window.addEventListener('resize', this.debouncePositionUpdate);
        if (this.rootRef.current) {
            this.rootRef.current.addEventListener('touchstart', this.onTouchStart);
            this.rootRef.current.addEventListener('touchmove', this.onTouchMove);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.debouncePositionUpdate);
        // remove event listeneers
        if (this.rootRef.current) {
            this.rootRef.current.removeEventListener('touchstart', this.onTouchStart);
            this.rootRef.current.removeEventListener('touchmove', this.onTouchMove);
        }
    }

    componentDidUpdate() {
        this.positionElements();
    }

    getCardsList = () => {
        const result = [];
        for (let i = 0; i<20; i++) {
            result.push(
                <div className="ec-item-wrapper ec-display-inlineblock ec-visibility-hidden" 
                ref={i === 0 ? this.firstItemRef : null}
                key={i}>
                    {this.props.getCard(this.props.id)}
                </div>
            );
        }
        return result;
    }
    onPrev = () => {
        this.setState({
            currentOffset: Math.max(0, this.state.currentOffset - 1),
            movementDirection: DIRECTION.BACKWARD
        });
    }
    onNext = () => {
        this.setState({
            currentOffset: Math.min(17, this.state.currentOffset + 1),
            movementDirection: DIRECTION.FORWARD
        });
    }
    render() {
        return (
            <div className="ec-slider-wrapper ec-display-flex ec-justify-content-center">
                <div className="ec-slider-container ec-full-width ec-position-relative">
                    <div className="ec-slider-cardlist-wrapper ec-overflow-hidden">
                        <div className="ec-slider-cardlist-container ec-display-flex"
                            ref={this.rootRef}>
                        {
                            this.getCardsList()
                        }
                        </div>    
                    </div>
                    <div className="ec-slide-wrapper ec-left ec-position-absolute ec-full-height ec-display-flex ec-align-items-center">
                        {
                            this.state.currentOffset !== 0 &&
                            <figure className="ec-arrow-wrapper ec-no-margin ec-cursor-pointer"
                            onClick={this.onPrev}>
                                <img className="ec-full-width ec-left-transform ec-full-height" alt="left arrow" 
                                    src={Arrow}/>
                            </figure> 
                        }
                    </div>
                    <div className="ec-slide-wrapper ec-right ec-position-absolute ec-full-height ec-display-flex ec-align-items-center">
                        {
                            this.state.currentOffset !== 17 &&
                            <figure className="ec-arrow-wrapper ec-no-margin ec-cursor-pointer"
                            onClick={this.onNext}>
                                <img className="ec-full-width ec-full-height" alt="right arrow" 
                                    src={Arrow}/>
                            </figure>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Slider;