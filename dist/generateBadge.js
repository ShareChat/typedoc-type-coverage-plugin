"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.generateCoverageBadge = void 0;
var fs_1 = __importStar(require("fs"));
var path_1 = require("path");
var svg = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"104\" height=\"20\">\n  <script/>\n  <linearGradient id=\"a\" x2=\"0\" y2=\"100%\">\n    <stop offset=\"0\" stop-color=\"#bbb\" stop-opacity=\".1\"/>\n    <stop offset=\"1\" stop-opacity=\".1\"/>\n  </linearGradient>\n  <rect rx=\"3\" width=\"104\" height=\"20\" fill=\"#555\"/>\n  <rect rx=\"3\" x=\"54\" width=\"80\" height=\"20\" fill=\"@color@\"/>\n  <path fill=\"@color@\" d=\"M64 0h4v20h-4z\"/>\n  <rect rx=\"3\" width=\"104\" height=\"20\" fill=\"url(#a)\"/>\n  <g fill=\"#fff\" text-anchor=\"middle\" font-family=\"DejaVu Sans,Verdana,Geneva,sans-serif\" font-size=\"11\">\n    <text x=\"32\" y=\"15\" fill=\"#010101\" fill-opacity=\".3\">type</text>\n    <text x=\"32\" y=\"13\">type</text>\n    <text x=\"84\" y=\"15\" fill=\"#010101\" fill-opacity=\".3\">@coverage@</text>\n    <text x=\"84\" y=\"14\">@coverage@</text>\n  </g>\n</svg>\n".trim();
function generateCoverageBadge(dirPath, percentDocumented) {
    var color;
    if (percentDocumented < 50) {
        color = "#db654f";
    }
    else if (percentDocumented < 90) {
        color = "#dab226";
    }
    else {
        color = "#4fc921";
    }
    if (!fs_1["default"].existsSync(dirPath)) {
        fs_1["default"].mkdirSync(dirPath);
    }
    var badge = svg
        .replace(/@coverage@/g, "".concat(percentDocumented, "%"))
        .replace(/@color@/g, color);
    (0, fs_1.writeFileSync)((0, path_1.join)(dirPath, "type-coverage.svg"), badge);
}
exports.generateCoverageBadge = generateCoverageBadge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVCYWRnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmF0ZUJhZGdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLDZCQUE0QjtBQUU1QixJQUFNLEdBQUcsR0FBRyxzNEJBa0JYLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFVCxTQUFnQixxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzlELElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLEVBQUU7UUFDMUIsS0FBSyxHQUFHLFNBQVMsQ0FBQztLQUNuQjtTQUFNLElBQUksaUJBQWlCLEdBQUcsRUFBRSxFQUFFO1FBQ2pDLEtBQUssR0FBRyxTQUFTLENBQUM7S0FDbkI7U0FBTTtRQUNMLEtBQUssR0FBRyxTQUFTLENBQUM7S0FDbkI7SUFDRCxJQUFJLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMzQixlQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQsSUFBTSxLQUFLLEdBQUcsR0FBRztTQUNkLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBRyxpQkFBaUIsTUFBRyxDQUFDO1NBQy9DLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsSUFBQSxrQkFBYSxFQUFDLElBQUEsV0FBSSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFqQkQsc0RBaUJDIn0=