import dbConnect from '@/lib/db';
import Visitor, { IVisitor } from '@/models/Visitor';
import { 
  Users, 
  Eye, 
  Globe, 
  Monitor, 
  Clock, 
  Layout, 
  Smartphone, 
  Tablet, 
  ArrowUpRight 
} from 'lucide-react';
import ResetButton from '@/components/ResetButton';

const formatTimeAgo = (date: Date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (seconds < 5) return 'just now';
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return 'yesterday';
  return `${days}d ago`;
};

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  try {
    await dbConnect();

    const visitorsRaw = await Visitor.find({}).sort({ createdAt: -1 }).limit(50).lean();
    
    // Map Mongoose documents to serializable objects
    const visitors = (visitorsRaw as unknown as IVisitor[]).map((v) => ({
      id: v._id.toString(),
      page: v.page,
      createdAt: v.createdAt,
    }));

    const totalViews = await Visitor.countDocuments();
    
    return (
      <main className="min-h-screen bg-background p-6 md:p-12 font-orbitron">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-on-surface flex items-center gap-2 neon-text-glow">
                <Layout className="w-8 h-8 text-primary" />
                Page Views Counter
              </h1>
              <p className="text-on-surface-variant">Simple visit statistics (Privacy Focused)</p>
            </div>
            <div className="flex items-center gap-3">
              <ResetButton />
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatCard 
              title="Total Page Views" 
              value={totalViews.toLocaleString()} 
              subValue="Cumulative hits" 
              icon={<Eye className="w-5 h-5 text-primary" />} 
            />
            <StatCard 
              title="Tracking Status" 
              value="Anonymous" 
              subValue="No personal data stored" 
              icon={<Users className="w-5 h-5 text-secondary" />} 
            />
          </div>

          {/* Recent Activity */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden glass">
            <div className="p-6 border-b border-outline-variant">
              <h2 className="text-xl font-bold">Recent Page Hits</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface-container text-on-surface-variant text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Page Path</th>
                    <th className="px-6 py-4 font-semibold text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {visitors.map((v) => (
                    <tr key={v.id} className="hover:bg-surface-container-high transition-colors group">
                      <td className="px-6 py-4">
                        <span className="text-primary font-mono text-sm">{v.page}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex flex-col items-end">
                          <span className="text-sm font-medium">{formatTimeAgo(v.createdAt)}</span>
                          <Clock className="w-3 h-3 text-on-surface-variant mt-1" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Dashboard Error:', error);
    return (
      <div className="p-12 text-center text-red-500">
        <h1 className="text-2xl font-bold mb-4">Internal Server Error</h1>
        <p>Could not load statistics.</p>
      </div>
    );
  }
}


function StatCard({ title, value, subValue, icon }: { title: string; value: string; subValue: string; icon: React.ReactNode }) {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant hover:border-primary transition-all duration-300 group glass">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">{title}</span>
        <div className="p-2 rounded-lg bg-surface-container-high group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-2xl font-bold neon-text-glow">{value}</div>
        <div className="text-xs text-on-surface-variant">{subValue}</div>
      </div>
    </div>
  );
}
