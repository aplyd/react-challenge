import { FC } from 'react';
import Button from '../general/Button/Button';
import Image from '../general/Image/Image';
import Title from '../general/Title/Title';

interface NomineeProps {
  title: string;
  imageUrl: string;
}

const Nominee: FC<NomineeProps> = ({ title, imageUrl }) => {
  return (
    <div className="nominee">
      <Title text={title} />
      <Image imageUrl={imageUrl} />
      <Button className="select-nominee" text="Select Nominee" />
    </div>
  );
};

export default Nominee;
