import React from "react";

function AddStandard() {
  return (
    <>
      <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
        <div className="form_container rounded bg-white w-100 my-1 ms-1">
          <div className="row">
            <div className="d-flex justify-content-center bg-primary w-100">
              <h5 className="text-center mb-2 my-1 ">Add Standard</h5>
            </div>

            <div className="col-12 d-flex-col p-2 ">
              <div className="form-group d-flex p-3 row">
                <label
                  htmlFor="addStandard"
                  className="form-label col-4 text-end"
                >
                  <strong>Add Standard:</strong>
                </label>
                <input type="text" className="form-controls col-8" />
              </div>
              <div className="text-center p-2">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddStandard;
