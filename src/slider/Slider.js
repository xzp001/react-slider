import React, {Component} from 'react';
import './slider.css';
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    turn = (step) => {
        let index = this.state.index + step;
        if (index > this.props.item.length) {
            this.$sliders.style.transitionDuration = '0s';
            this.$sliders.style.left = 0;
            setTimeout(() => {
                this.$sliders.style.transitionDuration = this.props.speed + 's';
                index = 1;
                this.setState({index})
            }, 0);
            return;
        }
        if (index < 0) {
            this.$sliders.style.transitionDuration = '0s';
            this.$sliders.style.left = '-1600px';
            setTimeout(() => {
                this.$sliders.style.transitionDuration = this.props.speed + 's';
                index = this.props.item.length - 1;
                this.setState({index})
            }, 0);
            return;
        }
        this.setState({index})
    };

    go = () => {
        this.timer = setInterval(() => {
            this.turn(1)
        }, this.props.delay * 1000)
    };

    componentDidMount() {
        this.$sliders = document.querySelector('.sliders');
        if (this.props.auto) {
            this.go()
        }
    }

    render() {
        let style = {
            left: this.state.index * (-400),
            transitionDuration: this.props.speed + 's'
        };
        return (
            <div className="slider-wrapper"
                 onMouseOver={() => {
                     clearInterval(this.timer)
                 }}
                 onMouseOut={() => {
                     this.go()
                 }}
            >
                <ul style={style} className="sliders">
                    {
                        this.props.item.map((item, index) =>
                            <li key={index} className="slider">
                                <img src={item.src} alt=""/>
                            </li>
                        )
                    }
                    <li key={this.props.item.length} className="slider">
                        <img src={this.props.item[0].src} alt=""/>
                    </li>
                </ul>

                <div className="slider-arrows">
                    <span className="arrow arrow-left" onClick={() => {
                        this.turn(-1)
                    }}>&lt;</span>
                    <span className="arrow arrow-right" onClick={() => {
                        this.turn(1)
                    }}>&gt;</span>
                </div>

                <div className="slider-dots">
                    {
                        this.props.item.map((item, index) =>
                            <span key={index}
                                  onClick={() => {
                                      this.turn(index - this.state.index)
                                  }}
                                  className={"dot " + (index === this.state.index || (this.state.index === this.props.item.length && index === 0) ? "active" : "")}>{}</span>
                        )
                    }
                </div>
            </div>
        )
    }
}


