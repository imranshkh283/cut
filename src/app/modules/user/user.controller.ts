import {Application, Request, Response} from "express";
import {Messages} from "../../constants";
import {JsonResponse, TryCatch, validateBody} from "../../helper";
import {BaseController} from "../BaseController";
import {UserRepository} from "./user.repository";
import {IUser} from "./user.types";
import {UserModel} from "./user.model";
import {AuthValidation} from "../auth/auth.validation";

export class UserController extends BaseController<
    IUser,
    typeof UserModel,
    UserRepository
> {
    constructor() {
        super("user", new UserRepository(), "_id", {updated_at: -1});

        this.init();
    }

    register = (express: Application) =>
        express.use(`/api/v1/${this.url}`, this.router);

    init() {
        this.router.post(
            "/login",
            validateBody(AuthValidation.login),
            TryCatch.tryCatchGlobe(this.login)
        );

        this.router.post(
            "/sign-in",
            validateBody(AuthValidation.register),
            TryCatch.tryCatchGlobe(this.signIn)
        );
    }

    signIn = async (req: Request, res: Response): Promise<void> => {
        const {body} = req as any;
        const data = await this.repo.signIn(body);
        res.locals = {
            data,
            status: true,
            message: Messages.CREATE_SUCCESSFUL,
        };

        return await JsonResponse.jsonSuccess(req, res, `test`);
    };

    login = async (req: Request, res: Response): Promise<void> => {
        const {body} = req as any;

        const data = await this.repo.login(body);
        res.locals = {
            data,
            status: true,
            message: Messages.CREATE_SUCCESSFUL,
        };

        return await JsonResponse.jsonSuccess(req, res, `test`);
    };
}
