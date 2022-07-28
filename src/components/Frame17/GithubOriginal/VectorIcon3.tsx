import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.708387 1.22851C0.653518 1.256 0.590744 1.26368 0.530814 1.25022C0.470883 1.23677 0.417523 1.20302 0.379858 1.15475C0.27653 1.04411 0.255322 0.891318 0.334806 0.822824C0.414289 0.754331 0.55737 0.785943 0.660698 0.896586C0.764027 1.00723 0.78787 1.16002 0.708387 1.22851Z'
      fill='#191717'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
