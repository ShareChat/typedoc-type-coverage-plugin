"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.generate = void 0;
var cli_table3_1 = __importDefault(require("cli-table3"));
var chalk_1 = __importDefault(require("chalk"));
var coverageTable = new cli_table3_1["default"]({
    chars: { mid: "", "left-mid": "", "mid-mid": "", "right-mid": "" },
    colAligns: ["left", "right", "right", "right", "right"],
    style: { "padding-left": 1, "padding-right": 1 }
});
var calculatePercantage = function (correct, total) {
    if (total === 0) {
        return 100;
    }
    return (correct * 100) / total;
};
var calculatePercantageWithString = function (correct, total) {
    return "".concat(calculatePercantage(correct, total).toFixed(2), "%");
};
var generate = function (_a, threshold) {
    var fileCounts = _a.fileCounts, percentage = _a.percentage, total = _a.total, covered = _a.covered, uncovered = _a.uncovered;
    var headers = [
        "filenames" + chalk_1["default"].gray(" (".concat(fileCounts.size, ")")),
        "percent" + chalk_1["default"].gray(" (".concat(percentage.toFixed(2), "%)")),
        "total" + chalk_1["default"].gray(" (".concat(total, ")")),
        "covered" + chalk_1["default"].gray(" (".concat(covered, ")")),
        "uncovered" + chalk_1["default"].gray(" (".concat(uncovered, ")"))
    ];
    coverageTable.push(headers, headers.map(function () { return chalk_1["default"].gray("---"); }));
    fileCounts.forEach(function (_a, filename) {
        var totalCount = _a.totalCount, correctCount = _a.correctCount;
        var colorCell = function (cell) {
            var color = Math.floor(calculatePercantage(correctCount, totalCount)) >= threshold
                ? chalk_1["default"].green
                : chalk_1["default"].red;
            if (typeof cell === "object" && "content" in cell) {
                return __assign(__assign({}, cell), { content: color(cell.content) });
            }
            return color(cell);
        };
        coverageTable.push([
            filename,
            calculatePercantageWithString(correctCount, totalCount),
            totalCount,
            correctCount,
            totalCount - correctCount
        ].map(function (val) { return colorCell(val); }));
    });
    return "" + coverageTable;
};
exports.generate = generate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlcnMvdGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUF5QztBQUV6QyxnREFBMEI7QUFFMUIsSUFBTSxhQUFhLEdBQUcsSUFBSSx1QkFBSyxDQUFDO0lBQzlCLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUU7SUFDbEUsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUN2RCxLQUFLLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUU7Q0FDakQsQ0FBQyxDQUFDO0FBRUgsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLE9BQWUsRUFBRSxLQUFhO0lBQ3pELElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtRQUNmLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRixJQUFNLDZCQUE2QixHQUFHLFVBQ3BDLE9BQWUsRUFDZixLQUFhO0lBRWIsT0FBTyxVQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFFSyxJQUFNLFFBQVEsR0FBRyxVQUN0QixFQUFtRSxFQUNuRSxTQUFpQjtRQURmLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsU0FBUyxlQUFBO0lBR25ELElBQU0sT0FBTyxHQUFHO1FBQ2QsV0FBVyxHQUFHLGtCQUFLLENBQUMsSUFBSSxDQUFDLFlBQUssVUFBVSxDQUFDLElBQUksTUFBRyxDQUFDO1FBQ2pELFNBQVMsR0FBRyxrQkFBSyxDQUFDLElBQUksQ0FBQyxZQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQUksQ0FBQztRQUN0RCxPQUFPLEdBQUcsa0JBQUssQ0FBQyxJQUFJLENBQUMsWUFBSyxLQUFLLE1BQUcsQ0FBQztRQUNuQyxTQUFTLEdBQUcsa0JBQUssQ0FBQyxJQUFJLENBQUMsWUFBSyxPQUFPLE1BQUcsQ0FBQztRQUN2QyxXQUFXLEdBQUcsa0JBQUssQ0FBQyxJQUFJLENBQUMsWUFBSyxTQUFTLE1BQUcsQ0FBQztLQUM1QyxDQUFDO0lBRUYsYUFBYSxDQUFDLElBQUksQ0FDaEIsT0FBTyxFQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLGtCQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQ3JDLENBQUM7SUFFRixVQUFVLENBQUMsT0FBTyxDQUNoQixVQUNFLEVBRytDLEVBQy9DLFFBQWdCO1lBSGQsVUFBVSxnQkFBQSxFQUNWLFlBQVksa0JBQUE7UUFJZCxJQUFNLFNBQVMsR0FBRyxVQUFDLElBQVU7WUFDM0IsSUFBTSxLQUFLLEdBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxTQUFTO2dCQUNwRSxDQUFDLENBQUMsa0JBQUssQ0FBQyxLQUFLO2dCQUNiLENBQUMsQ0FBQyxrQkFBSyxDQUFDLEdBQUcsQ0FBQztZQUNoQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUNqRCw2QkFBWSxJQUFJLEtBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUc7YUFDbEQ7WUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRixhQUFhLENBQUMsSUFBSSxDQUNoQjtZQUNFLFFBQVE7WUFDUiw2QkFBNkIsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO1lBQ3ZELFVBQVU7WUFDVixZQUFZO1lBQ1osVUFBVSxHQUFHLFlBQVk7U0FDMUIsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQy9CLENBQUM7SUFDSixDQUFDLENBQ0YsQ0FBQztJQUVGLE9BQU8sRUFBRSxHQUFHLGFBQWEsQ0FBQztBQUM1QixDQUFDLENBQUM7QUFsRFcsUUFBQSxRQUFRLFlBa0RuQiJ9