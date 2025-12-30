import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Zap, CheckCircle2, BarChart3, Activity } from 'lucide-react';

export const CTASection = () => {
  // Multiple data series for different metrics
  const [revenueData, setRevenueData] = useState(
    Array.from({ length: 20 }, (_, i) => 45 + Math.sin(i * 0.3) * 20 + Math.random() * 10)
  );
  const [transactionData, setTransactionData] = useState(
    Array.from({ length: 20 }, (_, i) => 55 + Math.cos(i * 0.4) * 15 + Math.random() * 8)
  );
  const [growthData, setGrowthData] = useState(
    Array.from({ length: 20 }, (_, i) => 40 + Math.sin(i * 0.5) * 25 + Math.random() * 12)
  );

  const [metrics, setMetrics] = useState({
    revenue: 128000,
    transactions: 24500,
    growth: 34,
    users: 12800
  });

  // Typing animation state
  const [typingText, setTypingText] = useState('');
  const fullText = 'Ready to transform your financial infrastructure?';
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50); // Speed of typing (50ms per character)
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Real-time line chart animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Update revenue line
      setRevenueData(prev => {
        const newData = [...prev.slice(1)];
        const lastValue = prev[prev.length - 1];
        const newValue = Math.max(20, Math.min(90, lastValue + (Math.random() - 0.5) * 10));
        newData.push(newValue);
        return newData;
      });

      // Update transaction line
      setTransactionData(prev => {
        const newData = [...prev.slice(1)];
        const lastValue = prev[prev.length - 1];
        const newValue = Math.max(25, Math.min(85, lastValue + (Math.random() - 0.5) * 8));
        newData.push(newValue);
        return newData;
      });

      // Update growth line
      setGrowthData(prev => {
        const newData = [...prev.slice(1)];
        const lastValue = prev[prev.length - 1];
        const newValue = Math.max(15, Math.min(88, lastValue + (Math.random() - 0.5) * 12));
        newData.push(newValue);
        return newData;
      });

      // Update metrics
      setMetrics(prev => ({
        revenue: prev.revenue + (Math.random() - 0.5) * 150,
        transactions: prev.transactions + Math.floor((Math.random() - 0.5) * 10),
        growth: Math.max(30, Math.min(38, prev.growth + (Math.random() - 0.5) * 0.2)),
        users: prev.users + Math.floor((Math.random() - 0.5) * 8)
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`;
    return `$${num.toFixed(0)}`;
  };

  // Generate SVG path for smooth line
  const generatePath = (data, height, width) => {
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - (value / 100) * height;
      return { x, y };
    });

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const xMid = (points[i].x + points[i + 1].x) / 2;
      const yMid = (points[i].y + points[i + 1].y) / 2;
      const cpX1 = (xMid + points[i].x) / 2;
      const cpX2 = (xMid + points[i + 1].x) / 2;
      path += ` Q ${cpX1} ${points[i].y}, ${xMid} ${yMid}`;
      path += ` Q ${cpX2} ${points[i + 1].y}, ${points[i + 1].x} ${points[i + 1].y}`;
    }

    return path;
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/40">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(147, 51, 234, 0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight min-h-[160px] md:min-h-[180px]">
              <span className="text-gray-900">
                {typingText.split(' ').map((word, index) => {
                  const words = typingText.split(' ');
                  const isColored = word === 'transform' || word === 'your' || word === 'financial' || word === 'infrastructure?';

                  if (isColored) {
                    return (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-red-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
                      >
                        {word}{index < words.length - 1 ? ' ' : ''}
                      </span>
                    );
                  }
                  return (
                    <span key={index}>
                      {word}{index < words.length - 1 ? ' ' : ''}
                    </span>
                  );
                })}
              </span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Join 500+ enterprises already scaling their fintech operations with NWB.
              Get started in minutes with our developer-first platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
              <button className="group px-10 py-5 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-300 hover:shadow-purple-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3">
                Start Free Trial
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white text-gray-800 border-3 border-gray-800 rounded-2xl font-bold text-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 hover:scale-105 shadow-lg">
                Talk to Sales
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-base text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Analytics Dashboard Mockup */}
          <div className="relative">
            {/* Soft shadow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/20 to-transparent blur-3xl -z-10 translate-y-12" />

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-white rounded-lg text-sm text-gray-600 border border-gray-200">
                    analytics.NWB.com
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8 bg-gradient-to-br from-white to-gray-50/50">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Financial Analytics</h3>
                    <p className="text-gray-600">Real-time insights & predictions</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-green-700">Live Data</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Revenue', value: formatNumber(metrics.revenue), change: '+24%', gradient: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-50 to-cyan-50', icon: TrendingUp },
                    { label: 'Transactions', value: `${(metrics.transactions / 1000).toFixed(1)}K`, change: '+18%', gradient: 'from-indigo-500 to-purple-500', bgGradient: 'from-indigo-50 to-purple-50', icon: Activity },
                    { label: 'Growth Rate', value: `${metrics.growth.toFixed(1)}%`, change: '+12%', gradient: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-50 to-pink-50', icon: BarChart3 },
                    { label: 'Active Users', value: `${(metrics.users / 1000).toFixed(1)}K`, change: '+8%', gradient: 'from-green-500 to-emerald-500', bgGradient: 'from-green-50 to-emerald-50', icon: CheckCircle2 }
                  ].map((metric, i) => (
                    <div
                      key={i}
                      className={`group relative p-6 bg-gradient-to-br ${metric.bgGradient} rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden`}
                    >
                      <div className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-600 text-sm font-medium">{metric.label}</span>
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${metric.gradient}`}>
                            <metric.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2 transition-all duration-300">{metric.value}</div>
                        <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Section */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-gray-900">Revenue Trends</h4>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow-sm">
                        30 Days
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                        90 Days
                      </button>
                    </div>
                  </div>

                  {/* Chart Legend */}
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      <span className="text-sm text-gray-600 font-medium">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      <span className="text-sm text-gray-600 font-medium">Transactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                      <span className="text-sm text-gray-600 font-medium">Growth</span>
                    </div>
                  </div>

                  {/* Multi-Line Chart Visualization */}
                  <div className="relative h-80">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-gray-500 pr-2">
                      <span>$200K</span>
                      <span>$150K</span>
                      <span>$100K</span>
                      <span>$50K</span>
                      <span>$0</span>
                    </div>

                    {/* Chart area */}
                    <div className="ml-12 mr-4 h-full pb-8 relative">
                      {/* Horizontal grid lines */}
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="absolute left-0 right-0 border-t border-gray-200"
                          style={{ top: `${i * 25}%` }}
                        />
                      ))}

                      {/* SVG for animated lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ height: 'calc(100% - 32px)' }}>
                        <defs>
                          {/* Gradients for lines */}
                          <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                          <linearGradient id="transactionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                          <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>

                          {/* Area gradients */}
                          <linearGradient id="revenueAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="transactionAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="growthAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Revenue line with area */}
                        <path
                          d={`${generatePath(revenueData, 280, 900)} L 900 280 L 0 280 Z`}
                          fill="url(#revenueAreaGradient)"
                          className="transition-all duration-500 ease-out"
                        />
                        <path
                          d={generatePath(revenueData, 280, 900)}
                          stroke="url(#revenueGradient)"
                          strokeWidth="3"
                          fill="none"
                          className="transition-all duration-500 ease-out"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))'
                          }}
                        />

                        {/* Transaction line with area */}
                        <path
                          d={`${generatePath(transactionData, 280, 900)} L 900 280 L 0 280 Z`}
                          fill="url(#transactionAreaGradient)"
                          className="transition-all duration-500 ease-out"
                        />
                        <path
                          d={generatePath(transactionData, 280, 900)}
                          stroke="url(#transactionGradient)"
                          strokeWidth="3"
                          fill="none"
                          className="transition-all duration-500 ease-out"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(168, 85, 247, 0.3))'
                          }}
                        />

                        {/* Growth line with area */}
                        <path
                          d={`${generatePath(growthData, 280, 900)} L 900 280 L 0 280 Z`}
                          fill="url(#growthAreaGradient)"
                          className="transition-all duration-500 ease-out"
                        />
                        <path
                          d={generatePath(growthData, 280, 900)}
                          stroke="url(#growthGradient)"
                          strokeWidth="3"
                          fill="none"
                          className="transition-all duration-500 ease-out"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(34, 197, 94, 0.3))'
                          }}
                        />

                        {/* Animated dots at the end of each line */}
                        {[
                          { data: revenueData, color: '#3b82f6' },
                          { data: transactionData, color: '#a855f7' },
                          { data: growthData, color: '#22c55e' }
                        ].map((line, i) => {
                          const lastValue = line.data[line.data.length - 1];
                          const y = 280 - (lastValue / 100) * 280;
                          return (
                            <g key={i}>
                              <circle
                                cx="900"
                                cy={y}
                                r="6"
                                fill={line.color}
                                className="transition-all duration-500 ease-out"
                              >
                                <animate
                                  attributeName="r"
                                  values="6;8;6"
                                  dur="2s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                              <circle
                                cx="900"
                                cy={y}
                                r="4"
                                fill="white"
                                className="transition-all duration-500 ease-out"
                              />
                            </g>
                          );
                        })}
                      </svg>
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-12 right-4 flex justify-between text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { icon: '📊', label: 'Avg Transaction', value: '$156', gradient: 'from-blue-100 to-cyan-100', border: 'border-blue-200' },
                    { icon: '⚡', label: 'Processing Speed', value: '0.3s', gradient: 'from-amber-100 to-orange-100', border: 'border-orange-200' },
                    { icon: '✓', label: 'Success Rate', value: '99.8%', gradient: 'from-green-100 to-emerald-100', border: 'border-green-200' }
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`p-6 bg-gradient-to-br ${stat.gradient} rounded-2xl border ${stat.border} text-center hover:scale-105 transition-transform duration-300 shadow-sm`}
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-sm text-gray-600 font-medium mb-1">{stat.label}</div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>



            <div className="absolute -left-4 bottom-32 bg-white px-4 py-3 rounded-xl border-2 border-orange-200 shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-500" />
                <div className="text-sm">
                  <div className="font-bold text-gray-900">Real-time</div>
                  <div className="text-orange-600 text-xs font-semibold">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;