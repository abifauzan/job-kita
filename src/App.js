import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/organisms/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <MainLayout>
            <Switch>
              <Route path='/' component={Landing} exact />
              <Route path='/movie/:name' component={MovieList} exact />
              <Route path='/movie/:name/detail' component={MovieDetail} exact />
              <Route component={NotFound} />
            </Switch> 
        </MainLayout> */}
    </Router>
  );
}

export default App;
