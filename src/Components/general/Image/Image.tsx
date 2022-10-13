import { FC } from 'react';

interface ImageProps {
  imageUrl: string;
  className?: string;
}

const Image: FC<ImageProps> = ({ imageUrl, className }) => {
  return <img alt="" className={className} src={imageUrl} />;
};

export default Image;
