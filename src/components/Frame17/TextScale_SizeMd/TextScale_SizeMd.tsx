import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import classes from './TextScale_SizeMd.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _6?: ReactNode;
  };
}
/* @figmaId 2:47 */
export const TextScale_SizeMd: FC<Props> = memo(function TextScale_SizeMd(props = {}) {
  return (
    <div className={`${classes.root} ${props.classes?.root || ''} ${props.className || ''}`}>
      {props.text?._6 != null ? props.text?._6 : <div className={classes._6}>6</div>}
    </div>
  );
});
