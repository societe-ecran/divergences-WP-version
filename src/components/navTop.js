import React, { useState } from "react";
import { Link } from "gatsby";
import { stack as Menu } from "react-burger-menu";
import styled from "@emotion/styled";
import { Col } from "reactstrap";
import "../images/panier.png";
import Panier from "./panier";

export default () => {
  let edition = "éditions divergences";
  const [menuState, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <TopNav className="sticky-top borderGeneral-bottom ">
        <NavItems className="d-flex">
          <Col md="6" xs="4">
            <Link
              className="text-dark font-weight-bold logoDivergences navfont text-decoration-none "
              to="/"
            >
              {edition.toUpperCase()}
            </Link>
          </Col>

          <Col md="4" xs="0" className="pt-2 d-none d-md-block ">
            <Link
              className=" text-dark navFont logoDivergences2  text-decoration-none"
              to="/"
            >
              critique sociale et politique
            </Link>
          </Col>

          <Col md="2" className="d-flex justify-content-end mb-3">
            <button className="snipcart-checkout panier ">
              <Panier />
            </button>
          </Col>

          <Col xs="1" className="d-block d-sm-none"></Col>
        </NavItems>

        <SideMenu>
          <Menu isOpen={menuState.menuOpen} className="borderSlide">
            <Link
              className="navFont text-dark navHover"
              to="/"
              onClick={() => closeMenu()}
            >
              Home
            </Link>

            <Link
              className="navFont text-dark navHover"
              to="/agenda"
              onClick={() => closeMenu()}
            >
              Actualités
            </Link>

            <Link
              className="navFont text-dark navHover"
              to="/catalogue/"
              onClick={() => closeMenu()}
            >
              Catalogue
            </Link>

            <Link
              className=" navFont text-dark navHover"
              to="/ounoustrouver/"
              onClick={() => closeMenu()}
            >
              Où nous trouver?
            </Link>

            <Link
              className="navFont text-dark navHover"
              to="/plusDinfos/"
              onClick={() => closeMenu()}
            >
              Plus d'infos
            </Link>

            <Link
              className="navFont text-dark navHover"
              to="/about/"
              onClick={() => closeMenu()}
            >
              Contact / Newsletter
            </Link>
          </Menu>
        </SideMenu>
      </TopNav>
    </>
  );
};

const TopNav = styled.div`
  //   display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  //   overflow: hidden;
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   left: 0;
  //   z-index: 1101;
  //   top: 0;
  //   width: 100vw;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  //   flex-wrap: nowrap;
  //   justify-content: flex-end;
  //   margin-top: 1em;
  //   a {
  //     color: #888;
  //     text-align: center;
  //     padding: 1em;
  //     text-decoration: none;
  //     font-size: 1em;
  //     &:hover {
  //       color: #333;
  //     }
  //   }
  //   @media (max-width: 721px) {
  //     display: none;
  //   }
  //
`;
const SideMenu = styled.div`
  /* Individual item */
  .bm-item {
    display: inline-block;
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 25px;
    height: 20px;
    right: 15px;
    top: 10px;
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  /* Color/shape of close button cross */
  .bm-cross {
    background: #000000;
  }
  /* General sidebar styles */
  .bm-menu {
    background: #ffffff;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 720px) {
    display: none;
  }
`;

// import React from "react";
// import "../assets/css/main.css";
// import "../fonts/fonts.css";
// import { Link } from "gatsby";
// import "../images/panier.png";
// import Panier from "./panier";
// import { Col } from "reactstrap";

// const NavTop = () => {
//     let edition = "éditions divergences";

//     return (
//         <div className="nav bg-white sticky-top ">
//             <Col md="6" >
//                 <Link
//                     className="text-dark font-weight-bold logoDivergences  ml-2  pt-5 navfont"
//                     style={{ textDecoration: "none" }}
//                     activeStyle={{ textDecoration: "none" }}
//                     to="/"
//                 >
//                     {edition.toUpperCase()}
//                 </Link>
//             </Col>

//             <Col md="4" >
//                 <li className="navFont pt-2 d-none d-xl-block">
//                     <Link
//                         className=" text-dark navFont logoDivergences2"
//                         style={{ textDecoration: "none" }}
//                         activeStyle={{ textDecoration: "none" }}
//                         to="/"
//                     >
//                         critique sociale et politique
//                     </Link>
//                 </li>
//             </Col>

//             <Col md="2" className="d-flex justify-content-end">
//                 <li className=" pt-1 d-none d-xl-block">
//                     <button className="snipcart-checkout panier ">
//                         <Panier />
//                     </button>
//                 </li>
//             </Col>
//         </div>
//     );
// };

// export default NavTop;
