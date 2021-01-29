import React from 'react';
import VideoGameCollage from "./VideoGameCollage.jpg"
import axios from 'axios';
import { Form, SearchBar, SearchBtn, SearchBtnLink, MainImage, MainSearchSection } from "./MainSearchElements";
import { render } from '@testing-library/react';

class MainSearch extends React.Component {
    state = {
        game: ''
    };
    constructor(props) {
        super(props);
        this.state = {
            game: {
                name: "Game Name"
            }

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ game: event.target.value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.game);
        this.getGames();
        event.preventDefault();
    }

    componentDidMount() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

        const options = {
            method: 'POST',
            url: 'https://gamedatabasestefan-skliarovv1.p.rapidapi.com/listGames',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-key': 'b8089a37cemsh20c46c1b97969aep148012jsn75c3eeeba01d',
                'x-rapidapi-host': 'GameDatabasestefan-skliarovV1.p.rapidapi.com'
            },
            data: { userKey: 'codnvs49gx7ivbo5877zm1bv595q49', requestUrl: 'https://api.igdb.com/v4/games' }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }

    getGames() {
        var proxyUrl = 'https://powerful-anchorage-84794.herokuapp.com/';
        const options = {
            url: proxyUrl + "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': 'codnvs49gx7ivbo5877zm1bv595q49',
                'Authorization': 'iq74b83gtbmnv95dg8dvk92fwb0h4n',
            },
            data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
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
        return (
            <MainSearchSection>
                <Form onSubmit={this.handleSubmit}>
                    <h2>Start searching for your next game now.</h2>
                    <SearchBar
                        type="text"
                        autoFocus="autofocus"
                        placeholder="Search..."
                        id="query"
                        value={this.state.value}
                        onChange={this.handleChange} />
                    <SearchBtn>
                        <SearchBtnLink onSubmit={this.handleSubmit} /*onClick={(e) => {this.Search(e)}}*/>Search</SearchBtnLink>
                    </SearchBtn>

                </Form>
                <MainImage src={VideoGameCollage} alt='Video Game Collage' />
            </MainSearchSection>
        )
    }

    // }
}

export default MainSearch
