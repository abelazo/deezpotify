// import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";

const Header = () => <>
    <AppBar position="static" elevation={0} component="header" color="default">
        <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="caption">Abelazo ©2025</Typography>
        </Toolbar>
    </AppBar>
</>

export default Header;
