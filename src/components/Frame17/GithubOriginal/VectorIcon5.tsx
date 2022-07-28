import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.19474 1.02778C1.10731 1.12526 0.929798 1.09891 0.784079 0.967195C0.63836 0.835477 0.603907 0.656338 0.691339 0.5615C0.77877 0.466663 0.956285 0.49301 1.1073 0.622094C1.25832 0.751178 1.28747 0.932947 1.19474 1.02778V1.02778Z'
      fill='#191717'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
