import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { TextScale_SizeMd } from '../TextScale_SizeMd/TextScale_SizeMd';
import classes from './Btn_ColourAccent3HoverFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _6?: ReactNode;
  };
}
/* @figmaId 3:30 */
export const Btn_ColourAccent3HoverFalse: FC<Props> = memo(function Btn_ColourAccent3HoverFalse(props = {}) {
  return (
    <div className={`${classes.root} ${props.classes?.root || ''} ${props.className || ''}`}>
      <TextScale_SizeMd
        className={classes.textScale}
        text={{
          _6: props.text?._6 || <div className={classes._6}>Button Text</div>,
        }}
      />
    </div>
  );
});
