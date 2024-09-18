import React from "react";

export default function FeedBack() {
  return (
    <>
      <div className="container-fluid my-3 border">
        <div className="row">
          <div className="col-12 flex-col">
            <form className=" container border border-success p-3">
              <div className="text-center my-3">
                <h5 className="text-success">FeedBack Form</h5>
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label col-4 text-end ms-3"
                >
                  <strong>Enter Name:</strong>
                </label>
                <input
                  type="text"
                  class="col-4"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Login name"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label col-4 text-end ms-3"
                >
                  <strong>Password:</strong>
                </label>
                <input
                  type="password"
                  class="col-4"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label col-4 text-end ms-3"
                >
                  <strong>FeedBack:</strong>
                </label>
                <input
                  type="text"
                  class="col-4"
                  id="exampleInputPassword1"
                  placeholder="Text here"
                />
              </div>

              <div className="text-center">
                <button type="submit" class="btn btn-success mb-2">
                  Send FeedBack
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
