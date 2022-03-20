import React, { useState, useEffect, useCallback } from "react";
import _isEmpty from "lodash/isEmpty";
import Button from "../../components/atoms/Button";
import { apiRequest } from "../../configs/graphql";
import { getCommitmentListQuery, postJobQuery } from "./JobPost.query";

const initialState = {
  applyUrl: "",
  commitmentId: "",
  companyName: "",
  description: "",
  locationNames: "",
  title: "",
  userEmail: "",
};

const JobPost = () => {
  const [inputData, setInputData] = useState(initialState);
  const [commitments, setCommitments] = useState([]);
  const [errorInput, setErrorInput] = useState({});
  const [hasPosted, setHasPosted] = useState(false);

  const fetchCommitment = useCallback(async () => {
    const response = await apiRequest(getCommitmentListQuery);

    if (!_isEmpty(response)) {
      setCommitments(response?.commitments);
    }
  }, []);

  const handleChange = (input, type) => {
    setInputData({
      ...inputData,
      [type]: input,
    });
    setErrorInput({ ...errorInput, [type]: null });
  };

  const validate = () => {
    const tempErr = {};

    // VALIDATION: REQUIRED
    for (let i = 0; i < Object.keys(inputData).length; i++) {
      const key = Object.keys(inputData)[i];

      const isRequired =
        inputData[key] === null ||
        inputData[key] === "" ||
        inputData[key] === "null" ||
        inputData[key] === undefined;

      if (isRequired) {
        tempErr[key] = `${key} is required !`;
      }
    }

    // console.info(tempErr);

    setErrorInput({ ...errorInput, ...tempErr });
    if (Object.keys(tempErr).length !== 0) {
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const payload = {
        title: inputData.title,
        commitmentId: inputData.commitmentId,
        companyName: inputData.companyName,
        locationNames: inputData.locationNames,
        userEmail: inputData.userEmail,
        description: inputData.description,
        applyUrl: inputData.applyUrl,
      };

      const response = await apiRequest(postJobQuery, payload);

      if (!_isEmpty(response)) {
        setHasPosted(true);
        setInputData(initialState);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    fetchCommitment();

    return () => {
      setInputData(initialState);
      setCommitments([]);
      setHasPosted(false);
    };
  }, [fetchCommitment]);

  return (
    <div>
      <h3 className="font-bold text-lg mb-3">let's Create a Job Posting</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={inputData.title}
            onChange={(e) => handleChange(e.target.value, "title")}
          />
          <label
            htmlFor="title"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Title
          </label>
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errorInput?.title}</p>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={inputData.userEmail}
            onChange={(e) => handleChange(e.target.value, "userEmail")}
          />
          <label
            htmlFor="userEmail"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errorInput?.userEmail}</p>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={inputData.companyName}
              onChange={(e) => handleChange(e.target.value, "companyName")}
            />
            <label
              htmlFor="companyName"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company Name
            </label>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errorInput?.companyName}</p>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="locationNames"
              id="locationNames"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={inputData.locationNames}
              onChange={(e) => handleChange(e.target.value, "locationNames")}
            />
            <label
              htmlFor="locationNames"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errorInput?.locationNames}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="applyUrl"
              id="applyUrl"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={inputData.applyUrl}
              onChange={(e) => handleChange(e.target.value, "applyUrl")}
            />
            <label
              htmlFor="applyUrl"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Application form URL
            </label>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errorInput?.applyUrl}</p>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            {commitments.length === 0 ? (
              <span>Loading...</span>
            ) : (
              <>
                <select
                  id="commitmentId"
                  name="commitmentId"
                  value={inputData.commitmentId}
                  onChange={(e) => handleChange(e.target.value, "commitmentId")}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  <option value={""}>Choose</option>
                  {commitments.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.title}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="job_type"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Job Type
                </label>
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errorInput?.commitmentId}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <textarea
            name="description"
            id="description"
            rows="4"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={inputData.description}
            onChange={(e) => handleChange(e.target.value, "description")}
          ></textarea>
          <label
            htmlFor="description"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Description
          </label>
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errorInput?.description}</p>
        </div>
        <Button mode="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>

      {hasPosted && (
        <div
          class="p-4 my-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          <span class="font-medium">👋 👋 👋</span>
          <br />
          You have successfully posted your job! I will publish it and email you over the next 24
          hours.
        </div>
      )}
    </div>
  );
};

export default JobPost;
