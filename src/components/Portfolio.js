import React from "react";
import blog from "../images/blog.png";
import btimer from "../images/btimer.png";
import bboard from "../images/bboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Blog
  const openPopupboxBlog = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={blog} alt="Blog" />
        <p>個人ブログです。GatsbyJSで作成し、Netlifyに配置しております。</p>
        <b>URL:</b> <a className="hyper-link" onClick={() => window.open("https://www.nobuhiroharada.com/")}>https://www.nobuhiroharada.com/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBlog = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Btimer
  const openPopupboxBtimer = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={btimer} alt="City Guide App Project..." />
        <p>バスケ用のタイマー, ショットクロック, スコアを管理できるアプリです</p>
        <a className="hyper-link" onClick={() => window.open("https://apps.apple.com/jp/app/%E3%83%90%E3%82%B9%E3%82%B1%E3%81%AE%E8%A9%A6%E5%90%88%E5%B0%82%E7%94%A8%E3%81%AE%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-b-timer/id1436460277?mt=8", "_blank")}>AppStoreへ</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Bboard
  const openPopupboxBboard = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={bboard} alt="Portfolio Project..." />
        <p>バスケ専用の作戦版です。</p>
        <a className="hyper-link" onClick={() => window.open("https://apps.apple.com/jp/app/%E3%83%90%E3%82%B9%E3%82%B1%E4%BD%9C%E6%88%A6%E7%9B%A4-%E7%AF%AE%E7%90%83%E6%88%98%E7%95%A5-basketballboard/id1425747210?mt=8", "_blank")}>AppStoreへ</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBboard = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxBlog}>
            <img className="portfolio-image" src={blog} alt="Blog" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxBtimer}>
            <img className="portfolio-image" src={btimer} alt="Btimer" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxBboard}>
            <img className="portfolio-image" src={bboard} alt="Bboard" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigBlog} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigBboard} />
    </div>
  )
}

export default Pofrfolio;
