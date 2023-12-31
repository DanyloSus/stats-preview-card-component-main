import React from "react";
import Statistic from "./Statistic";

function Section() {
  return (
    <section>
      <h1 className="anim">
        Get <span>insights</span> that help your business grow.
      </h1>
      <p className="anim">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <div className="statistic anim">
        <Statistic num="10k+" name="companies" />
        <Statistic num="314" name="templates" />
        <Statistic num="12M+" name="queries" />
      </div>
    </section>
  );
}

export default Section;
