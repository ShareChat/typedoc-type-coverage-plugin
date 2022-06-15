import fs, { writeFileSync } from "fs";
import { join } from "path";

const svg = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="88"
  height="20"
  role="img"
>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
    <stop offset="1" stop-opacity=".1" />
  </linearGradient>
  <clipPath id="r">
    <rect width="88" height="20" rx="3" fill="#fff" />
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="35" height="20" fill="#555" />
    <rect x="35" width="53" height="20" fill="@color@" />
    <rect width="88" height="20" fill="url(#s)" />
  </g>
  <g
    fill="#fff"
    text-anchor="middle"
    font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
    text-rendering="geometricPrecision"
    font-size="110"
  >
    <text
      aria-hidden="true"
      x="185"
      y="150"
      fill="#010101"
      fill-opacity=".3"
      transform="scale(.1)"
      textLength="250"
    >
      type
    </text>
    <text x="185" y="140" transform="scale(.1)" fill="#fff" textLength="250">
      type
    </text>
    <text
      aria-hidden="true"
      x="605"
      y="150"
      fill="#010101"
      fill-opacity=".3"
      transform="scale(.1)"
      textLength="430"
    >
    @coverage@
    </text>
    <text x="605" y="140" transform="scale(.1)" fill="#fff" textLength="430">
    @coverage@
    </text>
  </g>
</svg>
`.trim();

export function generateCoverageBadge(dirPath, percentDocumented) {
  let color;
  if (percentDocumented < 50) {
    color = "#db654f";
  } else if (percentDocumented < 90) {
    color = "#dab226";
  } else {
    color = "#4fc921";
  }
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const badge = svg
    .replace(/@coverage@/g, `${percentDocumented}%`)
    .replace(/@color@/g, color);
  writeFileSync(join(dirPath, "type-coverage.svg"), badge);
}
