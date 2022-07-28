import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { Frame17 } from './components/Frame17/Frame17';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={classes.root}>
      <Frame17 />
    </div>
  );
});
