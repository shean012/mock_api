import { Document, model, Schema } from 'mongoose';

interface TestModel extends Document {}

const test: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

test.plugin(require('@meanie/mongoose-to-json'));

export default model<TestModel>('PublicAcountToken', test);
