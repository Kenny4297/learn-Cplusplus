// IntroductionToCPlusPlus.tsx

import Lessons from './Lessons';
import { Lesson1Data } from '../LessonData';

const IntroductionToCPlusPlus = () => {
  return (
    <div>
      <Lessons lesson={Lesson1Data} />
    </div>
  );
}

export default IntroductionToCPlusPlus;
