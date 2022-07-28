import { memo } from 'react';
import type { FC } from 'react';

import classes from './GithubOriginal.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';

interface Props {
  className?: string;
}
/* @figmaId 4:143 */
export const GithubOriginal: FC<Props> = memo(function GithubOriginal(props = {}) {
  return (
    <div className={classes.root}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon3} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon4} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon5} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon6} />
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon7} />
      </div>
      <div className={classes.vector8}>
        <VectorIcon8 className={classes.icon8} />
      </div>
    </div>
  );
});
