import React from "react";
import JobFeature from "../../molecules/job-feature";
import { jobs } from "./mockData";

const JobFeatureList = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3>Feature Jobs</h3>

      <div className="w-full flex flex-col gap-3">{/* {jobs.map()} */}</div>
    </div>
  );
};

export default JobFeatureList;
