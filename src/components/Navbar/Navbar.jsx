import React, { useEffect, useRef, useState } from "react";
import UserLogo from "../../assets/User-logo.svg";
import HearthLogo from "../../assets/Hearth-logo.svg";
import CartLogo from "../../assets/Cart-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PublicRoutes } from "../../routes/public-routes";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/getAllProducts";
import { PrivateRoutes } from "../../routes/privates-routes/private-user-routes";
import { DropDown } from "../DropDown/DropDown";
import ArrowDrop from '../../../src/assets/Arrow-drop.svg';

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState(false);
  const dropProps = { drop, setDrop };
  const dispatch = useDispatch();
  const formRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname == "/sign-up" || location.pathname == "/sign-in" || location.pathname == "/forget-password") {
      setHidden(!hidden);
    }
  }, []);
  function onChangeInput(e) {
    setSearch(e.target.value);
  };
  function onSubmitSearchInput(e) {
    e.preventDefault();
    dispatch(getAllProducts({ name: search }));
    formRef.current.reset();
  }
  function clickOnLogo() {
    if (location.pathname == "/") {
      dispatch(getAllProducts({}))
    } else {
      navigate("/")
    }
  };
  return (
    <nav className="bg-primary w-full h-20 flex justify-center items-center">
      <div className="w-[90%] flex justify-between items-center text-text2">
        <div className="flex justify-center items-center gap-8 -sm:w-full -sm:justify-center">
          {/* <Link to="/"> */}
          <h2 onClick={clickOnLogo} className="text-4xl font-bold hover:cursor-pointer -sm:hidden">
            TechStore
          </h2>
          {/* </Link> */}
          <form ref={formRef} onSubmit={onSubmitSearchInput} className={hidden ? "hidden" : "flex w-fit -sm:w-full"}>
            <input
              type="text"
              onChange={onChangeInput}
              className={
                hidden
                  ? "hidden"
                  : "rounded-l-lg h-10 w-72 text-text1 focus:border-none outline-none -sm:w-60 p-3"
              }
            />
            <button
              type="submit"
              className="bg-secondary text-text2 rounded-r-lg px-5 -sm:px-3 hover:scale-105"
            >
              Buscar
            </button>
          </form>
        </div>
        <div
          className={
            hidden
              ? "hidden"
              : "flex justify-center items-center gap-5 -sm:hidden"
          }
        >
          <div className="flex justify-center items-center hover:cursor-pointer hover:scale-105">
            <img
              src={UserLogo}
              alt="loading..."
              className="w-8 h-8 -sm:hidden"
            />
            <button
              onClick={() => {
                setDrop(!drop)
              }}
              className={"-lg:hidden flex justify-center items-center"}
            >
              Cuenta <img src={ArrowDrop} className='w-6 h-6 translate-y-0.5' alt="loading..." />
            </button>
            {/*Dropdown Menu*/}
            <DropDown {...dropProps} />
            {/*Dropdown Menu End*/}
          </div>
          <Link to={`/${PrivateRoutes.USER}/${PublicRoutes.WISHLIST}`}>
            <div className="flex justify-center items-center gap-1 hover:cursor-pointer hover:scale-105">
              <img
                src={HearthLogo}
                alt="loading..."
                className="w-6 h-6 -sm:hidden"
              />
              <h4 className="-lg:hidden">Favoritos</h4>
            </div>
          </Link>
          <Link to={`/${PublicRoutes.SHOPPING_CART}`}>
            <div className="flex justify-center items-center gap-1 hover:cursor-pointer hover:scale-105">
              <img
                src={CartLogo}
                alt="loading..."
                className="w-6 h-6 -sm:hidden"
              />
              <h4 className="-lg:hidden">Carrito</h4>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
