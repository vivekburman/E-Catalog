import { Component, createRef, RefObject } from "react";
import Card from "../card/card";
import './slider.scss';
import Arrow from '../../images/arrow.svg';

interface SliderProps{}
interface SliderState{
    currentOffset: number,
    movementDirection: number | null
}
const DIRECTION = {
    FORWARD: 1,
    BACKWARD: 2
}; 

class Slider extends Component<SliderProps, SliderState> {
    rootRef: RefObject<HTMLDivElement>;
    firstItemRef: RefObject<HTMLDivElement>;
    timer!: NodeJS.Timeout;
    constructor(props: SliderProps) {
        super(props);
        this.rootRef = createRef<HTMLDivElement>();
        this.firstItemRef = createRef<HTMLDivElement>();
        this.state = {
            currentOffset: 0,
            movementDirection: null
        };
    }
    positionElements = () => {
        // 1. get rootref width
        // 2. get card width
        // 3. calculate how many elements to show math.floor(rootRefWidth / cardWidth)
        // 4. Only show those elements rest all hidden
        if (this.rootRef.current) {
            const rootRef = this.rootRef.current;
            const firstItemRef = this.firstItemRef.current;
            requestAnimationFrame(() => {
                const rootWidth = rootRef.offsetWidth;
                const firstItemWidth = firstItemRef?.offsetWidth;
                let childrenToBeShown = firstItemWidth === undefined ? 0 : Math.floor(rootWidth / firstItemWidth);
                Array.from(rootRef.children).forEach((el, index) => {
                    const _index = index + 1;
                    if (this.state.currentOffset < _index
                        && _index <= this.state.currentOffset + childrenToBeShown) {
                        el.classList.remove("ec-visibility-hidden");
                    } 
                    else if (this.state.movementDirection == DIRECTION.FORWARD && index == this.state.currentOffset - 1
                        || this.state.movementDirection == DIRECTION.BACKWARD && index == this.state.currentOffset + childrenToBeShown) {
                        // const animationEvent = el.animate([
                        //     {
                        //         width: `${el.getBoundingClientRect().width}px`,
                        //     }, 
                        //     {
                        //         width: '0px',
                        //     }],
                        //     {
                        //         duration: 1000,
                        //         easing: "ease",
                        //         fill: "forwards",
                        //         iterations: 1,
                        //     });
                        // animationEvent.onfinish = () => {
                        //     el.classList.add("ec-display-none");
                        // };
                        el.classList.remove("ec-visibility-hidden");
                    }
                    else {
                        el.classList.add("ec-visibility-hidden");
                    }
                });
                //  root ref animation
                if (this.state.movementDirection == DIRECTION.FORWARD) {
                    rootRef.style.transform = `translateX(${-(firstItemWidth || 0) + 
                        this.getTranslateValue(rootRef.style.transform)}px)`;
                } else if (this.state.movementDirection == DIRECTION.BACKWARD) {
                    rootRef.style.transform = `translateX(${(firstItemWidth || 0) + this.getTranslateValue(rootRef.style.transform)}px)`;
                }
            });
        }
    }

    getTranslateValue = (transform: String) => {
        if (transform.length) {
            return Number.parseFloat(transform.split("(")[1].split(")")[0]);
        }
        return 0;
    }


    debouncePositionUpdate = () => {
        this.setState({
            movementDirection: null
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.positionElements();
        }, 1000);
    }

    componentDidMount() {
        this.positionElements();
        window.addEventListener('resize', this.debouncePositionUpdate);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.debouncePositionUpdate);
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
                    {i}<Card />
                </div>
            );
        }
        return result;
    }
    onPrev = () => {
        // 
        this.setState({
            currentOffset: Math.max(0, this.state.currentOffset - 1),
            movementDirection: DIRECTION.BACKWARD
        });
    }
    onNext = () => {
        //
        this.setState({
            currentOffset: Math.min(17, this.state.currentOffset + 1),
            movementDirection: DIRECTION.FORWARD
        });
    }
    render() {
        return (
            <div className="ec-slider-wrapper ec-position-relative ec-display-flex ec-justify-content-center">
                <div className="ec-slider-container">
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