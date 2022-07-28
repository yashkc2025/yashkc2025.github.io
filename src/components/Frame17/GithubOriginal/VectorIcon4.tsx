import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.33899 1.14264C1.24096 1.21114 1.07404 1.14265 0.981309 1.00566C0.955667 0.981086 0.935278 0.951621 0.921347 0.919031C0.907416 0.886442 0.900228 0.851397 0.900228 0.815986C0.900228 0.780575 0.907416 0.745526 0.921347 0.712936C0.935278 0.680347 0.955667 0.650886 0.981309 0.626312C1.07934 0.560452 1.24626 0.62631 1.33899 0.760663C1.43172 0.895015 1.43437 1.07415 1.33899 1.14264V1.14264Z'
      fill='#191717'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
