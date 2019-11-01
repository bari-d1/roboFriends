import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundaries'

class App extends Component {
    constructor() {
        super() 
        this.state = {
            robots: [],
            searchField: ''
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json()) 
    .then(users => this.setState({robots: users}))
        
}

onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
}

render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })  
        return !robots.length ?
        <p id ='loading'>Loading...</p> :              
        (
        <div  className= 'tc, main'>
        <div id='sticky'>
        <h1>Robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange } />        
        </div>      
        <div id = 'cardlist'>
            <ErrorBoundary>
                <CardList robots={filteredRobots}/> 
            </ErrorBoundary>
            
        </div>
                       

        </div>
    );        
    }

}

export default App;