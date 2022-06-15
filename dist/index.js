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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.load = void 0;
var getCoverage_1 = __importDefault(require("./getCoverage"));
var path_1 = __importDefault(require("path"));
var generateBadge_1 = require("./generateBadge");
var typedoc_1 = require("typedoc");
var text_1 = require("./reporters/text");
var html_1 = require("./reporters/html");
var json_1 = require("./reporters/json");
var ncp_1 = require("ncp");
var util_1 = require("util");
var asyncNcp = (0, util_1.promisify)(ncp_1.ncp);
function generateCoverageReport(options) {
    return __awaiter(this, void 0, void 0, function () {
        var dirPath, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dirPath = options.outputDir;
                    return [4 /*yield*/, (0, getCoverage_1["default"])({
                            tsProjectFile: options.tsProjectFile,
                            strict: options.strict,
                            debug: options.debug,
                            ignoreFiles: options.ignoreFiles,
                            ignoreCatch: options.ignoreCatch,
                            ignoreUnread: options.ignoreUnread,
                            cache: options.cache
                        })];
                case 1:
                    data = _a.sent();
                    console.log((0, text_1.generate)(data, (options === null || options === void 0 ? void 0 : options.threshold) || 0));
                    (0, generateBadge_1.generateCoverageBadge)(dirPath, data.percentage.toFixed(1));
                    return [4 /*yield*/, (0, html_1.generate)(data, options)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, asyncNcp(path_1["default"].join(__dirname, "../assets"), path_1["default"].join(options.outputDir, "assets"))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, json_1.generate)(data, options)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function load(app) {
    var _this = this;
    app.options.addDeclaration({
        name: "threshold",
        help: "Minimum type coverage percentage",
        type: typedoc_1.ParameterType.Number,
        defaultValue: 90
    });
    app.renderer.on(typedoc_1.Renderer.EVENT_END, function (event) { return __awaiter(_this, void 0, void 0, function () {
        var outDir, threshold, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    outDir = app.options.getValue("out") || path_1["default"].join(process.cwd(), "docs");
                    outDir = path_1["default"].join(outDir, "type-coverage");
                    threshold = app.options.getValue("threshold");
                    return [4 /*yield*/, generateCoverageReport(__assign(__assign({}, app.options), { outputDir: outDir, threshold: threshold }))];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
exports.load = load;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBbUU7QUFDbkUsOENBQXdCO0FBQ3hCLGlEQUF3RDtBQUN4RCxtQ0FBOEU7QUFDOUUseUNBQTREO0FBQzVELHlDQUE0RDtBQUM1RCx5Q0FBNEQ7QUFDNUQsMkJBQTBCO0FBQzFCLDZCQUFpQztBQUVqQyxJQUFNLFFBQVEsR0FBRyxJQUFBLGdCQUFTLEVBQUMsU0FBRyxDQUFDLENBQUM7QUFPaEMsU0FBZSxzQkFBc0IsQ0FDbkMsT0FBdUI7Ozs7OztvQkFHakIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBRXJCLHFCQUFNLElBQUEsd0JBQVcsRUFBQzs0QkFDN0IsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhOzRCQUNwQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07NEJBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzs0QkFDcEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXOzRCQUNoQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7NEJBQ2hDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWTs0QkFDbEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO3lCQUNyQixDQUFDLEVBQUE7O29CQVJJLElBQUksR0FBRyxTQVFYO29CQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBQSxlQUFZLEVBQUMsSUFBSSxFQUFFLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFNBQVMsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUV6RCxJQUFBLHFDQUFxQixFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxxQkFBTSxJQUFBLGVBQVksRUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFDO29CQUNsQyxxQkFBTSxRQUFRLENBQ1osaUJBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxFQUNqQyxpQkFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUN2QyxFQUFBOztvQkFIRCxTQUdDLENBQUM7b0JBRUYscUJBQU0sSUFBQSxlQUFZLEVBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFBOztvQkFBakMsU0FBaUMsQ0FBQztvQkFFbEMsc0JBQU8sSUFBSSxFQUFDOzs7O0NBQ2I7QUFFRCxTQUFnQixJQUFJLENBQUMsR0FBZ0I7SUFBckMsaUJBdUJDO0lBdEJDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ3pCLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxrQ0FBa0M7UUFDeEMsSUFBSSxFQUFFLHVCQUFhLENBQUMsTUFBTTtRQUMxQixZQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBUSxDQUFDLFNBQVMsRUFBRSxVQUFPLEtBQW9COzs7Ozs7b0JBRXZELE1BQU0sR0FDUixHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2xFLE1BQU0sR0FBRyxpQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7b0JBQ3RDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQXNCLENBQUM7b0JBQ3pFLHFCQUFNLHNCQUFzQix1QkFDdkIsR0FBRyxDQUFDLE9BQU8sS0FDZCxTQUFTLEVBQUUsTUFBTSxFQUNqQixTQUFTLEVBQUUsU0FBUyxJQUNwQixFQUFBOztvQkFKRixTQUlFLENBQUM7Ozs7b0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLENBQUMsQ0FBQzs7Ozs7U0FFcEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQXZCRCxvQkF1QkMifQ==