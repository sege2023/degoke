import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../layout/nav"
import styles from '../styles/home.module.css'
import {  faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { BashPlain, JavascriptOriginal,  LinuxOriginal, PythonOriginal, RustOriginal, VscodeOriginal } from "devicons-react"
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
                    {/* <p className={styles.projectsheadDescription}>Milestones in my learning Journey</p> */}

                </div>
                <div className={styles.projectbody}>
                    <div className={styles.projectcards}>
                       <a href="https://github.com/sege2023/box">Audiophile</a>
                        <p>First frontend design</p>
                    </div>
                    <div className={styles.projectcards}>
                       <a href="https://github.com/sege2023/arcix.git">Arcix</a>
                       <p>web3 arcade on solana blockchain</p>
                    </div>
                    <div className={styles.projectcards}>
                       <a href="https://github.com/sege2023/Proto/tree/main/file-ud">File-ud</a>
                        <p>A personal server i created for uploading and downloading files</p>
                    </div>
                    <div className={styles.projectcards}>
                       <a href="https://github.com/sege2023/IGC.git">IGC</a>
                        <p>An image caption generation model</p>
                    </div>
                    <p className={styles.sm}>
                    <a href="https://github.com/sege2023">see more ➜</a>
                    </p>
                </div>
            </div>


            <div className={styles.skillbox}>
                <button className={styles.skillheader}>Kino Tech</button>
                <div className={styles.skillboxtech}>
                <div className={styles.skills}>
                    <VscodeOriginal/>
                    <span className={styles.skillsdescription}>Good editor with blue button of convenience</span>
                </div>
                <div className={styles.skills}>
                    <RustOriginal/>
                    <span className={styles.skillsdescription}>Good general purpose language and memory safe</span>
                </div>
                <div className={styles.skills}>
                    <JavascriptOriginal/>
                    <span className={styles.skillsdescription}>Top 2 languages out there and it's not 2</span>
                </div>
                <div className={styles.skills}>
                    <PythonOriginal/>
                    <span className={styles.skillsdescription}>Great language for Ml and automation</span>
                </div>
                <div className={styles.skills}>
                    <LinuxOriginal/>
                    <span className={styles.skillsdescription}>Wsl, using it to get a hang of linux before switching to dual booting</span>
                </div>
                <div className={styles.skills}>
                    <BashPlain color="green"/>
                    <span className={styles.skillsdescription}>Never touched windows terminal or powershell again after discovering this bad boy</span>
                </div>
                </div>
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