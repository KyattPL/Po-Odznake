import { useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Grid from "@mui/material/Grid";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [accessToken, setAccessToken] = useState(null);

    return (
        <div className="App">
            <Grid container>
                <Header isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
            </Grid>
        </div>
    );
}

export default App;