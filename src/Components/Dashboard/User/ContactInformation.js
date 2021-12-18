import React from "react";

const ContactInformation = () => {
  return (
    <>
      <form className="text-end">
       
        <div className="row py-2 ">
          <label
            for="inputEmail3"
            className="col-sm-2 col-form-label  fw-bold "
          >
            Webmaster Email
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
            Contact form email
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
            Phone
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
            Support
          </label>
          <div className="col-sm-10">
            <input type="text" className="w-100 px-2 my-2" id="inputEmail3" />
          </div>
        </div>
        <hr className="mb-4" />
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

export default ContactInformation;
