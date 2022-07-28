import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.3949 0.544129C1.35516 0.667945 1.17499 0.723266 0.99483 0.670578C0.814668 0.61789 0.695443 0.470363 0.729886 0.343913C0.764328 0.217462 0.947142 0.159507 1.12995 0.217464C1.31277 0.27542 1.42934 0.415044 1.3949 0.544129Z'
      fill='#191717'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
