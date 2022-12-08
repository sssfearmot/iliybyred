import React from "react";
import "./footer.scss";
import { ReactComponent as There } from "../assets/ico-there.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="inner">
                <div className="footer-top">
                    <nav className="menu-area">
                        <ul className="menu-list">
                            <li className="menu-item"><a href="">스토어</a></li>
                            <li className="menu-item"><a href="">스토리</a></li>
                            <li className="menu-item"><a href="">이벤트</a></li>
                            <li className="menu-item"><a href="">커뮤니티</a></li>
                        </ul>
                    </nav>
                    <div className="group-area">
                        <div className="sns-box">
                            <a href="" className="facebook"><i className="fa-brands fa-facebook-f"></i><span className="blind">페이스북</span></a>
                            <a href="" className="youtube"><i className="fa-brands fa-youtube"></i><span className="blind">유튜브</span></a>
                            <a href="" className="instagram"><i className="fa-brands fa-instagram"></i><span className="blind">인스타그램</span></a>
                        </div>
                        <div className="alarm-box">
                            <span className="txt">push alarm !</span>
                            <There />
                            <div className="switch">
                                <span className="circle"></span>
                                <span className="txt">OFF</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <address className="corp-area">
                        <p>
                            <span>주식회사 디와이디</span>
                            <span>대표: 정창래</span>
                            <span>사업자등록번호: 595-81-00040</span>
                        </p>
                        <p>
                            <span>주소: 경기도 고양시 덕양구 동송로 30 제엠비엔스튜디어동 18층 1805호</span>
                            <span>제품고객센터: 1566-1696</span>
                        </p>
                    </address>
                    <div className="copy-area">
                        <span>Copyright © lilybyred. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer