import React from 'react';
import { Form, 
    SearchBar, 
    SearchBtn, 
    SearchBtnLink, 
    SearchImage, 
    Card, 
    Display,
    MainSearchSection,
    GameLink,
     } from "./MainSearchElements";
import { render } from '@testing-library/react';

class MainSearch extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            loading: true,
            initialScreen: true,
            screenTitle: 'Popular Games',
          };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ game: event.target.value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.game);
        this.getGames(this.state.game);
        event.preventDefault();
    }

    // getSingleGame(id) {
    //     console.log('Game with id number ' + id);
    //     // event.preventDefault();
    // }

    getSingleGame = (game) => {
        alert(game.name);
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

    getGames(value) {

        const APIKey = '85edc930625b426997cf69801cbefa62';
        fetch('https://api.rawg.io/api/games?key=' + APIKey + '&search=' + value )
            .then(res => res.json())
            .then((data) => {
                //this.setState({ games: data.results, loading: false })
                console.log(data)
                this.setState({games:data.results, loading:false, screenTitle:'Search results for ' + value})
            })
            .catch(console.log)
            
    }

    renderGames() {
        return this.state.games.map(game => {
            return (
                <div class="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                    <div id="one">
                        <Card>
                            <SearchImage src={game.background_image} alt={game.name} />
                            <h5 class="card-title">{game.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Released on: {game.released}</h6>
                            <p class="card-text">Rating: {game.rating}</p>
                            <GameLink onClick={() => this.getSingleGame(game)}>Learn More</GameLink>
                        </Card>
                        
                    </div>
                </div>
            );
        })
    }

    create(e) {
        // add entity - POST
        e.preventDefault();
    }

    Search(e) {
        e.preventDefault();
        console.log("clicked");
    }

    // const MainSearch = () => {
    render() {
        if(this.state.loading){
            return(
            <div>
                <MainSearchSection>
                    <h3>Start searching for your next game now.</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <SearchBar
                            type="text"
                            autoFocus="autofocus"
                            placeholder="Search..."
                            id="query"
                            value={this.state.value}
                            onChange={this.handleChange} />
                        {/* <SearchBtn>
                            <SearchBtnLink onSubmit={this.handleSubmit} >Search</SearchBtnLink>
                        </SearchBtn> */}

                    </Form>
                </MainSearchSection>
                <div> Loading...</div>
            </div>
            )
        }else if(this.state.initialScreen){
            return (
                <div>
                    <MainSearchSection>
                        <h3>Start searching for your next game now.</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <SearchBar
                                type="text"
                                autoFocus="autofocus"
                                placeholder="Search..."
                                id="query"
                                value={this.state.value}
                                onChange={this.handleChange} />
                            {/* <SearchBtn>
                                <SearchBtnLink onSubmit={this.handleSubmit} >Search</SearchBtnLink>
                            </SearchBtn> */}
    
                        </Form>
                    </MainSearchSection>
                        <div>
                        <center><h1>{this.state.screenTitle}</h1></center>
                         <div class="row">
                             {this.renderGames()}
                         </div>
                     </div>
                </div>
            )
        }
    }
}

export default MainSearch
