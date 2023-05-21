import { compare } from "bcrypt";
import { Application, Request, Response } from "express";
import jwt from "jsonwebtoken";
import moment from "moment";
import { Op } from "sequelize";
import { v4 } from "uuid";
import { Constant, Errors, Messages } from "../../constants";
import {
  /* DBTransaction, */ JsonResponse,
  randomAlphaNumeric,
  TryCatch,
  validateBody,
} from "../../helper";
import { AuthGuard } from "../../helper/Auth";
import { BaseController } from "../BaseController";
// import { BaseHelper } from '../BaseHelper';
// import { LoggerMd } from '../logger/logger.model';
// import { loggerLevelEnum } from '../logger/logger.types';
import { UserRepository } from "../user/user.repository";
import { authActionEnum, IAuth, IMAuth } from "./auth.types";
import { AuthValidation } from "./auth.validation";
import { AuthRepository } from "./authRepository";

export class AuthController extends BaseController<any, any> {
  // constructor() {
  //     super('auth', new AuthRepository(), ['*'], [['created_at', 'DESC']]);
  //     this.init();
  // };

  register = (express: Application) => express.use("/api/v1/auth", this.router);

  public init() {
    this.router.post(
      "/login",
      validateBody(AuthValidation.login),
      TryCatch.tryCatchGlobe(this.login)
    );
    this.router.post(
      "/register",
      validateBody(AuthValidation.register),
      TryCatch.tryCatchGlobe(this.userRegister)
    );
    this.router.post(
      "/forgot-password",
      validateBody(AuthValidation.forgotPassword),
      TryCatch.tryCatchGlobe(this.forgotPassword)
    );
    // this.router.post('/newlogin', validation.login,TryCatch.tryCatchGlobe(this.login));
    // this.router.post('/newloginverify', validation.loginVerify, TryCatch.tryCatchGlobe(this.loginVerify));
    this.router.post(
      "/change-password",
      AuthGuard,
      validateBody(AuthValidation.changePassword),
      TryCatch.tryCatchGlobe(this.changePassword)
    );
    //  this.router.post('/changepasswordverify', validation.changePasswordVerify, TryCatch.tryCatchGlobe(this.changePasswordVerify));;
    // this.router.post('/forgetpassword', validation.forgetPassword, TryCatch.tryCatchGlobe(this.forgetPassword));
    this.router.post(
      "/email-verification",
      validateBody(AuthValidation.emailVerification),
      TryCatch.tryCatchGlobe(this.emailVerification)
    );
    // this.router.post('/logout',guard, TryCatch.tryCatchGlobe(this.logout))
    this.router.post(
      "/reset-password",
      validateBody(AuthValidation.resetPassword),
      TryCatch.tryCatchGlobe(this.resetPassword)
    );
  }

  login = async (req: Request, res: Response): Promise<void> => {
    // const { email, password } = req.body
    // // const ip = req.connection.remoteAddress || req.socket.remoteAddress
    // const userData = await new UserRepository().findOneBR({ where: { email }, attributes: ['user_id', 'email', 'password', 'first_name', 'last_name'] })
    // if (!userData) { throw new Error("Invalid Email Id") }
    // const comparePassword = await compare(password, userData?.password!)
    // if (!comparePassword) {
    //     throw new Error("Incorrect Password")
    // }
    // const { user_id, first_name, last_name }: any = userData
    // delete userData.password
    // const token = jwt.sign({ ...userData }, Constant.jwt_key);
    // res.locals.data = token
    // new AuthRepository().createOneBR({ newData: { ip: '192.168.0.1', action: authActionEnum.login, token, user_id: user_id }, created_by: user_id })
    // res.locals = { status: true, message: Messages.SUCCESSFULLY_LOGIN, data: { token, user: { user_id, email, first_name, last_name } } };
    // return JsonResponse.jsonSuccess(req, res, "login")
  };

  changePassword = async (req: Request, res: Response): Promise<void> => {
    // const { user: { user_id }, body: { email, oldPassword, newPassword } }: any = req
    // if (oldPassword == newPassword) throw new Error(Errors.OLD_AND_NEW_PASSWORD_CANNOT_BE_SAME);
    // const userRepo = new UserRepository()
    // const user = await userRepo.findOneBR({ where: { email, user_id }, attributes: ['user_id', 'email', 'password'] })
    // if (!user) throw new Error(Errors.INVALID_EMAIL_ID);
    // const compareOldPassword = await compare(oldPassword, user.password)
    // if (!compareOldPassword) throw new Error(Errors.INVALID_OLD_PASSWORD);
    // await userRepo.updateByIdBR({ id: user.user_id, newData: { password: newPassword }, updated_by: user_id })
    // new AuthRepository().createOneBR({ newData: { ip: '192.168.0.1', action: authActionEnum.change_pass, user_id: user_id }, created_by: user_id })
    // res.locals = { status: true, message: Messages.PASSWORD_CHANGED_SUCCESSFULLY }
    // return JsonResponse.jsonSuccess(req, res, "change password")
  };

