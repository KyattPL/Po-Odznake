import { useEffect, useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Grid from "@mui/material/Grid";

import fetchStatus from "./utils/fetchStatus";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetchStatus().then((res) => {
            if (res != null) {
                if (res['user_id'] !== 'None') {
                    setIsLoggedIn(true);
                }
            } else {
                console.error("NIE UDAŁO SIĘ POBRAĆ STANU SESJI");
            }
        }).catch(err => console.error(err));
    }, []);

    return (
        <div className="App">
            <Grid container>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Main isLoggedIn={isLoggedIn} />
                <Footer />
            </Grid>
        </div>
    );
}

export default App;