# ReactJS로 구축한 iliybyred 웹페이지
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
<img src="https://img.shields.io/badge/GreenSock-88CE02?style=flat-square&logo=GreenSock&logoColor=white"/>
<img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white"/>
<img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/>

## 기능
- 텍스트 롤링 (GSAP)
- 오토 슬라이드 (Swiper)
- mousemove
- background 색 변환

반응형 웹사이트(Tailwind 사용)</br>
hambuger menu CSS를 이용한 모바일 웹사이트

## 사용된 기술
- ReactJS
- SCSS
- GSAP
- ScrollTrigger
- Swiper
- jQuery
- box2d

## 업데이트

##### v1.0
- 기존 HTML 기반에서 React 기반으로 작업
- 웹페이지 배포

##### v2.0
- 가독성을 위해 .js -> .jsx 변경
- CSS -> SCSS 변경

## ISSUE
##### npm start로 최초 실행할 경우 ScrollTrigger의 scrub가 제대로 되지만 새로고침 후 기준이 다르게 잡힘
##### - 배포 후에 웹사이트에 들어가보면 반대인 상황이 된다 (처음 접속할 경우 scrub이 제대로 안되지만 새로고침 후 제대로 됨)
##### - 해당 문제에 대해서 계속해서 파악하고 있지만 해결이 되지 않음 :(

##### box2d를 사용하여 footer 부분에서 효과를 주려했지만 작동이 되지 않음
