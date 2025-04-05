import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/nav.module.css'
import { faBook, faHome} from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className={styles.navbar}>
      <a href="#" className={styles.navitem}>
        <FontAwesomeIcon icon={faHome} className="icon" />
        <span className={styles.tooltip}>Home</span>
      </a>

      <a href="https://github.com/sege2023" className={styles.navitem}>
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <span className={styles.tooltip}>Github</span>
      </a>

      <a href="https://x.com/_de_goke" className={styles.navitem}>
        <FontAwesomeIcon icon={faXTwitter} className="icon" />
        <span className={styles.tooltip}>Twitter</span>
      </a>

      <a href="/blog" className={styles.navitem}
      onClick={(e) => {
        e.preventDefault();
        navigate('/blog');
      }}>
        <FontAwesomeIcon icon={faBook} className="icon" />
        <span className={styles.tooltip}>Blog</span>
      </a>

      {/* Add more icons */}
    </div>
    
  );
}
export default Navbar