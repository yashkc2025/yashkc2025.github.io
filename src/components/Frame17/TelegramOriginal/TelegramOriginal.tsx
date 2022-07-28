import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { ArtboardIcon } from './ArtboardIcon';
import classes from './TelegramOriginal.module.css';

interface Props {
  className?: string;
  swap?: {
    artboard?: ReactNode;
  };
}
/* @figmaId 4:152 */
export const TelegramOriginal: FC<Props> = memo(function TelegramOriginal(props = {}) {
  return (
    <div className={classes.root}>
      <div className={classes.artboard}>{props.swap?.artboard || <ArtboardIcon className={classes.icon} />}</div>
    </div>
  );
});
