import { useEffect, useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Grid from "@mui/material/Grid";

import fetchStatus from "./utils/fetchStatus";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const getStatus = () => {
            fetchStatus().then((res) => {
                if (res != null) {
                    if (res['user_id'] !== 'None') {
                        setIsLoggedIn(true);
                    }
                } else {
                    setIsLoggedIn(false);
                }
            }).catch(err => console.error("NIE UDAŁO SIĘ POBRAĆ STANU SESJI!"));
        };
        getStatus();
        let intervalTimer = setInterval(getStatus, 30000);
        return () => { clearInterval(intervalTimer) };
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