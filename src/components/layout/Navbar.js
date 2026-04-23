import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";
import Logo from "../../img/logo.png";
import Container from "./Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function go(path) {
    setOpen(false);
    navigate(path, { state: { reset: true } });
  }

  return (
    <Container>
      <nav className={styles.navbar}>
        <Link to={"/"}>
          <img src={Logo} alt="Logo" id={styles.logo} />
        </Link>
        <div onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </div>
        <ul className={`${styles.list} ${open ? styles.active : ""}`}>
          <li className={styles.list_items} onClick={() => go("/ ")}>
            <Link to={"/"}>Search</Link>
          </li>
          <li className={styles.list_items} onClick={() => setOpen(false)}>
            <Link to={"/Favorites"}>Favorites</Link>
          </li>
          <li className={styles.list_items} onClick={() => setOpen(false)}>
            <Link to={"/About"}>About</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
