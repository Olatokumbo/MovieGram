import React from "react";
import {TextField, Button,Grid, Box} from "@material-ui/core";
import styles from "./Search.module.css";
const Search = ({handleSearch}) => {
    const search =(e) => {
        e.preventDefault();
        let value = e.target.elements.search.value;
        handleSearch(value);
    } 
    return (
        <div className={styles.container} >
        <Box>
            <Grid container justify="center"spacing={2} >
                <Grid item xs={10} md={3}>
                <form className={styles.form} onSubmit={search}>
                <TextField name="search" label="Search Movie..." className={styles.search} required/>
                <Button color="primary" variant="contained" type="submit">Search</Button>
                </form>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}

export default Search;