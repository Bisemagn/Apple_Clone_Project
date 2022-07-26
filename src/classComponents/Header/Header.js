import React, { Component } from "react";
import HeaderLink from "./HeaderLink/HeaderLink";
import HeaderPropsImages from "./HeaderPropsImages";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              {/* <a className="navbar-brand mx-auto" href="#">
                <img src={logo} />
              </a> */}
              <HeaderPropsImages hrefName="/logo" srcImage={logo} />

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <HeaderLink linkUrl="/mac" linkName="mac" />

                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      iphone
                    </a>
                  </li> */}

                  <HeaderLink linkUrl="/iphone" linkName="iphone" />

                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      ipad
                    </a>
                  </li> */}

                  <HeaderLink linkUrl="/ipad" linkName="ipad" />

                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      watch
                    </a>
                  </li> */}

                  <HeaderLink linkUrl="/watch" linkName="watch" />

                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      tv
                    </a>
                  </li> */}

                  <HeaderLink linkUrl="/tv" linkName="tv" />
                  {/* 
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      Music
                    </a>
                  </li> */}

                  <HeaderLink linkUrl="/music" linkName="music" />

                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      Support
                    </a>
                  </li> */}
                  <HeaderLink linkUrl="/Support" linkName="Support" />

                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/search/">
                      <img src={search} />
                    </a>
                  </li> */}

                  <HeaderPropsImages hrefName="/search" srcImage={search} />

                  {/* <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/cart/">
                      <img src={cart} />
                    </a>
                  </li> */}

                  <HeaderPropsImages hrefName="/cart" srcImage={cart} />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
