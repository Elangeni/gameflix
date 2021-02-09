import React from 'react';
import ImageCarousel from './Carousel';
import './style.css';

class Popup extends React.Component {

  getGenre() {
    let genres = this.props.data.get("genres");
    let result = "Genre: Unkown";

    if (genres != null) {
      let arr = genres.map(x => {
        return x.name;
      });
      arr.sort();
      arr = arr.join(', ');
      result = "Genres: " + arr;
    }

    return result;
  }

  getStores() {
    let stores = this.props.data.get("stores");
    let result = "Currently unavailable for purchase.";
    if (stores != null) {
      let arr = stores.map(x => {
        return x.store.name;
      });
      arr.sort();

      arr = arr.join(', ');
      result = "Available at: " + arr;
    }

    return result;
  }

  getPlatforms() {
    let platforms = this.props.data.get("platforms");
    let result = "Platform data is currently unavailable."
    if (platforms != null) {
      let arr = platforms.map(x => {
        return x.platform.name;
      });
      arr.sort();
      arr = arr.join(', ');
      result = "Available platforms: " + arr;
    }

    return result;
  }

  getDescription(){
    let id = this.props.data.get("id");

    const APIKey = '85edc930625b426997cf69801cbefa62';
        fetch('https://api.rawg.io/api/games?key=' + APIKey + '&id=' + id)
            .then(res => res.json())
            .then((data) => {
                //this.setState({ games: data.results, loading: false })
                console.log(data)
                // this.setState({ games: data.results, loading: false, screenTitle: 'Search results for ' + value })
            })
            .catch(console.log)
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