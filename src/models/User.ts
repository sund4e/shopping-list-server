import { Model, snakeCaseMappers } from 'objection';

export default class User extends Model {
  public static tableName = 'users';
  public static columnNameMappers = snakeCaseMappers();

  public id!: string;
  public name!: string;
  public email!: string;
  public googleId!: number;
}
