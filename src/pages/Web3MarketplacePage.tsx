import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  Star,
  ExternalLink,
  Wallet,
  Globe,
  Shield,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const Web3MarketplacePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const assets = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: 45234.56,
      change24h: 5.2,
      volume24h: "28.5B",
      marketCap: "882.1B",
      category: "crypto",
      image: "₿",
      description: "La première cryptomonnaie décentralisée",
      featured: true,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: 2856.78,
      change24h: 3.8,
      volume24h: "15.2B",
      marketCap: "342.9B",
      category: "crypto",
      image: "Ξ",
      description: "Plateforme pour smart contracts et DApps",
      featured: true,
    },
    {
      id: 3,
      name: "Uniswap",
      symbol: "UNI",
      price: 8.45,
      change24h: -2.1,
      volume24h: "245M",
      marketCap: "5.1B",
      category: "defi",
      image: "🦄",
      description: "Protocol DEX leader sur Ethereum",
      featured: false,
    },
    {
      id: 4,
      name: "Aave",
      symbol: "AAVE",
      price: 98.32,
      change24h: 7.4,
      volume24h: "189M",
      marketCap: "1.4B",
      category: "defi",
      image: "👻",
      description: "Protocol de lending et borrowing",
      featured: false,
    },
    {
      id: 5,
      name: "OpenSea",
      symbol: "OPENSEA",
      price: null,
      change24h: null,
      volume24h: "2.1B",
      marketCap: "N/A",
      category: "nft",
      image: "⛵",
      description: "Marketplace NFT la plus populaire",
      featured: true,
    },
    {
      id: 6,
      name: "Chainlink",
      symbol: "LINK",
      price: 14.67,
      change24h: 1.2,
      volume24h: "412M",
      marketCap: "8.6B",
      category: "web3",
      image: "🔗",
      description: "Oracle network pour smart contracts",
      featured: false,
    },
    {
      id: 7,
      name: "Polygon",
      symbol: "MATIC",
      price: 0.92,
      change24h: -4.3,
      volume24h: "287M",
      marketCap: "8.5B",
      category: "web3",
      image: "🟣",
      description: "Solution de scaling pour Ethereum",
      featured: false,
    },
    {
      id: 8,
      name: "Bored Ape Yacht Club",
      symbol: "BAYC",
      price: null,
      change24h: null,
      volume24h: "156M",
      marketCap: "N/A",
      category: "nft",
      image: "🐵",
      description: "Collection NFT iconique",
      featured: true,
    },
  ];

  const categories = [
    { id: "all", name: "Tous", icon: Globe },
    { id: "crypto", name: "Crypto", icon: TrendingUp },
    { id: "defi", name: "DeFi", icon: Shield },
    { id: "nft", name: "NFT", icon: Star },
    { id: "web3", name: "Web3", icon: Zap },
  ];

  const filteredAssets = assets.filter((asset) => {
    const matchesCategory =
      selectedCategory === "all" || asset.category === selectedCategory;
    const matchesSearch =
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredAssets = assets.filter((asset) => asset.featured);

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Web3 Marketplace
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explorez, achetez et échangez des actifs numériques, tokens DeFi,
              NFTs et services Web3 en toute sécurité
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher des cryptos, DeFi, NFTs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="text-2xl font-bold">$2.4T</div>
                <div className="text-sm text-blue-200">Market Cap Total</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="text-2xl font-bold">$124B</div>
                <div className="text-sm text-blue-200">Volume 24h</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="text-2xl font-bold">8,234</div>
                <div className="text-sm text-blue-200">Actifs Listés</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="text-2xl font-bold">+12.4%</div>
                <div className="text-sm text-blue-200">Dominance BTC</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Assets */}
      {selectedCategory === "all" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Actifs en Vedette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAssets.map((asset) => (
              <div
                key={asset.id}
                className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{asset.image}</div>
                    <div>
                      <div className="font-bold">{asset.name}</div>
                      <div className="text-sm text-gray-400">
                        {asset.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs font-medium">
                    FEATURED
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {asset.description}
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Explorer
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assets Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">
          {selectedCategory === "all"
            ? "Tous les Actifs"
            : `${categories.find((c) => c.id === selectedCategory)?.name}`}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{asset.image}</div>
                  <div>
                    <div className="font-bold text-lg">{asset.name}</div>
                    <div className="text-sm text-gray-400">{asset.symbol}</div>
                  </div>
                </div>
                {asset.price && (
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      asset.change24h >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {asset.change24h >= 0 ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {Math.abs(asset.change24h)}%
                  </div>
                )}
              </div>

              {asset.price ? (
                <div className="mb-4">
                  <div className="text-2xl font-bold">
                    ${asset.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">
                    Vol: ${asset.volume24h}
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <div className="text-xl font-bold text-gray-400">N/A</div>
                  <div className="text-sm text-gray-400">
                    Vol: ${asset.volume24h}
                  </div>
                </div>
              )}

              <p className="text-gray-300 text-sm mb-4">{asset.description}</p>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Wallet className="w-4 h-4" />
                  Acheter
                </button>
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez la Révolution Web3
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Accédez à des milliers d'actifs numériques avec la meilleure
            sécurité et les frais les plus bas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Commencer à trader
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
              Lister un actif
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3MarketplacePage;
