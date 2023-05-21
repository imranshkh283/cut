import { Types } from "mongoose";
import { IUser } from "../user/user.types";

export interface IComments {
  _id: string;
  comment: string;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
}

export enum TodoStatus {
  PENDIND = "PENDING",
  COMPLETED = "COMPLETED",
}

export interface ITodo {
  _id: Types.ObjectId;
  title: string;
  description: string;
  status: TodoStatus;
  commentIds: string[];
  comments: IComments[];
  created_by: IUser["_id"];
  created_at: Date;
  updated_by: IUser["_id"];
  updated_at: Date;
  deleted_by?: IUser["_id"];
  deleted_at?: Date;
}
