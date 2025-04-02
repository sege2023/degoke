import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../layout/nav"
import styles from '../styles/home.module.css'
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.containerwrapper}>
            <div className={styles.about}>
                {/* Yokoso, boku no namae wa Abdulmalik */}
                {/* Marhaba, esmi Abdulmalik             */}
                <p className={styles.me}>
                    <span>Goke</span>
                </p>
                <p>Engineering student at [readacted]. </p>
                {/* <p>
                    "Cogito ergo sum"
                </p> */}
            </div>

            <div className={styles.project}>
                <div className={styles.projectshead}>
                    <button>
                        <span><FontAwesomeIcon icon={faBriefcase}/></span> 
                        <span>Projects</span>
                    </button>
                    <p className={styles.projectsheadDescription}>Milestones in my learning Journey</p>

                </div>
                <div className={styles.projectbody}>
                    <div className={styles.projectcards}>
                       <p>Povisuals </p>
                    </div>
                    <div className={styles.projectcards}>
                       <p>Audiphile</p>
                    </div>
                    <div className={styles.projectcards}>
                       <p>Arcix</p>
                    </div>
                </div>
            </div>


            <div className={styles.skillbox}>
                
            </div>

            <div className={styles.blog}>
                <div className={styles.blogheader}>

                </div>
            </div>


            <Navbar/>
            </div>
        </div>
    )
}
export default Home