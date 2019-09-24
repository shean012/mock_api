import * as mongoose from 'mongoose';
interface MongoConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  pwd: string;
}

class MongoDBService {

  private config: MongoConfig = null;

  constructor() {
    this.config = this.setMongoDBConfig();
    return this;
  }

  public connection() {
    let {
      user,
      host,
      pwd,
      database,
      port
    } = this.config;
    mongoose.connect(`mongodb://${user}:${pwd}@${host}:${port}/${database}`, {
      useCreateIndex: true,
      useNewUrlParser: true
    }, (err) => {
      if (err) {
        console.error('connect to %s error: ', err.message);
        process.exit(1);
      } else console.log('connect to mongo db')
    });
  }

  public close() {
    mongoose.connection.close();
  }

  private setMongoDBConfig(): MongoConfig {
    return {
      host: '152.32.135.147',
      port: 27017,
      database: 'test',
      user: 'shean',
      pwd: 'shean012'
    }
  }
}

export const mongoService = new MongoDBService();
