import { Canvas } from '@react-three/fiber';

type Props = {
  width?: number;
  height?: number;
  children: React.ReactNode;
};

const ThreeCanvas: React.FC<Props> = ({
  width = 300,
  height = 300,
  children,
}) => {
  return (
    <Canvas
      style={{
        width: `${width}px`,
        height: `${height}px`,
        boxShadow: '0 0 18px rgba(0, 0, 0, 0.5)',
      }}
    >
      {children}
    </Canvas>
  );
};

export default ThreeCanvas;
