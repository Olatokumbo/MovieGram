import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={styles.container}>
        <AppBar position="fixed">
            <Toolbar className={styles.toolbar}>
                <Typography variant="h6">
                    MovieGram
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default NavBar;