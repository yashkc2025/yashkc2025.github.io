import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import classes from './TextScale_Size3xl.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _2?: ReactNode;
  };
}
/* @figmaId 2:68 */
export const TextScale_Size3xl: FC<Props> = memo(function TextScale_Size3xl(props = {}) {
  return (
    <div className={`${classes.root} ${props.classes?.root || ''} ${props.className || ''}`}>
      {props.text?._2 != null ? props.text?._2 : <div className={classes._2}>2</div>}
    </div>
  );
});
