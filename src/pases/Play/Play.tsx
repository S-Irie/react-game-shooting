import ThreeCanvas from '@/constants/Three/Canvas';
import styles from './Play.module.scss';

const Play: React.FC = () => {
  return (
    <div className={styles.play}>
      <h1>Play</h1>
      <ThreeCanvas width={800} height={600}>
        <ambientLight />
      </ThreeCanvas>
    </div>
  );
};

export default Play;
