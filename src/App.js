import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import RemoteListPage from "./pages/remote-list";
import CompanyListPage from "./pages/company-list";
import Layout from "./components/templates/Layout";
import JobDetailpage from "./pages/job-detail";
import JobListPage from "./pages/job-list";
import SearchListPage from "./pages/search-list";
import JobPostPage from "./pages/job-post";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/remotes" element={<JobListPage />} />
        <Route path="/companies" element={<CompanyListPage />} />
        <Route path="/:companySlug/:jobSlug" element={<JobDetailpage />} />
        <Route path="/search" element={<SearchListPage />} />
        <Route path="/post" element={<JobPostPage />} />

        {/* <Route component={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
