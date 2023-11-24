import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const LINK = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Play',
    link: '/play',
  },
];

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>React Game Shooting</p>
      {LINK.map(({ name, link }, index) => (
        <Link to={link} key={`${link}-${index}`} className={styles.link}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Header;
