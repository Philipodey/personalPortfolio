import {getImageUrl} from "../../utils.js";
import styles from "./Footer.module.css"


export const Footer = () =>{
    return(
        <div id={"contact"} className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Please reach out at any time!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/email.png")}
                        alt={"Email icon"}/>
                    <a href={"mailto:philipodey75@gmail.com"}>philipodey75@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/socialIcon.png")}
                        alt={"LinkedIn icon"}/>
                    <a href={"https://www.linkedin.com/in/philip-odey-09b795283/"}>linkedin.com/philipodey</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/githubIcon.png")}
                        alt={"Github icon"}/>
                    <a href={"https://github.com/Philipodey"}>github.com/philipodey</a>
                </li>

            </ul>
        </div>
    )
}