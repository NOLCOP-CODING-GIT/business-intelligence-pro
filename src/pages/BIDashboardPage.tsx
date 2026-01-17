import React, { useState, useRef } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  Activity,
  Brain,
  Download,
  Zap,
  Target,
  Shield,
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const BIDashboardPage = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [timeRange, setTimeRange] = useState("1D");
  const [selectedAsset, setSelectedAsset] = useState("BTC");

  // Données de trading simulées
  const priceData = [
    {
      time: "00:00",
      price: 42500,
      volume: 1200,
      prediction: 42300,
      ma20: 42000,
    },
    {
      time: "04:00",
      price: 43200,
      volume: 1500,
      prediction: 43500,
      ma20: 42100,
    },
    {
      time: "08:00",
      price: 43800,
      volume: 1800,
      prediction: 44100,
      ma20: 42200,
    },
    {
      time: "12:00",
      price: 44100,
      volume: 2200,
      prediction: 44500,
      ma20: 42300,
    },
    {
      time: "16:00",
      price: 44700,
      volume: 2500,
      prediction: 45000,
      ma20: 42400,
    },
    {
      time: "20:00",
      price: 45200,
      volume: 2000,
      prediction: 45500,
      ma20: 42500,
    },
  ];

  const portfolioData = [
    { name: "Bitcoin", value: 45, color: "#f7931a", change: "+5.2%" },
    { name: "Ethereum", value: 25, color: "#627eea", change: "+3.8%" },
    { name: "Actions Tech", value: 20, color: "#00d4aa", change: "+2.1%" },
    { name: "Or", value: 10, color: "#ffd700", change: "-0.5%" },
  ];

  const tradingMetrics = [
    {
      title: "P&L Journalier",
      value: "+$2,450",
      change: "+12.5%",
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      title: "Win Rate",
      value: "68.4%",
      change: "+3.2%",
      icon: Target,
      color: "bg-blue-500",
    },
    {
      title: "Volume Total",
      value: "$125.8K",
      change: "+8.7%",
      icon: Activity,
      color: "bg-purple-500",
    },
    {
      title: "Score IA",
      value: "8.7/10",
      change: "+0.5",
      icon: Brain,
      color: "bg-orange-500",
    },
  ];

  const aiSignals = [
    {
      asset: "BTC/USD",
      signal: "BUY",
      confidence: 87,
      price: 45200,
      target: 48000,
    },
    {
      asset: "ETH/USD",
      signal: "HOLD",
      confidence: 72,
      price: 2850,
      target: 3000,
    },
    { asset: "AAPL", signal: "BUY", confidence: 91, price: 178, target: 195 },
    {
      asset: "GOLD",
      signal: "SELL",
      confidence: 65,
      price: 1980,
      target: 1920,
    },
  ];

  const performanceData = [
    { month: "Jan", pnl: 5200, trades: 45, winRate: 65 },
    { month: "Fev", pnl: 3800, trades: 38, winRate: 71 },
    { month: "Mar", pnl: 6100, trades: 52, winRate: 69 },
    { month: "Avr", pnl: 4500, trades: 41, winRate: 73 },
    { month: "Mai", pnl: 7200, trades: 48, winRate: 75 },
    { month: "Jun", pnl: 5800, trades: 44, winRate: 68 },
  ];

  const exportToPDF = async () => {
    if (!dashboardRef.current) return;

    try {
      const canvas = await html2canvas(dashboardRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("trading-dashboard.pdf");
    } catch (error) {
      console.error("Error exporting to PDF:", error);
    }
  };

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case "BUY":
        return "bg-green-100 text-green-800";
      case "SELL":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <div className="bg-gray-900 text-white p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col space-y-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                Business Intelligence Pro
              </h1>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">
                Plateforme de trading assistée par IA et analyse financière
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={selectedAsset}
                onChange={(e) => setSelectedAsset(e.target.value)}
                className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white text-sm"
              >
                <option value="BTC">BTC/USD</option>
                <option value="ETH">ETH/USD</option>
                <option value="AAPL">AAPL</option>
                <option value="GOLD">GOLD</option>
              </select>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white text-sm"
              >
                <option value="1H">1H</option>
                <option value="4H">4H</option>
                <option value="1D">1D</option>
                <option value="1W">1W</option>
              </select>
              <button
                onClick={exportToPDF}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export PDF</span>
                <span className="sm:hidden">PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div ref={dashboardRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-6">
            {tradingMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-400">
                      {metric.title}
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-white mt-2">
                      {metric.value}
                    </p>
                    <div className="flex items-center mt-2">
                      <span
                        className={`text-xs sm:text-sm font-medium ${
                          metric.change.startsWith("+")
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {metric.change}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 ml-2">
                        24h
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${metric.color} p-2 sm:p-3 rounded-lg ml-2 sm:ml-0`}
                  >
                    <metric.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Signals */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              Signaux IA en Temps Réel
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="hidden sm:block">
                  <table className="min-w-full">
                    <thead>
                      <tr className="text-left text-gray-400 text-sm">
                        <th className="pb-3">Actif</th>
                        <th className="pb-3">Signal</th>
                        <th className="pb-3">Confiance</th>
                        <th className="pb-3">Prix Actuel</th>
                        <th className="pb-3">Objectif</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {aiSignals.map((signal, index) => (
                        <tr key={index} className="border-t border-gray-700">
                          <td className="py-3 font-medium">{signal.asset}</td>
                          <td className="py-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getSignalColor(
                                signal.signal,
                              )}`}
                            >
                              {signal.signal}
                            </span>
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-gray-700 rounded-full h-2">
                                <div
                                  className="bg-blue-400 h-2 rounded-full"
                                  style={{ width: `${signal.confidence}%` }}
                                />
                              </div>
                              <span className="text-sm">
                                {signal.confidence}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3">
                            ${signal.price.toLocaleString()}
                          </td>
                          <td className="py-3">
                            ${signal.target.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Mobile cards */}
                <div className="sm:hidden space-y-3">
                  {aiSignals.map((signal, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-white">
                          {signal.asset}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getSignalColor(
                            signal.signal,
                          )}`}
                        >
                          {signal.signal}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Confiance:</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 bg-gray-600 rounded-full h-1.5">
                              <div
                                className="bg-blue-400 h-1.5 rounded-full"
                                style={{ width: `${signal.confidence}%` }}
                              />
                            </div>
                            <span className="text-white">
                              {signal.confidence}%
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Prix:</span>
                          <span className="text-white">
                            ${signal.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Objectif:</span>
                          <span className="text-white">
                            ${signal.target.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Price Chart */}
            <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Analyse de Prix {selectedAsset}/USD
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <ComposedChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="time"
                    stroke="#9CA3AF"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    name="Prix"
                  />
                  <Line
                    type="monotone"
                    dataKey="prediction"
                    stroke="#10B981"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Prédiction IA"
                  />
                  <Line
                    type="monotone"
                    dataKey="ma20"
                    stroke="#F59E0B"
                    strokeWidth={1}
                    name="MA20"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Volume Chart */}
            <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Volume de Trading
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="time"
                    stroke="#9CA3AF"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                    }}
                  />
                  <Bar dataKey="volume" fill="#8B5CF6" name="Volume" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Portfolio Distribution */}
            <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Allocation du Portfolio
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => {
                      const item = portfolioData.find((d) => d.name === name);
                      return window.innerWidth >= 640
                        ? `${name}: ${value}% (${item?.change || ""})`
                        : `${value}%`;
                    }}
                    outerRadius={window.innerWidth >= 640 ? 80 : 60}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Performance Chart */}
            <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Performance Mensuelle
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="month"
                    stroke="#9CA3AF"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="pnl"
                    stackId="1"
                    stroke="#10B981"
                    fill="#10B981"
                    name="P&L ($)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Risk Metrics */}
          <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              Métriques de Risque
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  Sharpe Ratio
                </p>
                <p className="text-xl sm:text-2xl font-bold text-green-400">
                  1.85
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  Drawdown Max
                </p>
                <p className="text-xl sm:text-2xl font-bold text-red-400">
                  -8.2%
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  Volatilité
                </p>
                <p className="text-xl sm:text-2xl font-bold text-yellow-400">
                  12.4%
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  Score de Risque
                </p>
                <p className="text-xl sm:text-2xl font-bold text-blue-400">
                  6.8/10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BIDashboardPage;
