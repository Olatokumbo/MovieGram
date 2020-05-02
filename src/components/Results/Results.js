import React from "react";
import {MovieCard} from "../";
import styles from "./Results.module.css";
const Results = ({fetchedMovies}) => {
    return(
        <div className={styles.container}>
        {fetchedMovies.map((data) => (<MovieCard key={data.id} movieInfo={data}/>))}
        </div>
    );
}

export default Results;