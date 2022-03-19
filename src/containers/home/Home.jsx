import React from "react";
import JobFeature from "../../components/molecules/job-feature";
import CompanyFeatureList from "../../components/organisms/company-feature-list";

const Home = () => {
  const foo = "bar";

  return (
    <div className="container mt-10 px-4 md:px-0 mx-auto">
      {/* <CompanyFeatureList /> */}

      <div className="mt-2 w-full">
        <JobFeature />
      </div>
    </div>
  );
};

export default Home;
