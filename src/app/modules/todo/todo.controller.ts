import { Application, Request, Response } from "express";
import { Messages } from "../../constants";
import { AuthGuard, JsonResponse, TryCatch } from "../../helper";
import { BaseController } from "../BaseController";
import { TodoRepository } from "./todo.repository";
import { ITodo } from "./todo.types";
import { TodoModel } from "./todo.model";
import { BaseValidation } from "../BaseValidation";

export class TodoController extends BaseController<
  ITodo,
  typeof TodoModel,
  TodoRepository
> {
  constructor() {
    super(
      "todo",
      new TodoRepository(),
      "_id title description status created_by updated_by",
      { updated_at: -1 }
    );

    this.init();
  }

  register = (express: Application) =>
    express.use(`/api/v1/${this.url}`, this.router);

  init() {
    this.router.get("/", TryCatch.tryCatchGlobe(this.index));
    this.router.post("/", AuthGuard, TryCatch.tryCatchGlobe(this.createOne)); //todo implement validation.
    this.router.delete(
      "/:id",
      AuthGuard,
      TryCatch.tryCatchGlobe(this.deleteByIdBC)
    );
  }

  index = async (req: Request, res: Response): Promise<void> => {
    await BaseValidation.index.validateAsync(req.query);

    let {
      where,
      attributes,
      order: sort,
      pageSize,
      pageNumber,
    }: any = req.query;

    where ||= {};
    sort ||= this.sort;
    attributes ||= this.attributes;
    pageNumber ||= this.pageNumber;
    pageSize ||= this.pageSize;

    const { page, data } = await this.repo.index({
      where,
      attributes,
      sort,
      pageNumber,
      pageSize,
    });
    res.locals = {
      status: true,
      page,
      data,
      message: Messages.FETCH_SUCCESSFUL,
    };
    return await JsonResponse.jsonSuccess(req, res, `{this.url}.indexBC`);
  };

  createOne = async (req: Request, res: Response): Promise<void> => {
    const {
      body,
      user: { _id },
    }: any = req;

    const data = await this.repo.createOneBR({
      newData: body,
      created_by: _id,
    });
    res.locals = {
      status: true,
      message: Messages.CREATE_SUCCESSFUL,
      data,
    };
    return await JsonResponse.jsonSuccess(req, res, `createOneBC`);
  };
}
