import { css } from '@emotion/react';
import { PanelResizeHandle } from 'react-resizable-panels';

import { theme, ThemeType } from '@/styles/theme';

import ResizeIcon from '../icons/ResizeIcon';

export default function ResizeHandle() {
  return (
    <PanelResizeHandle css={resizeHandleStyle(theme)}>
      <div className="resize-line">
        <div className="resize-icon">
          <ResizeIcon />
        </div>
      </div>
    </PanelResizeHandle>
  );
}

const resizeHandleStyle = (theme: ThemeType) => css`
  position: relative;
  width: 2px;
  height: 100%;
  padding: 0px 10px;

  .resize-line {
    width: 2px;
    height: 100%;
    transform: translateX(-1px);
    background: ${theme.colors.lightGray};
  }

  .resize-icon {
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% - 2px), -50%) rotate(90deg);
    color: ${theme.colors.darkGray};
  }

  :focus-within .resize-line {
    background: ${theme.colors.blue};
  }

  :focus-within .resize-icon {
    color: ${theme.colors.blue};
  }
`;
