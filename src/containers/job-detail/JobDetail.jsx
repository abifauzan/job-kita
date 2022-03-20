import React, { useState, useEffect, useCallback, useMemo } from "react";
import _isEmpty from "lodash/isEmpty";

import { useParams } from "react-router-dom";
import JobDetailCard from "../../components/molecules/job-detail-card/JobDetailCard";
import { getJobDetail } from "./JobDetail.query";
import { apiRequest } from "../../configs/graphql";
import { NO_IMAGE_URL } from "../../utils/constant";

const JobDetail = () => {
  const { companySlug, jobSlug } = useParams();

  const [data, setData] = useState({});

  const queryVariables = useMemo(() => {
    return {
      companySlug,
      jobSlug,
    };
  }, [companySlug, jobSlug]);

  const fetchData = useCallback(async () => {
    const response = await apiRequest(getJobDetail, queryVariables);

    if (!_isEmpty(response)) {
      const {
        cities = [],
        commitment,
        description,
        postedAt,
        company,
        slug,
        tags = [],
        title,
      } = response?.job || {};

      const mappedData = {
        cities: cities?.map((el) => el.name),
        commitment: commitment.title,
        description,
        company: {
          name: company?.name || "N/A",
          logoUrl: company?.logoUrl || NO_IMAGE_URL,
          slug: company?.slug,
        },
        postedAt,
        slug,
        title,
        tags:
          tags
            ?.map((tag) => ({
              key: tag.slug,
              value: tag.name,
            }))
            .filter((_, index) => index <= 2) || [],
      };

      setData(mappedData);
    }
  }, [queryVariables]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div>{_isEmpty(data) ? <span>Loading...</span> : <JobDetailCard data={data} />}</div>;
};

export default JobDetail;
