import ThreeCanvas from '@/constants/Three/Canvas';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <ThreeCanvas width={800} height={600}>
        <ambientLight />
      </ThreeCanvas>
    </div>
  );
};

export default Home;
