import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './searchBar'
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: [] };

    onSearchBarSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results });


        /*////////////////////////////////////////////////////////////////////////////////////////////////////////
        ||          Another method for geting the response from axios.get()                                     ||
        ||        ------------------------------------------------------------                                  ||
        ||       onSearchBarSubmit = async term =>{                                                             ||
        ||          const response= await axios.get('https://api.unsplash.com/search/photos', {                 ||
        ||              params: { query: term },                                                                ||
        ||              headers: { Authorization: 'Client-ID hlgw3Cy5QUOmlAG4-B0NOjVJwtCBE9DIMAkClfXuUzE' }     ||
        ||          });                                                                                         ||
        ||                                                                                                      ||
        ||          this.setState({ images: response.data.results });                                           ||
        ||       }                                                                                              ||
        ||                                                                                                      ||
        ////////////////////////////////////////////////////////////////////////////////////////////////////////*/





    }



    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearch={this.onSearchBarSubmit}></SearchBar>
                <ImageList image={this.state.images}></ImageList>
            </div>
        );
    }
}

export default App;