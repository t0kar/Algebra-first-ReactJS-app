import { useState } from 'react';
import LikeButtonComponent from './LikeButton.component';

export default function LikeButtonContainer() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return <LikeButtonComponent count={count} incrementCount={incrementCount} />;
}
