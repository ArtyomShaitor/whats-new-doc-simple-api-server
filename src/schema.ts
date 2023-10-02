import * as mongoose from 'mongoose';

const changeLogHistorySchema = new mongoose.Schema({
  changelog: { type: {}, required: true }
}, { timestamps: true });

export type ChangeLogHistory = mongoose.InferSchemaType<typeof changeLogHistorySchema>;
export const ChangeLogHistory = mongoose.model('ChangeLogHistory', changeLogHistorySchema);
