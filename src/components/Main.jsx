import React from "react";
import "./main.scss";
import _Home from "./function/Home";

import { ReactComponent as Star } from '../assets/ico-star.svg'



const Main = () => {

    return (
        <div classNameName="container">
            <div className="bg-wrapper">
                <div className="bg"></div>
                <section className="sc-visual">
                    <h2 className="blind">메인 비주얼 영역</h2>
                    <div className="visual-typo">
                        <div className="fill-text">
                            <p><span className="transparent">SASS</span>Y!</p>
                            <div className="rolling-text">
                                <p className="turn">LILL<span className="transparent">Y!</span></p>
                                <p className="tone">SASS<span className="transparent">Y!</span></p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 의미 없으면 css로 처리하기 --> */}
                    <div className="visual-figure">
                        {/* <!-- <img src="./assets/images/bg-smile.svg" alt=""> --> */}
                    </div>
                    <div className="group-flex">
                        <div className="visual-left">
                            <div className="swiper">
                                <ul className="slide-list swiper-wrapper">
                                    <li className="swiper-slide slide-item">
                                        <a href="">
                                            <div className="img-box">
                                                <img src={require('../assets/visual-slide1.jpeg')} />
                                                {/* <img src="./assets/images/visual-slide1.jpeg" alt="슬라이드 이미지1"> */}
                                            </div>
                                            {/* <!-- @@@ span으로 처리 --> */}
                                            <div className="text-box">
                                                <h3 className="title">
                                                    <p>NEW</p>
                                                    <p>LITTLE BITTY</p>
                                                    <p>MOMENT</p>
                                                </h3>
                                                <p className="desc">
                                                    <span>매 순간 찬란하게 빛나는 당신을 닮은</span>
                                                    <span>2구 팔레트 리틀비티모먼트 출시</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="swiper-slide slide-item">
                                        <a href="">
                                            <div className="img-box">
                                                <img src={require('../assets/visual-slide2.jpeg')} />
                                                {/* <img src="./assets/images/visual-slide2.jpeg" alt="슬라이드 이미지2"> */}
                                            </div>
                                            <div className="text-box">
                                                <h3 className="title">
                                                    <p>GLASSY</p>
                                                    <p>LAYER FIXING TINT</p>
                                                    <p>NEW COLOR</p>
                                                </h3>
                                                <p className="desc">
                                                    <span>탁함 없이 본연의 자연스러움처럼</span>
                                                    <span>피어나는 혈색 무드</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="swiper-slide slide-item">
                                        <a href="">
                                            <div className="img-box">
                                                <img src={require('../assets/visual-slide3.jpeg')} />
                                                {/* <img src="./assets/images/visual-slide3.jpeg" alt="슬라이드 이미지3"> */}
                                            </div>
                                            <div className="text-box">
                                                <h3 className="title">
                                                    <span>YENA'S PICK</span>
                                                    <span>MOOD LIAR BELBET TINT</span>
                                                </h3>
                                                <p className="desc">
                                                    <span>모태 분위기 여신인 척,</span>
                                                    <span>무드 있는 거짓입술 벨벳틴트</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="swiper-slide slide-item">
                                        <a href="">
                                            <div className="img-box">
                                                <img src={require('../assets/visual-slide4.jpeg')} />
                                                {/* <img src="./assets/images/visual-slide4.jpeg" alt="슬라이드 이미지4"> */}
                                            </div>
                                            <div className="text-box">
                                                <h3 className="title">
                                                    <span>NEW</span>
                                                    <span>SMLIEY AEGYOSAL</span>
                                                    <span>EYELINER</span>
                                                </h3>
                                                <p className="desc">
                                                    <span>버터처럼 부드럽게 놀아들어</span>
                                                    <span>웃음기 어린 애교살 연출</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="slide-controller">
                                    <button className="btn-set prev"><span className="blind">이전</span></button>
                                    <div className="count">
                                    </div>
                                    <button className="btn-set next"><span className="blind">다음</span></button>
                                </div>
                                <div className="swiper-progress-bar">
                                </div>
                            </div>
                        </div>
                        <div className="visual-right evnet">
                            <ul className="event-list">
                                <li className="event-item">
                                    <a href="" className="cont">
                                        <div className="thumb">
                                            <div className="img-box">
                                                <img src={require('../assets/event-thumb1.jpeg')} />
                                                {/* <img src="./assets/images/event-thumb1.jpeg" alt="릴리바이레드 멤버십 혜택"> */}

                                            </div>
                                            <div className="post">
                                                <p>lilybyred event ~22-07-29</p>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="title">릴리바이레드 멤버십 혜택</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="event-item">
                                    <a href="" className="cont">
                                        <div className="thumb">
                                            <div className="img-box">
                                                <img src={require('../assets/event-thumb2.jpeg')} />
                                                {/* <img src="./assets/images/event-thumb2.jpeg" alt="워터프루프 1+1 이벤트"> */}
                                            </div>
                                            <div className="post">
                                                <p>lilybyred event ~22-07-27</p>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="title">워터프루프 1+1 이벤트</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="event-item">
                                    <a href="" className="cont">
                                        <div className="thumb">
                                            <div className="img-box">
                                                <img src={require('../assets/event-thumb3.jpeg')} />
                                                {/* <img src="./assets/images/event-thumb3.jpeg" alt="스마일리 애교살 라이너 런칭 이벤트"> */}
                                            </div>

                                            <div className="post">
                                                <p>lilybyred event ~22-07-25</p>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="title">스마일리 애교살 라이너 런칭 이벤트</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="event-item">
                                    <a href="">
                                        <div className="thumb">
                                            <div className="img-box">
                                                <img src={require('../assets/event-thumb4.jpeg')} />
                                                {/* <img src="./assets/images/event-thumb4.jpeg" alt="친구 추천 적립금 이벤트"> */}
                                            </div>
                                            <div className="post">
                                                <p>lilybyred event ~22-07-22</p>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="title">친구 추천 적립금 이벤트</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="event-item">
                                    <a href="">
                                        <div className="thumb">
                                            <div className="img-box">
                                                <img src={require('../assets/event-thumb5.jpeg')} />
                                                {/* <img src="./assets/images/event-thumb5.jpeg" alt="스마일리 애교살 라이너 뷰티테스터"> */}
                                            </div>
                                            <div className="post">
                                                <p>lilybyred event ~22-07-21</p>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="title">스마일리 애교살 라이너 뷰티테스터</h3>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>
                <section className="sc-product">
                    <div className="rolling-area">
                        <div className="text">
                            <span>lily! cheeky! sassy! </span>
                            <span>lily! cheeky! sassy! </span>
                        </div>
                        <div className="text">
                            <span>lily! cheeky! sassy! </span>
                            <span>lily! cheeky! sassy! </span>
                        </div>
                    </div>
                    <div className="inner">
                        <h2 className="sc-title">릴리바이레드가 선보이는 베스트 아이템</h2>
                        <div className="swiper best-slide">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a href="">
                                        <div className="img-box">
                                            <img src={require('../assets/product1.jpeg')} />
                                            {/* <img src="./assets/images/product1.jpeg" alt="릴리바이레드 스마일리 애교살 라이너"> */}
                                        </div>
                                        <div className="hover-img-box">
                                            <img src={require('../assets/product-hover1.jpeg')} />
                                            {/* <img src="./assets/images/product-hover1.jpeg" alt="릴리바이레드 스마일리 애교살 라이너"> */}
                                        </div>
                                        <div className="badge-box">
                                            <div className="badge heroes">
                                                <span>yena's pick</span>
                                                <img src={require('../assets/ico-pink.png')} />
                                                {/* <img src="./assets/images/ico-pink.png" alt=""> */}
                                            </div>
                                            {/* <!-- new에 클래스  --> */}
                                            <div className="badge new">
                                                <span>new</span>
                                                <Star />;
                                                {/* <img src="./assets/images/ico-star.svg" alt="별 아이콘"> */}
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <h3>스마일리 애교살 라이너</h3>
                                        </div>
                                    </a>
                                    <div className="desc-area">
                                        <div className="tag-box">
                                            <span>#예나픽</span>
                                            <span>#신상</span>
                                            <span>#애교살라이너</span>
                                        </div>
                                        <div className="price-box">
                                            <strong className="discount-rate">26%</strong>
                                            <em className="discount-price">8,100<span>WON</span></em>
                                            <p className="cost">11,000<span>WON</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <a href="">
                                        <div className="img-box">
                                            <img src={require('../assets/product2.jpeg')} />
                                            {/* <img src="./assets/images/product2.jpeg" alt="글래시 레이어 픽싱 틴트"> */}
                                        </div>
                                        <div className="hover-img-box">
                                            <img src={require('../assets/product-hover2.jpeg')} />
                                            {/* <img src="./assets/images/product-hover2.jpeg" alt="글래시 레이어 픽싱 틴트"> */}
                                        </div>
                                        <div className="badge-box">
                                            <div className="badge new">
                                                <span>new</span>
                                                <Star />;
                                                {/* <img src="./assets/images/ico-star.svg" alt="별 아이콘"> */}
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <h3>글래시 레이어 픽싱 틴트</h3>
                                        </div>
                                    </a>
                                    <div className="desc-area">
                                        <div className="tag-box">
                                            <span>#커밍업로즈 에디션</span>
                                            <span>#신상</span>
                                            <span>#글로시틴트</span>
                                        </div>
                                        <div className="price-box">
                                            <strong className="discount-rate">25%</strong>
                                            <em className="discount-price">7,500<span>WON</span></em>
                                            <p className="cost">10,000<span>WON</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <a href="">
                                        <div className="img-box">
                                            <img src={require('../assets/product3.jpeg')} />
                                            {/* <img src="./assets/images/product3.jpeg" alt="리틀 비티 모먼트 섀도우"> */}
                                        </div>
                                        <div className="hover-img-box">
                                            <img src={require('../assets/product-hover3.jpeg')} />
                                            {/* <img src="./assets/images/product-hover3.jpeg" alt="리틀 비티 모먼트 섀도우"> */}
                                        </div>
                                        <div className="badge-box">
                                            <div className="badge heroes">
                                                <span>yena's pick</span>
                                                <img src={require('../assets/ico-pink.png')} />
                                                {/* <img src="./assets/images/ico-pink.png" alt=""> */}
                                            </div>
                                            {/* <!-- new에 클래스  --> */}
                                            <div className="badge new">
                                                <span>new</span>
                                                <Star />;
                                                {/* <img src="./assets/images/ico-star.svg" alt="별 아이콘"> */}
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <h3>리틀 비티 모먼트 섀도우</h3>
                                        </div>
                                    </a>
                                    <div className="desc-area">
                                        <div className="tag-box">
                                            <span>#5가지 컬러</span>
                                            <span>#섀도우</span>
                                            <span>#퍼스널컬러대통합</span>
                                        </div>
                                        <div className="price-box">
                                            <strong className="discount-rate">30%</strong>
                                            <em className="discount-price">6,900<span>WON</span></em>
                                            <p className="cost">9,900<span>WON</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <a href="">
                                        <div className="img-box">
                                            <img src={require('../assets/product4.jpeg')} />
                                            {/* <img src="./assets/images/product4.jpeg" alt="나인투나인 서바이벌 컬러카라"> */}
                                        </div>
                                        <div className="hover-img-box">
                                            <img src={require('../assets/product-hover4.jpeg')} />
                                            {/* <img src="./assets/images/product-hover4.jpeg" alt="나인투나인 서바이벌 컬러카라"> */}
                                        </div>
                                        <div className="badge-box">
                                            <div className="badge heroes">
                                                <span>yena's pick</span>
                                                <img src={require('../assets/ico-pink.png')} />
                                                {/* <img src="./assets/images/ico-pink.png" alt=""> */}
                                            </div>
                                            {/* <!-- new에 클래스  --> */}
                                            <div className="badge new">
                                                <span>new</span>
                                                <Star />;
                                                {/* <img src="./assets/images/ico-star.svg" alt="별 아이콘"> */}
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <h3>나인투나인 서바이벌 컬러카라</h3>
                                        </div>
                                    </a>
                                    <div className="desc-area">
                                        <div className="tag-box">
                                            <span>#마스카라</span>
                                            <span>#그윽카라</span>
                                            <span>#워터프루프</span>
                                        </div>
                                        <div className="price-box">
                                            <strong className="discount-rate">20%</strong>
                                            <em className="discount-price">8,800<span>WON</span></em>
                                            <p className="cost">11,000<span>WON</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="sc-story">
                <div className="bubble-area">
                    <i className="bubble bubble-01" data-speed="-9"></i>
                    <i className="bubble bubble-02" data-speed="-3"></i>
                    <i className="bubble bubble-03" data-speed="5"></i>
                    <i className="bubble bubble-04" data-speed="-7"></i>
                    <i className="bubble bubble-05" data-speed="-5"></i>
                    <i className="bubble bubble-06" data-speed="2"></i>
                </div>
                <div className="inner">

                    <a href="" className="content text-box">
                        <h2 className="sc-title">LILYBYRED STORY</h2>
                        <span>#순수 능란 앙큼 메이크업</span>
                        <span>릴리바이레드는 순수하 듯 능란한 소녀,</span>
                        <span>때로는 대담하듯 은밀한 숙녀들의</span>
                        <span>반전매력을 표현하는</span>
                        <span>컬러메이크업 브랜드입니다.</span>
                    </a>
                </div>
            </section>

            <section className="sc-video" id="canvas">
                <h2 className="blind">릴리바이레드 글래시 레이어 픽싱틴트 동영상</h2>
                <div className="inner">
                    <iframe width="100%" height="664px"
                        src="https://www.youtube.com/embed/OoNX1BWcnAw?controls=0&loop=1&autoplay=1&mute=1&playlist=OoNX1BWcnAw"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </section>

        </div>
    )
}

export default Main