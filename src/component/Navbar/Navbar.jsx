import styles from "./Navbar.module.css";
import {useState} from "react";
import {getImageUrl} from "../../utils.js";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className={styles.navbar}>
            <a className={styles.title} href={"/"}>Philip Odey</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                     src={menuOpen ? getImageUrl(
                         "nav/whitecancel.png"):
                getImageUrl("nav/hamburger.png")}
                     alt={"menu-button"}
                onClick={()=> setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItem} 
                ${menuOpen && styles.menuOpen}`}
                onClick={()=> setMenuOpen(false)}
                >
                    <li><a href={"#about"}>About</a></li>
                    <li><a href={"#experience"}>Experience</a></li>
                    <li><a href={"#projects"}>Projects</a></li>
                    <li><a href={"#contacts"}>Contacts</a></li>

                </ul>
            </div>
        </div>
    )
}