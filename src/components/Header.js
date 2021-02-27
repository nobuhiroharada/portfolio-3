import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>nobuhiroharada's portfolio</h1>
        <Typed
          className="typed-text"
          strings={["PHP", "JavaScript", "Laravel", "Swift"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  )
}

export default Header;
