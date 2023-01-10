import React from 'react';

export default function EditPen() {
  return (
    <div>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="19" height="19" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_77_391" transform="scale(0.00390625)" />
          </pattern>
          <image
            id="image0_77_391"
            width="256"
            height="256"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
}
