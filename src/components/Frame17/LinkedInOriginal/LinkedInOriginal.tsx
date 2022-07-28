import { memo } from 'react';
import type { FC } from 'react';

import classes from './LinkedInOriginal.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 4:141 */
export const LinkedInOriginal: FC<Props> = memo(function LinkedInOriginal(props = {}) {
  return (
    <div className={classes.root}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
