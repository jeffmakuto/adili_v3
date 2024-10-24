import { ChevronDownIconProps, IconProps } from '@/types/slider'

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="chevron-left"
    className={className}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    style={{ transform: 'scale(1.2)' }}
  >
    <path fill="white" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192
        192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6
        86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="chevron-right"
    className={className}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    style={{ transform: 'scale(1.2)' }}
  >
    <path fill="white" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192
        192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4
        86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);

export const RedTriangleLeftIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="triangle-left"
    className={className}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    style={{ transform: 'scale(1.2)' }}
  >
    <path fill="red" d="M0 256l160 160V96z" />
  </svg>
);

export const RedTriangleRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="triangle-right"
    className={className}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    style={{ transform: 'scale(1.2)' }}
  >
    <path fill="red" d="M320 256L160 96v320z" />
  </svg>
);

export const TriangleDownIcon: React.FC<ChevronDownIconProps> = ({ className, isActive }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="triangle-down"
    className={className}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    style={{ transform: 'scale(1.5)' }}
  >
    <path
      fill={isActive ? 'white' : 'black'}
      d="M160 320l-160-160h320z" />
  </svg>
);
