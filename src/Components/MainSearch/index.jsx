import React from 'react';
import {
    Form,
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
import Popup from './Popup.jsx';

class MainSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            loading: true,
            initialScreen: true,
            screenTitle: 'Popular Games',
            showPopup: false,
            popupData: new Map()
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getSingleGame = this.getSingleGame.bind(this);
    }
     // create(e) {
    //     // add entity - POST
    //     e.preventDefault();
    // }

    // Search(e) {
    //     e.preventDefault();
    //     console.log("clicked");
    // }

    handleChange(event) {
        this.setState({ game: event.target.value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.game);
        this.getGames(this.state.game);
        event.preventDefault();
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
        fetch('https://api.rawg.io/api/games?key=' + APIKey + '&search=' + value)
            .then(res => res.json())
            .then((data) => {
                //this.setState({ games: data.results, loading: false })
                console.log(data)
                this.setState({ games: data.results, loading: false, screenTitle: 'Search results for ' + value })
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
                            <GameLink onClick={() => this.togglePopup(game)}>Learn More</GameLink>
                        </Card>

                    </div>
                </div>
            );
        })
    };

    

    togglePopup(game) {
        this.getSingleGame(game);
        this.setState({  
             showPopup: !this.state.showPopup  
        });
        
        console.log(this.state)
    }

    getSingleGame = (game) => {
        console.log(game)
        var map = new Map();
            map.set("name", game.name);
            map.set("image", game.background_image);
            map.set("rating", game.rating);
            map.set("genres", game.genres);
            map.set("released", game.released);
            map.set("screenshots", game.short_screenshots);
            map.set("stores", game.stores);
            //this.setState({ popupData : map });
            this.changePopupData(map);
            // console.log(this.state)
    }

    async changePopupData(data) {
        await this.setState({ popupData: data });
        console.log(this.state.popupData);
    }

    render() {
        if (this.state.loading) {
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
                    <div> Loading...</div>
                </div>
            );
        } else if (this.state.initialScreen) {
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
                    
                    <div>
                        <h1> Simple Popup Example In React Application </h1>
                        <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>

                        {this.state.showPopup ?
                            <Popup
                                text='Click "Close Button" to hide popup'
                                closePopup={this.togglePopup.bind(this)}
                                data={this.state.popupData}
                            />
                            : null
                        }
                    </div>
                </div>
            
         
               );
                    }
    }
}


export default MainSearch
