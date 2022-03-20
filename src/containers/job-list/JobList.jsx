import React, { useState, useEffect, useCallback, useMemo } from "react";
import _isEmpty from "lodash/isEmpty";

import JobDetailCard from "../../components/molecules/job-detail-card/JobDetailCard";
import { getJobList } from "./JobList.query";
import { apiRequest } from "../../configs/graphql";
import { NO_IMAGE_URL } from "../../utils/constant";
import JobFeatureList from "../../components/organisms/job-feature-list/JobFeatureList";

const JobList = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await apiRequest(getJobList);

    if (!_isEmpty(response)) {
      const mappedData = response.jobs
        .map((el) => ({
          id: el?.id,
          title: el?.title || "N/A",
          company: {
            name: el?.company?.name || "N/A",
            logoUrl: el?.company?.logoUrl || NO_IMAGE_URL,
            slug: el?.company?.slug,
          },
          isFeatured: el?.isFeatured || false,
          slug: el?.slug || "-",
          postedAt: el?.postedAt || "N/A",
          commitment: el?.commitment.title,
          tags:
            el?.tags
              ?.map((tag) => ({
                key: tag.slug,
                value: tag.name,
              }))
              .filter((_, index) => index <= 2) || [],
        }))
        .filter((el) => !el.isFeatured);

      setData(mappedData);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.info(data);

  return (
    <div>
      <JobFeatureList label="Related Job Postings" data={data} />
    </div>
  );
};

export default JobList;
