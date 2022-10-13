import { FC } from 'react';

interface ImageProps {
  imageUrl: string;
  className?: string;
}

const Image: FC<ImageProps> = ({ imageUrl, className }) => {
  return <img src={imageUrl} alt="" className={className} />;
};

export default Image;
