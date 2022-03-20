import React from "react";
import _isEmpty from "lodash/isEmpty";
import JobFeature from "../../molecules/job-feature";
const JobFeatureList = ({ data, label = "Feature Jobs" }) => {
  console.info(data);
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3>{label}</h3>

      {data === undefined ? (
        <span>Loading...</span>
      ) : (
        <>
          {data.length > 0 ? (
            <div className="w-full flex flex-col gap-3">
              {data.map((el) => (
                <JobFeature key={el.id} data={el} />
              ))}
            </div>
          ) : (
            <span>Data not found...</span>
          )}
        </>
      )}
    </div>
  );
};

export default JobFeatureList;
