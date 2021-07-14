import { Association, Model, DataTypes, Op } from 'sequelize';
import sequelize from 'src/database/sequelize';
import hashPassword from 'src/utils/hashPassword';
import * as bcrypt from 'bcryptjs';

enum Status {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
}

export default class User extends Model {
  public id!: number;
  public first_name!: string | null;
  public last_name!: string | null;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  public static initialise: (models: any) => void;

  public static associations: {
    posts: Association<User>;
  };

  public static getByField: (field, value) => Promise<User>;
  public static hasCorrectPassword: (password, user) => boolean;
  public static createUser: (data) => Promise<User>;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  tableName: 'users',
  sequelize,
  scopes: {
    byField({ field, value }) {
      return {
        where: {
          [field]: {
            [Op.eq]: value,
          },
        },
      };
    },
  },
});

User.getByField = (field, value) => User.scope({ method: ['byField', { field, value }] }).findOne();

User.hasCorrectPassword = (password, user) => {
  return bcrypt.compareSync(password, user.password);
};

User.createUser = async (data): Promise<User> => {
  const newUser = await User.create({
    ...data,
    password: hashPassword(data.password),
  });
  return newUser;
};

User.initialise = (models) => {};
