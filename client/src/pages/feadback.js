import React from "react";
import Layout from "../components/layout/Layout";

function Feedback() {
  return (
    <Layout>
      <div className="feadback-main">
        <div className="feaback-form">
          <form method="post" action="#">
            <h2>Feedback</h2>
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                required
                autoComplete="off"
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                required
                autoComplete="off"
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols={125}
                rows={10}
                placeholder="Enter Your Message"
                required
              />
            </div>

            <div className="feadback-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Feedback;
