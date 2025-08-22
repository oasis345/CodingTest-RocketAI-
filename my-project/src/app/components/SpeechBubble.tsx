import clsx from 'clsx';
import React from 'react';

type Alignment =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'middle-center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'over-top-left'
  | 'over-top-center'
  | 'over-top-right'
  | 'over-bottom-left'
  | 'over-bottom-center'
  | 'over-bottom-right';

type TailPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type SpeechBubbleProps = {
  children: React.ReactNode;
  alignment?: Alignment;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'bubble' | 'rounded';
  tailPosition?: TailPosition;
  maxTextLine?: number;
};

const Tail = ({ position }: { position: TailPosition }) => {
  const borderColor = '#9ca3af'; // Tailwind gray-400

  const positionMap = {
    'bottom-center': {
      border: {
        className: 'left-1/2 -translate-x-1/2 top-full',
        style: {
          borderTop: `13px solid ${borderColor}`,
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
        },
      },
      fill: {
        className: 'left-1/2 -translate-x-1/2 top-full -translate-y-px',
        style: {
          borderTop: '12px solid white',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
        },
      },
    },
    'bottom-left': {
      border: {
        className: 'left-4 top-full',
        style: {
          borderTop: `13px solid ${borderColor}`,
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
        },
      },
      fill: {
        className: 'left-4 top-full -translate-y-px',
        style: {
          borderTop: '12px solid white',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
        },
      },
    },
    'bottom-right': {
      border: {
        className: 'right-4 top-full',
        style: {
          borderTop: `13px solid ${borderColor}`,
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
        },
      },
      fill: {
        className: 'right-4 top-full -translate-y-px',
        style: {
          borderTop: '12px solid white',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
        },
      },
    },
    'top-center': {
      border: {
        className: 'left-1/2 -translate-x-1/2 bottom-full',
        style: {
          borderBottom: `13px solid ${borderColor}`,
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
        },
      },
      fill: {
        className: 'left-1/2 -translate-x-1/2 bottom-full translate-y-px',
        style: {
          borderBottom: '12px solid white',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
        },
      },
    },
    'top-left': {
      border: {
        className: 'left-4 bottom-full',
        style: {
          borderBottom: `13px solid ${borderColor}`,
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
        },
      },
      fill: {
        className: 'left-4 bottom-full translate-y-px',
        style: {
          borderBottom: '12px solid white',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
        },
      },
    },
    'top-right': {
      border: {
        className: 'right-4 bottom-full',
        style: {
          borderBottom: `13px solid ${borderColor}`,
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
        },
      },
      fill: {
        className: 'right-4 bottom-full translate-y-px',
        style: {
          borderBottom: '12px solid white',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
        },
      },
    },
  };

  const config = positionMap[position];
  if (!config) return null;

  return (
    <>
      <div
        className={clsx('absolute h-0 w-0', config.border.className)}
        style={{ ...config.border.style, filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.1))' }}
      />
      <div className={clsx('absolute h-0 w-0', config.fill.className)} style={config.fill.style} />
    </>
  );
};

export const SpeechBubble = ({
  children,
  alignment = 'bottom-center',
  size = 'md',
  shape = 'bubble',
  tailPosition = 'bottom-center',
  maxTextLine = 3,
}: SpeechBubbleProps) => {
  const alignmentClasses: Record<Alignment, string> = {
    'top-left': 'top-[10%] left-6',
    'top-center': 'top-[10%] left-1/2 -translate-x-1/2',
    'top-right': 'top-[10%] right-6',
    'middle-left': 'top-1/2 -translate-y-1/2 left-6',
    'middle-center': 'top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
    'middle-right': 'top-1/2 -translate-y-1/2 right-6',
    'bottom-left': 'bottom-[20%] left-6',
    'bottom-center': 'bottom-[20%] left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-[20%] right-6',
    'over-top-left': 'bottom-full left-6 mb-4',
    'over-top-center': 'bottom-full left-1/2 -translate-x-1/2 mb-4',
    'over-top-right': 'bottom-full right-6 mb-4',
    'over-bottom-left': 'top-full left-6 mt-4',
    'over-bottom-center': 'top-full left-1/2 -translate-x-1/2 mt-4',
    'over-bottom-right': 'top-full right-6 mt-4',
  };

  const sizeWrapperClasses = {
    sm: 'max-w-[240px]',
    md: 'max-w-xs',
    lg: 'max-w-sm',
  };

  const textBlockClasses = {
    sm: `m-2 text-xs ${maxTextLine ? `line-clamp-${maxTextLine}` : ''}`,
    md: `m-3 text-sm ${maxTextLine ? `line-clamp-${maxTextLine}` : ''}`,
    lg: `m-4 text-base ${maxTextLine ? `line-clamp-${maxTextLine}` : ''}`,
  };

  return (
    <div
      className={clsx(
        'absolute w-auto z-10',
        alignmentClasses[alignment],
        sizeWrapperClasses[size],
      )}
    >
      <div
        className={clsx(
          'relative rounded-2xl bg-white shadow-lg border border-gray-400',
          'grid place-items-center',
        )}
        title={typeof children === 'string' ? children : undefined}
      >
        <div className="overflow-hidden p-3">
          <p className={clsx('text-left leading-relaxed text-gray-800', textBlockClasses[size])}>
            {children}
          </p>
        </div>

        {shape === 'bubble' && <Tail position={tailPosition} />}
      </div>
    </div>
  );
};
