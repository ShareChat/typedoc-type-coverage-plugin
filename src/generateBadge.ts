import fs, { writeFileSync } from "fs";
import { join } from "path";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="104" height="20">
  <script/>
  <linearGradient id="a" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <rect rx="3" width="104" height="20" fill="#555"/>
  <rect rx="3" x="64" width="40" height="20" fill="@color@"/>
  <path fill="@color@" d="M64 0h4v20h-4z"/>
  <rect rx="3" width="104" height="20" fill="url(#a)"/>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="32" y="15" fill="#010101" fill-opacity=".3">type</text>
    <text x="32" y="14">type</text>
    <text x="84" y="15" fill="#010101" fill-opacity=".3">@coverage@</text>
    <text x="84" y="14">@coverage@</text>
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
