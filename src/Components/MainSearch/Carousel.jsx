import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import './style.css';

class ImageCarousel extends React.Component{
    
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
          current: 0
        };
      }
    
      back() {
        this.slideRef.current.goBack();
      }
    
      next() {
        this.slideRef.current.goNext();
      }
    
      render() {
        const properties = {
            duration: 3000,
            transitionDuration: 500,
            infinite: true,
            indicators: false,
            scale: 0.4,
            arrows: false
        };
        const slideImages = this.props.data.get("screenshots").map(pic => pic["image"]);
        return (
          <div className="App">
            <div className="slide-container">
              <Fade ref={this.slideRef}{...properties}>
                {slideImages.map((each) => (
                  <div className="each-slide">
                    <img className="lazy" src={each} alt="sample" />
                  </div>
                ))}
              </Fade>
            </div>
    
            {/* <div className="slide-container buttons">
              <button onClick={this.back} type="button">
                Go Back
              </button>
              <button onClick={this.next} type="button">
                Go Next
              </button>
            </div> */}
          </div>
        );
      
    }
    
}
export default ImageCarousel
