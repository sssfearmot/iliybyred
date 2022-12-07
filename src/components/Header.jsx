import React from "react";
import "./header.scss";
import { ReactComponent as Search } from '../assets/ico-search.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <h1 className="logo"><a href=""><span className="blind">릴리바이레드</span></a></h1>
        <div className="util-area">
          <a href="" className="btn-search">
            <span className="blind">검색</span>
            <Search />
          </a>
          <a href="" className="btn-menu">
            <div className="bar-wrap">
              <i className="bar"></i>
              <i className="bar"></i>
              <i className="bar"></i>
            </div>
            <span className="blind">매뉴 열기</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header