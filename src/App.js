import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import RemoteListPage from "./pages/remote-list";
import CompanyListPage from "./pages/company-list";
import Layout from "./components/templates/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/remotes" element={<RemoteListPage />} />
        <Route path="/companies" element={<CompanyListPage />} />
        {/* <Route component={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
