"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const user_services_1 = require("../services/user.services");
const user_controllers_1 = require("../controllers/user.controllers");
const validateBody_middlewares_1 = require("../middlewares/validateBody.middlewares");
const user_schemas_1 = require("../schemas/user.schemas");
const validateToken_middlewares_1 = require("../middlewares/validateToken.middlewares");
tsyringe_1.container.registerSingleton("UserServices", user_services_1.UserServices);
const userControllers = tsyringe_1.container.resolve(user_controllers_1.UserControllers);
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", validateBody_middlewares_1.ValidateBody.execute(user_schemas_1.userRegisterBodySchema), (req, res) => {
    userControllers.register(req, res);
});
exports.userRouter.post("/login", validateBody_middlewares_1.ValidateBody.execute(user_schemas_1.userLoginBodySchema), (req, res) => {
    userControllers.login(req, res);
});
exports.userRouter.get("/", validateToken_middlewares_1.ValidateToken.execute, (req, res) => {
    userControllers.getUser(req, res);
});
