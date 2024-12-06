import React from "react";
import "./Header.scss";
import 'react-modern-drawer/dist/index.css'
import Drawer from 'react-modern-drawer'

const Header = () => {

  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo-flex">
              <img src="/logo.png" alt="logo" />
              <ul className="header__navbar">
                <a href="#">Каталог</a>
                <a href="#">Галерея</a>
                <a href="#">О лаборатории</a>
                <a href="#">Контакты</a>
              </ul>
            </div>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                className='header__drawer'
            >
                <ul className="header__navbar-menu">
                  <a href="#">Каталог</a>
                  <a href="#">Галерея</a>
                  <a href="#">О лаборатории</a>
                  <a href="#">Контакты</a>
                </ul>
            </Drawer>

            <div className="header__icon">
              <img src="/search.svg" alt="search" />
              <img src="/exit.svg" alt="exit" />
              <button className={isOpen ? 'header__burger active' : 'header__burger'} onClick={toggleDrawer}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
