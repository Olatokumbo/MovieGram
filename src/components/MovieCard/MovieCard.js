import React from "react";
import styles from "./MovieCard.module.css";
import { Card, CardContent, Grid, Typography, CardMedia } from "@material-ui/core";
const MovieCard = ({movieInfo}) => {
    const image =(poster_path) =>{
        if(poster_path ==null)
        return `https://www.w3schools.com/w3css/img_lights.jpg`
        else
        return `http://image.tmdb.org/t/p/original${movieInfo.poster_path}`
    }
    const truncate = (text) =>{
        return text.length > 100 ? text.substring(0, 100) + "..." : text;
    }

  if(!movieInfo.title)
  return("Loading...")
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <div className={styles.mainCard}>
                <Grid component={Card} item xs={11} md={12} className={styles.cards}>
                <div className={styles.mainInfo}>
                <CardContent className={styles.content}>
                <Typography gutterBottom>{movieInfo.title}</Typography>
                <Typography variant="subtitle2" color="textSecondary" className={styles.overview}>{truncate(movieInfo.overview)}</Typography>
                <div className={styles.minorInfo}>
                <Typography color="primary">{movieInfo.vote_average}</Typography>
                <Typography variant="body2" >Release Date: {movieInfo.release_date}</Typography>
                </div>
                </CardContent>
                </div>
                <CardMedia
                component="img"
                className={styles.cover}
                image={image(movieInfo.poster_path)}
                />
                </Grid>
                </div>
            </Grid>
        </div>
    );
}

export default MovieCard;