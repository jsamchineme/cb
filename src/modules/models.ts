import User from './user/model';

// import all models from their respective domains
type DB = {
  User: any;
}


const db: DB = {
  User: User,
};

User.initialise(db);

export default db;