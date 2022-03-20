import React, { useEffect, useState } from "react";
import _isEmpty from "lodash/isEmpty";

import Button from "../../components/atoms/Button";
import JobFeatureList from "../../components/organisms/job-feature-list/JobFeatureList";
import { apiRequest } from "../../configs/graphql";
import { getJobFeatureQuery } from "./Home.query";
import { NO_IMAGE_URL } from "../../utils/constant";
import { parseDate } from "../../utils/helper";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await apiRequest(getJobFeatureQuery);

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
          postedAt: parseDate(el?.postedAt) || "N/A",
          commitment: el?.commitment.title,
          tags:
            el?.tags
              ?.map((tag) => ({
                key: tag.slug,
                value: tag.name,
              }))
              .filter((_, index) => index <= 2) || [],
        }))
        .filter((el) => el.isFeatured);

      setData(mappedData);
    }

    // return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-2 w-full">
        <JobFeatureList data={data} />

        <div className="w-full text-center my-4">
          <Button className="w-full md:w-1/4 mx-0">More Jobs</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
