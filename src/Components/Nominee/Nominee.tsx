import { FC } from 'react';
import Button from '../general/Button/Button';
import Image from '../general/Image/Image';
import Title from '../general/Title/Title';

interface NomineeProps {
  title: string;
  imageUrl: string;
}

const Nominee: FC<NomineeProps> = ({ title, imageUrl }) => {
  const showImage = imageUrl !== 'N/A';

  return (
    <div className="nominee">
      <Title headingLevel={3} text={title} />
      {showImage && <Image imageUrl={imageUrl} />}
      <Button className="select-nominee" text="Select Nominee" />
    </div>
  );
};

export default Nominee;
