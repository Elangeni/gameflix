import React from 'react';
import ImageCarousel from './Carousel';
import './style.css';


class Popup extends React.Component {

  render() {
    return (
      <div className='popup'>
        <div className='popup\_inner'>
          <h1>{this.props.data.get("name")}</h1>
          <ImageCarousel data={this.props.data}/>


          <h3>Released On: {this.props.data.get("released")}</h3>
          <h4>Rating: {this.props.data.get("rating")}</h4>
          <p>Genres</p>
          <ul>
            {this.props.data.get("genres").map(genre => (
              <li>{genre.name}</li>
            ))}
          </ul>
          <br/>
          <p>Stores</p>
          <ul>
            {this.props.data.get("stores").map(store => (
              <li>{store.store.name}</li>
            ))}
          </ul>
          <br/>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;