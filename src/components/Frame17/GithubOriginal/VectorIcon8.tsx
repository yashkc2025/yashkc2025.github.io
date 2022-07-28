import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.922528 0.430847C0.946373 0.559931 0.813899 0.694286 0.623139 0.725898C0.432379 0.75751 0.265464 0.681111 0.241619 0.554662C0.217774 0.428213 0.355546 0.291229 0.541007 0.256982C0.726468 0.222736 0.898683 0.301763 0.922528 0.430847Z'
      fill='#191717'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
