import {getImageUrl} from "../../utils.js";
import styles from "./About.module.css"

export const About = ()=>{
    return(
        <div className={styles.container} id={"about"}>
           <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.svg")}
                      alt={"Me sitting with a laptop"}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/softwareDeveloper.png")} alt={"cursor icon"}/>
                    <div className={styles.textCover}>
                        <h3>Software Engineer</h3>
                        <p>I'm a software engineer experienced in Java, Spring boot, react, react native, MySQL, MongoDb</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/backend.png")} alt={"cursor icon"}/>
                    <div className={styles.textCover}>
                        <h3>Backend Developer</h3>
                        <p>I have experience in building fast and optimized APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.frontendIcon} src={getImageUrl("about/frontend.png")} alt={"cursor icon"}/>
                    <div className={styles.textCover}>
                        <h3>Frontend Developer</h3>
                        <p>I also have experience in building optimized sites</p>
                    </div>
                </li>

            </ul>
            </div>
        </div>
    )
}