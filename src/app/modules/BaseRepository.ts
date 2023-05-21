import { Model, Types } from "mongoose";
import { Constant } from "../constants";
import { TCreateOneBR, TDeleteByIdBR, TFindOneBR } from "./baseTypes";

export class BaseRepository<
  T extends { _id: Types.ObjectId; updated_at: Date },
  U extends Model<T>
> {
  //   implements IWrite<T>, IRead<T>
  protected readonly pageNumber = Constant.DEFAULT_PAGE_NUMBER;
  public readonly primary_key: string = "_id";

  protected constructor(
    public readonly _model: U,
    // public readonly attributes: NonEmptyArray<(keyof T & string) | "*"> = [
    public readonly attributes: string = "updated_at",
    public readonly sort: Record<keyof T, 1 | -1> | Record<"updated_at", -1> = {
      updated_at: -1,
    },
    public readonly include: object[] = []
  ) {}

  indexBR = async ({
    where = {},
    attributes = this.attributes,

    sort = this.sort,
    pageNumber = Constant.DEFAULT_PAGE_NUMBER,
    pageSize = Constant.DEFAULT_PAGE_SIZE,
  }): Promise<any> => {
    let offset,
      limit,
      totalPage = 0,
      hasNextPage = false;

    const count = await this._model.find(where).countDocuments();

    //calculate pagination.
    totalPage =
      count % pageSize === 0 ? count / pageSize : Math.ceil(count / pageSize);
    offset = (pageNumber - 1) * pageSize;
    limit = pageNumber * pageSize;
    if (limit < count) hasNextPage = true;

    // todo use aggregation and $facet query to execute all calculation in single query.
    const data = await this._model
      .find(where)
      .select(attributes)
      .sort(sort)
      .skip(offset)
      .limit(limit);

    return {
      data,
      page: {
        hasNextPage,
        count,
        currentPage: pageNumber,
        totalPage,
      },
    };
  };

  findAllBR = async ({
    where = {},
    attributes = this.attributes,
    order = this.sort,
    offset = 0,
    limit = 10,
  }) => {
    //@ts-expect-error
    where["deleted_at"] === undefined &&
      //@ts-expect-error
      (where["deleted_at"] = null);

    return await this._model.find(where, attributes, {
      sort: order,
      offset,
      limit,
    });
  };

  findOneBR = async ({
    where = {},
    attributes = this.attributes,
  }: TFindOneBR<T>) => {
    where["deleted_at"] === undefined && (where["deleted_at"] = null);
    return await this._model.findOne(where, attributes);
  };

  //   findByIdBR = async ({
  //     id,
  //     attributes = this.attributes,
  //     include = this.include,
  //     raw = true,
  //     transaction,
  //   }: TFindByIdBR): Promise<U | null> => {
  //     return await this.findOneBR({
  //       where: { [this.primary_key]: id },
  //       attributes,
  //       include,
  //       raw,
  //       transaction,
  //     });
  //   };

  //   createBulkBR = async ({
  //     newData,
  //     created_by,
  //     transaction,
  //   }: TCreateBulkBR<T>): Promise<U[]> => {
  //     for (let i = 0; i < newData.length; i++) {
  //       //@ts-expect-error
  //       newData[i].created_by = created_by;
  //       //@ts-expect-error
  //       newData[i].updated_by = created_by;
  //     }
  //     return await this._model.bulkCreate(
  //       newData as unknown as CreationAttributes<U>[],
  //       { transaction }
  //     );
  //   };

  createOneBR = async ({
    newData,
    created_by,
  }: TCreateOneBR<T>): Promise<T> => {
    return await this._model.create({
      ...newData,
      created_by,
      updated_by: created_by,
    });
  };

  //   updateBulkBR = async ({
  //     where,
  //     newData,
  //     updated_by,
  //     transaction,
  //   }: TUpdateBulkBR<U>): Promise<{ count: number; data: U[] }> => {
  //     //@ts-expect-error
  //     newData.updated_by = updated_by;
  //     //@ts-expect-error
  //     const data = await this._model.update(newData, {
  //       where,
  //       returning: true,
  //       transaction,
  //     });
  //     return { count: data[0], data: data[1] || [] };
  //   };

  //   updateByIdBR = async ({
  //     id,
  //     newData,
  //     updated_by,
  //     transaction,
  //   }: TUpdateByIdBR<U>): Promise<{ count: number; data?: U }> => {
  //     //@ts-expect-error
  //     const { count, data } = await this.updateBulkBR({
  //       where: { [this.primary_key]: id },
  //       newData,
  //       updated_by,
  //       transaction,
  //     });
  //     return { count, data: data[0] };
  //   };

  // deleteBulkBR = async ({
  //   where,
  //   deleted_by,
  //   delete_reason,
  //   transaction,
  // }: TDeleteBulkBR<U>): Promise<number> => {
  //   // @ts-expect-error
  //   const [data] = await this._model.update(
  //     { deleted_by, delete_reason, deleted_at: new Date() },
  //     { where, transaction, silent: true }
  //   );
  //   return data;
  // };

  deleteByIdBR = async ({ _id, deleted_by }: TDeleteByIdBR) => {
    return await this._model.updateOne(
      {
        _id,
        created_by: deleted_by,
      },
      {
        deleted_by: deleted_by,
        deleted_at: new Date(),
      } as any
    );
  };

  // deleteOneBR = async ({ where, deleted_by, delete_reason, transaction }: TDeleteOneBR): Promise<number> => {
  //     return await this.deleteBulkBR({ where, deleted_by, delete_reason, transaction })
  // };

  //   restoreBulkBR = async ({
  //     where,
  //     transaction,
  //   }: TRestoreBulkBR<U>): Promise<void> => {
  //     return await this._model.restore({ where, transaction });
  //   };

  //   restoreByIdBR = async ({
  //     id,
  //     transaction,
  //   }: TRestoreByIdBR): Promise<void> => {
  //     return await this.restoreBulkBR({
  //       where: { [this.primary_key]: id },
  //       transaction,
  //     });
  //   };

  //   CountBR = async ({
  //     where = {},
  //     include = [],
  //   }: {
  //     where?: Partial<U["_attributes"]>;
  //     include?: any[];
  //   }): Promise<number> => {
  //     //@ts-expect-error
  //     where["is_active"] === undefined && (where["is_active"] = true);
  //     //@ts-expect-error
  //     return await this._model.count({ where, include });
  //   };

  //   CountAllBR = async ({
  //     where = {},
  //     include = [],
  //   }: {
  //     where?: Partial<U["_attributes"]>;
  //     include?: any[];
  //   }): Promise<number> => {
  //     return await this.CountBR({ where, include });
  //   };

  //   findColumnMinMax = async ({
  //     columnName,
  //   }: {
  //     columnName: keyof T & string;
  //   }) => {
  //     const [minMax] = await this._model.findAll({
  //       // attributes: [
  //       //     [fn('max', col(columnName)), 'max'],
  //       //     [fn('min', col(columnName)), 'min'],
  //       // ]
  //     });
  //     return minMax || { min: 0, max: 0 };
  //   };
}
