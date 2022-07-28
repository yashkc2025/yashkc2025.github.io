import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.05925 0.509339C1.02481 0.58837 0.897632 0.612081 0.794304 0.55676C0.690976 0.501438 0.614148 0.398696 0.65124 0.317031C0.688332 0.235365 0.812856 0.214288 0.916184 0.26961C1.01951 0.324932 1.09899 0.430308 1.05925 0.509339Z'
      fill='#191717'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
