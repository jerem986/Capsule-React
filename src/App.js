import { Container, CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom"
import Footer from "./containers/footer/footer";
import Header from "./containers/header/header";
import { appRoute } from "./route"

function App() {
  const router = useRoutes(appRoute)

  return (
    <>
      <CssBaseline/> {/*reset du css*/}
      <Header/>
      <Container>
      {router}
      </Container>
      <Footer/>
    </>
  );
}

export default App;
