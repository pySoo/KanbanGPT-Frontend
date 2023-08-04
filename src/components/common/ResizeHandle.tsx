import { css } from '@emotion/react';
import { PanelResizeHandle } from 'react-resizable-panels';

import { theme, ThemeType } from '@/styles/theme';

import ResizeIcon from '../icons/ResizeIcon';

export type DirectionType = 'horizontal' | 'vertical';

type ResizeHandleProps = {
  direction: DirectionType;
};

export default function ResizeHandle({ direction }: ResizeHandleProps) {
  return (
    <PanelResizeHandle css={resizeHandleStyle(theme, direction)}>
      <div className="resize-line">
        <div className="resize-icon">
          <ResizeIcon direction={direction} />
        </div>
      </div>
    </PanelResizeHandle>
  );
}

const resizeHandleStyle = (theme: ThemeType, direction: DirectionType) => css`
  position: relative;
  width: ${direction === 'horizontal' ? '2px' : '100%'};
  height: ${direction === 'horizontal' ? '100%' : '2px'};
  padding: ${direction === 'horizontal' ? '0 10px' : '10px 0'};

  .resize-line {
    width: inherit;
    height: inherit;
    transform: translateX(-1px);
    background: ${theme.colors.lightGray};
  }

  .resize-icon {
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% - 2px), -50%) rotate(90deg);
    color: ${theme.colors.lightGray};
  }

  :focus-within .resize-line {
    background: ${theme.colors.green};
  }

  :focus-within .resize-icon {
    color: ${theme.colors.green};
  }
`;
