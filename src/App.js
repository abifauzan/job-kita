import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import RemoteListPage from "./pages/remote-list";
import CompanyListPage from "./pages/company-list";
import Layout from "./components/templates/Layout";
import JobDetailpage from "./pages/job-detail";
import JobListPage from "./pages/job-list";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/remotes" element={<JobListPage />} />
        <Route path="/companies" element={<CompanyListPage />} />
        <Route path="/:companySlug/:jobSlug" element={<JobDetailpage />} />

        {/* <Route component={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
