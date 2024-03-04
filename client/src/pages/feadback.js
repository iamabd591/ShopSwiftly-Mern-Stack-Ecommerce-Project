import React from "react";
import Layout from "../components/layout/Layout";

function feadback() {
  return (
    <div>
      <Layout>
        <div className="feadback-main">
          <div className="feaback-form">
            <form method="post" action="#">
              <h2>Feadback</h2>
              <div className="input-field">
                <label>Name</label>
                <input
                  type="name"
                  placeholder="Enter Your Name"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Eamil"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="message">
                <label>Message</label>
                <textarea cols={125} rows={10} required />
              </div>

              <div className="feadback-btn">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default feadback;
