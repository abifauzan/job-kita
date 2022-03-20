import React, { useCallback, useEffect, useMemo, useState } from "react";
import _isEmpty from "lodash/isEmpty";

import { getJobByCity } from "./SearchList.query";
import { getJobList } from "../job-list/JobList.query";
import { apiRequest } from "../../configs/graphql";
import { NO_IMAGE_URL } from "../../utils/constant";
import JobFeatureList from "../../components/organisms/job-feature-list/JobFeatureList";
import { useLocation } from "react-router-dom";
import qs from "query-string";

const mapData = (arr) => {
  return arr.map((el) => ({
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
  }));
};

const SearchList = () => {
  const [data, setData] = useState(undefined);
  const location = useLocation();
  const { pathname, search } = location;

  const queryParams = useMemo(() => {
    return qs.parse(search, {
      parseNumbers: true,
    });
  }, [search]);

  const fetchData = useCallback(async () => {
    let response = [];

    if (queryParams.by === "role") {
      const parsedQuery = queryParams.q.toLowerCase();
      response = await apiRequest(getJobList);
      if (!_isEmpty(response)) {
        const filteredData = response?.jobs?.filter((el) => {
          const parsedTitle = el.title.toLowerCase();
          return parsedTitle.includes(parsedQuery);
        });
        const mappedData = mapData(filteredData);
        setData(mappedData);
      }
    } else {
      const parsedQuery = queryParams.q.replace(" ", "-").toLowerCase();
      response = await apiRequest(getJobByCity, { slug: parsedQuery });

      if (!_isEmpty(response)) {
        const mappedData = mapData(response?.jobs);
        setData(mappedData);
      }
    }
  }, [queryParams]);

  useEffect(() => {
    fetchData();

    return () => {
      setData(undefined);
    };
  }, [fetchData]);

  return (
    <div>
      <JobFeatureList label={`Related Job of: ${queryParams.q}`} data={data} />
    </div>
  );
};

export default SearchList;
