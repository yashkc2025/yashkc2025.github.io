import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import classes from './TextScale_SizeXl.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _4?: ReactNode;
  };
}
/* @figmaId 3:10 */
export const TextScale_SizeXl: FC<Props> = memo(function TextScale_SizeXl(props = {}) {
  return (
    <div className={`${classes.root} ${props.classes?.root || ''} ${props.className || ''}`}>
      {props.text?._4 != null ? props.text?._4 : <div className={classes._4}>4</div>}
    </div>
  );
});
