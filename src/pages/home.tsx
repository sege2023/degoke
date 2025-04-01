import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../layout/nav"
import styles from '../styles/home.module.css'
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faRust } from "@fortawesome/free-brands-svg-icons"
const Home = () => {
    return(
        <>
            <div className={styles.about}>
                {/* Yokoso, boku no namae wa Abdulmalik */}
                {/* Marhaba, esmi Abdulmalik             */}
                <p className={styles.me}>
                    <span>goke</span>
                </p>
                <p>
                    "Cogito ergo sum"
                </p>
            </div>

            <div className={styles.project}>
                <div className={styles.projectshead}>
                    <button>
                        <span><FontAwesomeIcon icon={faBriefcase}/></span> 
                        <span>Projects</span>
                    </button>
                    <p className={styles.projectsheadDescription}>Milestone in my learning Journey</p>

                </div>
                <div className={styles.projectbody}>

                </div>
            </div>


            <div className={styles.skillbox}>

            </div>



            <Navbar/>
        </>
    )
}
export default Home