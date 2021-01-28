import React from 'react';
import VideoGameCollage from "./VideoGameCollage.jpg"
import { Form, SearchBar, SearchBtn, SearchBtnLink, MainImage, MainSearchSection } from "./MainSearchElements";
import { render } from '@testing-library/react';

class MainSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        this.fetchStuff();
        event.preventDefault();
    }

    componentDidMount() {
        fetch("https://id.twitch.tv/oauth2/authorize?client_id=codnvs49gx7ivbo5877zm1bv595q49&redirect_uri=http://localhost:3000&response_type=token")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
                console.log("here is result");
                console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
            
    }
    
    fetchStuff() {
        fetch("https://id.twitch.tv/oauth2/authorize?client_id=codnvs49gx7ivbo5877zm1bv595q49&redirect_uri=http://localhost&response_type=token")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                    console.log("here is result");
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
                        autofocus="autofocus"
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
