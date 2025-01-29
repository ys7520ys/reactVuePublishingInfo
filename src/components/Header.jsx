import React, { useState } from 'react' // useState의 값을 사용하기 위해서 선언을 한 것이다.

// headerNav라는 변수를 생성하여 배열을 생성하고, 안에 객체를 만든 상태이다.
const headerNav = [
  {
    title: "intro",
    url: "#intro"
  },
  {
    title: "skill",
    url: "#skill"
  },
  {
    title: "site",
    url: "#site"
  },
  {
    title: "portfolio",
    url: "#port"
  },
  {
    title: "contact",
    url: "#contact"
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    {/** setShow를 통해서 show에 접근을 하고, 현재 show의 값이 true이면 false로 변경하고, false이면 true로 변경해라는 말이다. */}
    setShow((prevShow) => !prevShow);
  }

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1>
            <a href="/">portfolio<em>vite</em></a>
          </h1>
        </div>
        {/* 메뉴버튼이 클릭되면 show라는 클래스가 붙고, 다시 사라져야 한다. */}
        {/* show라는 값이 존재하면 show라는 클래스를 추가하고, 만약에 show라는 값이 존재하지 않다면 "" 공백으로 구성하여 클래스를 제거한다. */}
        <nav 
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {/* map이라는 메서드를 사용하면 배열을 통해서 값을 불러올 수 있다 
              이렇게 구성하면 상단에 구성한 배열의 내용만큼 5번 반복된다.
            */}
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}




            {/* 
            <li><a href="#intro">intro</a></li>
            <li><a href="#skill">skill</a></li>
            <li><a href="#site">site</a></li>
            <li><a href="#port">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
            */}
          </ul>
        </nav>
        <div 
          className="header__nav__mobile" 
          id="headerToggle" 
          aria-controls="primary-menu" 
          aria-expanded={show ? "true" : "false"} 
          role="button" 
          tabIndex="0"
          onClick={toggleMenu} 
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header