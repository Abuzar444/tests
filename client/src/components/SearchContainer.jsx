import React from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, Link, useSubmit } from "react-router-dom";
import FormRow from "./FormRow";

const sorts = {
  NEWEST: "newest",
  OLDEST: "oldest",
  ASCENDING: "a-z",
  DESCENDING: "z-a",
};

const SearchContainer = ({ data, params }) => {
  const { search, sort } = params;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timer;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timer);
      timer = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            required={false}
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <div className="form-row">
            <label htmlFor="sort" className="form-label">
              Sort
            </label>
            <select
              name="sort"
              id="sort"
              className="form-select"
              defaultValue={sort}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            >
              {Object.values(sorts).map((s) => {
                return (
                  <option key={s} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
          </div>
          <Link
            to="/dashboard/all-exercises"
            className="btn form-btn delete-btn"
          >
            Reset
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
