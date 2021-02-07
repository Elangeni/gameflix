import React from 'react';
import ImageCarousel from './Carousel';
import './style.css';

class Popup extends React.Component {

  getGenre(){
    let genres = this.props.data.get("genres");
    
    let arr = genres.map(x => {
      return x.name;
    });
    arr.sort();
    arr = arr.join(', ');
    let result = "Genres: " + arr;

    return result;
  }

  getStores(){
    let stores = this.props.data.get("stores");
    if(stores.length)
    let arr = stores.map(x => {
      return x.store.name;
    });
    arr.sort();
    
    arr = arr.join(', ');
    let result = "Available at: " + arr;

    return result;
  }

  getPlatforms(){
    let platforms = this.props.data.get("platforms");
    
    let arr = platforms.map(x => {
      return x.platform.name;
    });
    arr.sort();
    arr = arr.join(', ');
    let result = "Available platforms: " + arr;

    return result;
  }

  render() {
    return (
      <div className='popup'>
        {/* <div className='popup\_inner'> */}

          <div className='slideshow' >
            <ImageCarousel data={this.props.data} />
          </div>

          <div className="game-info">
            <h1>{this.props.data.get("name")}</h1>
            <h3>Released On: {this.props.data.get("released")}</h3>
            <h4>Rating: {this.props.data.get("rating")}</h4>
            
            <br />
            <p>{this.getGenre()}</p>
            <p>{this.getStores()}</p>
            <p>{this.getPlatforms()}</p>
            <br />
            <button onClick={this.props.closePopup}>Back to Search</button>
          </div>



        {/* </div> */}
      </div>
    );
  }
}

export default Popup;