  userRegister = async (req: Request, res: Response): Promise<void> => {
    // const id = v4()
    // const { transaction, body, body: { email, mobile, first_name } }: any = req
    // const userData = await new UserRepository().findOneBR({ where: { [Op.or]: [{ email }, { mobile: mobile.toString() }] }, attributes: ['user_id', 'email', 'mobile'] })
    // if (userData?.email == email) { throw new Error("Email In Use") }
    // if (userData?.mobile == mobile) { throw new Error("Number In Use") }
    // const otp = randomAlphaNumeric(8)
    // await Promise.all([
    //     await new UserRepository().createOneBR({ newData: { ...body, user_id: id }, created_by: id, transaction }),
    //     await new AuthRepository().createOneBR({ newData: { ip: '192.168.0.1', action: authActionEnum.register, user_id: id, token: otp }, created_by: id, transaction }),
    // ]);
    // // new BaseHelper().sendEmail({ template_name: "user_registration", to: email, paramsVariable: { OTP: otp, NAME: first_name } })
    // res.locals = { status: true, message: Messages.SUCCESSFULLY_REGISTERED }
    // return JsonResponse.jsonSuccess(req, res, "register");
  };

  emailVerification = async (req: Request, res: Response): Promise<void> => {
    // const { email, otp, transaction } = req.body
    // const userRepo = new UserRepository();
    // const authRepo = new AuthRepository();
    // const user = await userRepo.findOneBR({ where: { email }, attributes: ["user_id"] });
    // if (!user) throw new Error("Invalid Email!!");
    // const verify = await authRepo.findOneBR({ where: { user_id: user.user_id, token: otp, action: authActionEnum.register }, attributes: ["auth_id"] });
    // if (!verify) throw new Error("Invalid email or otp");
    // await Promise.all([
    //     authRepo.updateByIdBR({ id: verify.auth_id, newData: { is_active: false }, updated_by: user.user_id, transaction }),
    //     userRepo.updateByIdBR({ id: user.user_id, newData: { email_verified_at: new Date() }, updated_by: user.user_id, transaction })
    // ])
    // res.locals = { status: true, message: Messages.SUCCESS };
    // return await JsonResponse.jsonSuccess(req, res, "emailVerification");
  };

  forgotPassword = async (req: Request, res: Response): Promise<void> => {
    // const { email } = req.body
    // const user = await new UserRepository().findOneBR({ where: { email }, attributes: ["user_id", 'first_name'] });
    // if (!user) throw new Error("Invalid Email");
    // const auth = await new AuthRepository().findOneBR({ where: { action: authActionEnum.forgot_pass, user_id: user.user_id, created_at: { [Op.gte]: moment().subtract(600, "seconds") } } });
    // if (auth) throw new Error("Already Sent Email");
    // const otp = randomAlphaNumeric(8)
    // await new AuthRepository().createOneBR({ newData: { ip: "192.168.0.1", action: authActionEnum.forgot_pass, user_id: user.user_id, token: otp }, created_by: user.user_id });
    // // new BaseHelper().sendEmail({ template_name: "forgot_password", to: email, paramsVariable: { OTP: otp, NAME: user.first_name } }).catch(err => {
    // //     const { body, originalUrl, method, query, params }: any = req
    // //     const userId = (req as any).user?.user_id || v4()
    // //     const updated_by = userId
    // //     const created_by = userId
    // //     const [, , , module,] = originalUrl.split('/')
    // //     //LoggerMd.create({ url: originalUrl, method, query: JSON.stringify(query), params: JSON.stringify(params), body: JSON.stringify(body), stack: JSON.stringify(err.stack), module, level: loggerLevelEnum.email, message: JSON.stringify(err.message), updated_by, created_by }).catch((e: any) => console.error(e, " Failed logging"))
    // // })
    // res.locals = { status: true, message: Messages.OTP_SENT_SUCCESSFULLY };
    // return await JsonResponse.jsonSuccess(req, res, "forgot Password");
  };

  resetPassword = async (req: Request, res: Response): Promise<void> => {
    // const { email, otp, password } = req.body
    // const userRepo = new UserRepository(), authRepo = new AuthRepository()
    // const user = await userRepo.findOneBR({ where: { email }, attributes: ['user_id', "first_name"] });
    // if (!user) throw new Error("Invalid Email!!");
    // const auth = await authRepo.findOneBR({ where: { user_id: user.user_id, token: otp, created_at: { [Op.gte]: moment().subtract(300, "seconds") } } })
    // if (!auth) throw new Error("Invalid email or otp");
    // await Promise.all([
    //     authRepo.updateByIdBR({ id: auth.auth_id, newData: { is_active: false }, updated_by: user.user_id }),
    //     userRepo.updateByIdBR({ id: user.user_id, newData: { password }, updated_by: user.user_id })
    // ]);
    // res.locals = { status: true, message: Messages.PASSWORD_RESET_SUCCESS_PLEASE_LOGIN_WITH_YOUR_NEW_PASSWORD };
    // return await JsonResponse.jsonSuccess(req, res, "resetPassword");
  };
}
