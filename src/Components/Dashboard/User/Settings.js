import React from "react";
import "./user.css";

const Settings = () => {
  return (
    <>
      <form className="text-end">
        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            Title
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>
        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            Copyright
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>
        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            Logo
          </label>
          <div className="col-sm-8">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
          <div className="col-sm-2 mt-2 text-start ">
            <svg
              className="w-25 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            Favicon
          </label>
          <div className="col-sm-8">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
          <div className="col-sm-2 mt-2 text-start ">
            <svg
              className="w-25 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            Timezone
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>
        <div className="row py-2 form-border">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              rows="6"
              type="text"
              className="w-100 px-2 my-2"
              id="inputEmail3"
            />
          </div>
        </div>
      </form>
      <div className="row mb-3 ">
        <span for="inputPassword3" className="col-sm-2 col-form-label"></span>
        <div className="col-sm-10">
          <button type="submit" className="btn-green fw-bold  me-4 ">
            Save
          </button>
          <button type="submit" className="btn-red fw-bold ">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
