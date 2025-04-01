import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/nav.module.css'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faLinkedin, faTwitter, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="#" className={styles.navitem}>
        <FontAwesomeIcon icon={faHome} className="icon" />
        <span className={styles.tooltip}>Home</span>
      </a>

      <a href="#" className={styles.navitem}>
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <span className={styles.tooltip}>Github</span>
      </a>

      <a href="#" className={styles.navitem}>
        <FontAwesomeIcon icon={faXTwitter} className="icon" />
        <span className={styles.tooltip}>Twitter</span>
      </a>

      {/* Add more icons */}
    </div>
    
  );
}
export default Navbar