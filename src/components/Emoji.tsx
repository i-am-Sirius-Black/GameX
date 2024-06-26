import bullsEye from '../assets/target.png';
import thumbsUp from '../assets/like.png';
import meh from '../assets/meh.png';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props{
    rating: number;
}

function Emoji({rating}: Props) {

    if (rating < 3) return null;

    const emojiMap:{[key:number]: ImageProps} = {
        3: {src: meh, alt: 'meh', boxSize: '25px'},
        4: {src: thumbsUp, alt: 'recommended', boxSize: '25px'},
        5: {src: bullsEye, alt: 'exceptional', boxSize: '30px'}
    }

  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji;