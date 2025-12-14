import type { TitleProps } from '@/types/types';

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={`scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance ${className}`}
    >
      {children}
    </h1>
  );
}
