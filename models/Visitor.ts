import mongoose from 'mongoose';

export interface IVisitor extends mongoose.Document {
  ip: string;
  country: string;
  city: string;
  flag: string;
  browser: string;
  device: string;
  page: string;
  lat: number | null;
  lon: number | null;
  createdAt: Date;
}

const VisitorSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  country: { type: String, default: 'Unknown' },
  city: { type: String, default: 'Unknown' },
  flag: { type: String, default: '🌐' },
  browser: { type: String, default: 'Unknown' },
  device: { type: String, default: 'Desktop' },
  page: { type: String, default: '/' },
  lat: { type: Number, default: null },
  lon: { type: Number, default: null },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Visitor || mongoose.model<IVisitor>('Visitor', VisitorSchema);
