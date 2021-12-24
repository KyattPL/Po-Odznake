import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Grid container>
          <Header />
          <Main />
          <Footer />
      </Grid>
    </div>
  );
}

export default App;