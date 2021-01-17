import React from 'react';
import VideoGameCollage from "./VideoGameCollage.jpg"
import{Form, SearchBar, SearchBtn, SearchIcon, MainImage, MainSearchSection} from "./MainSearchElements";

const MainSearch = () => {
    return (
        <MainSearchSection>
            <Form>
            <h2>Start searching for your next game now.</h2>
                <SearchBar type="text" placeholder="Search..."/>
                <SearchBtn>
                    <SearchIcon/>
                </SearchBtn>
            </Form>
       
            <MainImage src={VideoGameCollage} alt ='Video Game Collage' />
        </MainSearchSection>
    )
}

export default MainSearch
