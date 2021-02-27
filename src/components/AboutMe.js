import React from "react";
import author from "../me.png";

const AboutMe = () => {
  return (
    <div id="about" className="container about py-5">
      <h1 className="about-heading py-3">about me</h1>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12 py-5 d-flex align-items-center">
          <div>
            <p>Name: Nobuhiro Harada (原田 順啓)</p>
            <p>Home: Shiga Pref (滋賀県)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
