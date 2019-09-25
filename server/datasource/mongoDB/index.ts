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
      useUnifiedTopology: true,
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
      host: 'www.shean.net.cn',
      port: 27017,
      database: 'testDB',
      user: 'shean',
      pwd: 'shean012'
    }
  }
}

export const mongoService = new MongoDBService();
