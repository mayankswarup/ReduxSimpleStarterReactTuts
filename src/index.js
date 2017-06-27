import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetails';

const API_KEY = 'AIzaSyD9NXJM9Pyftt2gymp_-l2IwxBUL7snFO8';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('pugs');

    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState(
                {
                    videos: videos,
                    selectedVideo: videos[0]
                }); // ES6 equals this.setState({videos: videos});
        });
    }
    render(){
        const videoSearch =  _.debounce((term) => {this.videoSearch(term)}, 300);
        var x = _.chunk([1,2,3,4,5,6], 2);
        console.log(x);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video= {this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div> 
            )    
    }
}


ReactDOM.render(<App />, document.querySelector(".container"));

/*const App = () =>{
    return (
        <div>
        <SearchBar />
    </div>
    );
}*/