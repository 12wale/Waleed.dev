import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';
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
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  try {
    await dbConnect();

    const visitorsRaw = await Visitor.find({}).sort({ createdAt: -1 }).limit(100).lean();
    
    // Map Mongoose documents to serializable objects
    const visitors = visitorsRaw.map((v: any) => ({
      id: v._id.toString(),
      ip: v.ip,
      country: v.country,
      city: v.city,
      flag: v.flag,
      browser: v.browser,
      device: v.device,
      page: v.page,
      createdAt: v.createdAt,
    }));

    const totalViews = await Visitor.countDocuments();
    
    // Unique visitors by IP
    const uniqueIPs = await Visitor.distinct('ip');
    const uniqueVisitorsCount = uniqueIPs.length;

    // Top Country
    const countryStats = await Visitor.aggregate([
      { $group: { _id: { country: "$country", flag: "$flag" }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);
    
    const topCountry = countryStats[0]?._id?.country || 'Unknown';
    const topCountryFlag = countryStats[0]?._id?.flag || '🌐';
    const topCountryCount = countryStats[0]?.count || 0;
    const topCountryPercent = totalViews > 0 ? Math.round((topCountryCount / totalViews) * 100) : 0;

    // Top Device
    const deviceStats = await Visitor.aggregate([
      { $group: { _id: "$device", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);
    
    const topDevice = deviceStats[0]?._id || 'Desktop';
    const topDeviceCount = deviceStats[0]?.count || 0;
    const topDevicePercent = totalViews > 0 ? Math.round((topDeviceCount / totalViews) * 100) : 0;

    return (
      <main className="min-h-screen bg-background p-6 md:p-12 font-orbitron">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-on-surface flex items-center gap-2 neon-text-glow">
                <Layout className="w-8 h-8 text-primary" />
                Visitor Insights
              </h1>
              <p className="text-on-surface-variant">Real-time portfolio analytics</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium">Live Tracking Active</span>
              </div>
              <ResetButton />
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              title="Total views" 
              value={totalViews.toLocaleString()} 
              subValue="+12% this week" 
              icon={<Eye className="w-5 h-5 text-primary" />} 
            />
            <StatCard 
              title="Unique visitors" 
              value={uniqueVisitorsCount.toLocaleString()} 
              subValue="last 30 days" 
              icon={<Users className="w-5 h-5 text-secondary" />} 
            />
            <StatCard 
              title="Top country" 
              value={`${topCountryFlag} ${topCountry}`} 
              subValue={`${topCountryPercent}% of visits`} 
              icon={<Globe className="w-5 h-5 text-tertiary" />} 
            />
            <StatCard 
              title="Top device" 
              value={topDevice} 
              subValue={`${topDevicePercent}% of visits`} 
              icon={topDevice === 'Mobile' ? <Smartphone className="w-5 h-5 text-primary" /> : <Monitor className="w-5 h-5 text-primary" />} 
            />
          </div>

          {/* Recent Visitors Table */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden glass">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <h2 className="text-xl font-bold">Recent visitors</h2>
              <button className="text-sm text-primary hover:underline flex items-center gap-1">
                View all <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface-container text-on-surface-variant text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Location</th>
                    <th className="px-6 py-4 font-semibold">Device / Browser</th>
                    <th className="px-6 py-4 font-semibold">Page</th>
                    <th className="px-6 py-4 font-semibold text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {visitors.map((v: any) => (
                    <tr key={v.id} className="hover:bg-surface-container-high transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-sm text-primary border border-outline-variant group-hover:border-primary transition-colors">
                            {v.ip.split('.').pop()?.slice(-2) || '??'}
                          </div>
                          <div>
                            <div className="flex items-center gap-1 font-bold">
                              <span>{v.flag}</span>
                              <span>{v.city}, {v.country}</span>
                            </div>
                            <div className="text-xs text-on-surface-variant font-mono">{v.ip}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                            {v.device === 'Mobile' ? <Smartphone className="w-3 h-3 mr-1" /> : <Monitor className="w-3 h-3 mr-1" />}
                            {v.device}
                          </div>
                          <div className="text-xs text-on-surface-variant ml-1">{v.browser}</div>
                        </div>
                      </td>
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
        <p>Could not load analytics. Please check your MONGODB_URI.</p>
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
