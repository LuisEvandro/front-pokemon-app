import { LoadingProps } from './type';
import './index.scss';

export function Loading({ 
  size = 18, 
  color = 'var(--color-grayscale-white)'
}: LoadingProps){
  return (
    <div
      className="spinner"
      style={{ width: size, height: size, borderColor: `${color} transparent transparent transparent` }}
    />
  );
};
