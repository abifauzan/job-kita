import React from "react";
import _isEmpty from "lodash/isEmpty";
import JobFeature from "../../molecules/job-feature";
const JobFeatureList = ({ data, label = "Feature Jobs" }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3>{label}</h3>

      {_isEmpty(data) ? (
        <span>Loading...</span>
      ) : (
        <div className="w-full flex flex-col gap-3">
          {data.map((el) => (
            <JobFeature key={el.id} data={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobFeatureList;
