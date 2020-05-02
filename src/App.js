import React from "react";
import {NavBar, Search, Results} from "./components";
import styles from "./App.module.css";
import {fetchMovies} from "./api";
class App extends React.Component{
    state={
        fetchedMovies: []
    }

    handleSearch =async(search) =>{
        const fetchedMovies = await fetchMovies(search);
        this.setState({fetchedMovies: fetchedMovies});
    } 
    render(){
        return(
            <div className={styles.container}>
            <NavBar/>
            <Search handleSearch={this.handleSearch}/>
            <Results fetchedMovies={this.state.fetchedMovies}/>
            </div>
        );
    }
}
export default App;