import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import classes from './TextScale_Size4xl.module.css';

interface Props {
  className?: string;
  text?: {
    _1?: ReactNode;
  };
}
/* @figmaId 2:33 */
export const TextScale_Size4xl: FC<Props> = memo(function TextScale_Size4xl(props = {}) {
  return (
    <div className={classes.root}>{props.text?._1 != null ? props.text?._1 : <div className={classes._1}>1</div>}</div>
  );
});
