import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils.js";

export const Hero = ()=>{
    return (
        <div className={styles.main}>
          <div className={styles.content}>
              <h1 className={styles.title}>Hi, I'm Philip</h1>
              <p className={styles.description}>I am a Software Engineer i am proficient in java, python, javascript, spring boot, react reach out if you would like to learn more</p>
              <a className={styles.contactBtn} href={"mailto:philipodey75@gmail.com"}>Contact Me</a>
          </div>
            <img style={{borderRadius:200}} className={styles.heroImage} src={getImageUrl("hero/philipImage.jpg")} alt={""}/>
            <div className={styles.topBlur}/>

            <div className={styles.bottomBlur}/>
        </div>
    )
}
