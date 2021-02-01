import React,{Component} from 'react'
import Games from './GameCards'
import { Display, SearchImage, Card,} from "./ResultElements";

class Cards extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
    games: [],
    loading: true
  }

  this.componentDidMount = this.componentDidMount.bind(this);
    
  }
  componentDidMount() {
    const APIKey = '85edc930625b426997cf69801cbefa62';
    fetch('https://api.rawg.io/api/games?key=' + APIKey)
    .then(res => res.json())
    .then((data) => {
      this.setState({ games: data.results, loading: false })
      console.log(this.state.games)
    })
    .catch(console.log)
  }

  renderGames(){
    return this.state.games.map(game => {
      return (
          <div class="col-md-4 col-lg-3 col-sm-6 col-xs-12">
              <div id="one">
              <Card>
                <SearchImage src={game.background_image} alt={game.name}/>
                <h5 class="card-title">{game.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Released on: {game.released}</h6>
                <p class="card-text">Rating: {game.rating}</p>
              </Card>
              </div>
          </div>
      );
  })
  }

  render() {
    if (this.state.loading) {
        return <div> Loading...</div>
    }

    return (
        <div>
           <center><h1>Popular Games</h1></center>
            <div class="row">
                {this.renderGames()}
            </div>
        </div>
    );
}

  // render() {
  //   return (
  //       <Games games={this.state.games} />
  // )
  // }
};

export default Cards;
