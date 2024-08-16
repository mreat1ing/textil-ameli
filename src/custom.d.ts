declare module '*.webp';
// declare module '*.svg';
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.avif';
declare module '*.mp4';
