"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.getComment = exports.createComment = exports.getComments = exports.getPostComments = exports.getUserComments = void 0;
const comment_model_1 = __importDefault(require("../../models/comment.model"));
// Trae todos los comentarios creados por un usuario
const getUserComments = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await comment_model_1.default.find({ idUsuario: id });
        res.status(200).json(comments);
    }
    catch (error) {
        res.status(500).send("Error al traer los comentarios");
    }
};
exports.getUserComments = getUserComments;
// Trae todos los comentarios de unas publicidad
const getPostComments = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await comment_model_1.default.find({ idPost: id });
        res.status(200).json(comments);
    }
    catch (error) {
        res.status(500).send("Error al traer los comentarios");
    }
};
exports.getPostComments = getPostComments;
// Trae todos los comentarios
const getComments = async (req, res) => {
    try {
        const comments = await comment_model_1.default.find();
        res.status(200).json(comments);
    }
    catch (error) {
        res.status(500).send("Error al traer los comentarios");
    }
};
exports.getComments = getComments;
// Crea un comentario
const createComment = async (req, res) => {
    try {
        const { idUser, idPost, comentario } = req.body;
        const comment = new comment_model_1.default({ idUser, idPost, comentario });
        await comment.save();
        res.status(201).json(comment);
    }
    catch (error) {
        res.status(500).send("Error al crear el comentario");
    }
};
exports.createComment = createComment;
// Trae un comentario
const getComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await comment_model_1.default.findById(id);
        res.status(200).json(comment);
    }
    catch (error) {
        res.status(500).send("Error al obtener el comentario");
    }
};
exports.getComment = getComment;
// Actualiza un comentario
const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { comentario } = req.body;
        const comment = await comment_model_1.default.findByIdAndUpdate(id, { comentario });
        res.status(200).json(comment);
    }
    catch (error) {
        return res.status(404).send("El comentario no existe");
    }
};
exports.updateComment = updateComment;
// Elimina un comentario
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await comment_model_1.default.findByIdAndDelete(id);
        res.status(204).send("Comentario eliminado");
    }
    catch (error) {
        return res.status(404).send("Comentario no encontrado");
    }
};
exports.deleteComment = deleteComment;
