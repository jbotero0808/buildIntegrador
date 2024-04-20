"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comment_controller_1 = require("../controllers/comment.controller");
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.default.Router();
router.get("/", auth_controller_1.verifyJWT, comment_controller_1.getComments);
router.post("/", auth_controller_1.verifyJWT, comment_controller_1.createComment);
router.get("/:id", auth_controller_1.verifyJWT, comment_controller_1.getComment);
router.put("/:id", auth_controller_1.verifyJWT, comment_controller_1.updateComment);
router.delete("/:id", auth_controller_1.verifyJWT, comment_controller_1.deleteComment);
exports.default = router;
