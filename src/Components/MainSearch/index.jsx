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


    }

    getGames() {
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
                <h3>Start searching for your next game now.</h3>
                <Form onSubmit={this.handleSubmit}>
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
            </MainSearchSection>
        )
    }

    // }
}

export default MainSearch
