"use strict";
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
exports.__esModule = true;
exports.getServerSideProps = void 0;
var react_1 = require("react");
var router_1 = require("next/router");
var client_1 = require("next-auth/client");
var head_1 = require("next/head");
//Component
var SideBar_1 = require("../components/SideBar");
var ExperienceBar_1 = require("../components/ExperienceBar");
var Profile_1 = require("../components/Profile");
var CompletedChallenges_1 = require("../components/CompletedChallenges");
var Countdown_1 = require("../components/Countdown");
var ChallengeBox_1 = require("../components/ChallengeBox");
//Context
var ChallengesContext_1 = require("../contexts/ChallengesContext");
var CountdownContext_1 = require("../contexts/CountdownContext");
//Style
var Home_module_css_1 = require("../styles/pages/Home.module.css");
function Home(props) {
    var _a = client_1.useSession(), session = _a[0], loading = _a[1];
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        if (!loading && !session) {
            router.push("/");
        }
    }, [session, loading, router]);
    return (React.createElement(ChallengesContext_1.ChallengesProvider, { level: props.level, currentExperience: props.currentExperience, challengesCompleted: props.challengesCompleted },
        React.createElement(SideBar_1.SideBar, null),
        React.createElement("div", { className: Home_module_css_1["default"].container },
            React.createElement(head_1["default"], null,
                React.createElement("title", null, "Home | move.it")),
            React.createElement(ExperienceBar_1.ExperienceBar, null),
            !loading && (React.createElement(CountdownContext_1.CountdownProvider, null,
                React.createElement("section", null,
                    React.createElement("div", null,
                        React.createElement(Profile_1.Profile, null),
                        React.createElement(CompletedChallenges_1.CompletedChallenges, null),
                        React.createElement(Countdown_1.Countdown, null)),
                    React.createElement("div", null,
                        React.createElement(ChallengeBox_1.ChallengeBox, null))))))));
}
exports["default"] = Home;
exports.getServerSideProps = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, level, currentExperience, challengesCompleted;
    return __generator(this, function (_b) {
        _a = ctx.req.cookies, level = _a.level, currentExperience = _a.currentExperience, challengesCompleted = _a.challengesCompleted;
        return [2 /*return*/, {
                props: {
                    level: Number(level),
                    currentExperience: Number(currentExperience),
                    challengesCompleted: Number(challengesCompleted)
                }
            }];
    });
}); };
