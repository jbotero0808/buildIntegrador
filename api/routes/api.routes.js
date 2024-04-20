"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const post_routes_1 = __importDefault(require("./post.routes"));
const comment_routes_1 = __importDefault(require("./comment.routes"));
const router = express_1.default.Router();
router.use("/auth", auth_routes_1.default);
router.use("/user", user_routes_1.default);
router.use("/post", post_routes_1.default);
router.use("/comment", comment_routes_1.default);
exports.default = router;
