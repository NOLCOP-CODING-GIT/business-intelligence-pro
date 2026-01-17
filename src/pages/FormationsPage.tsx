import React, { useState } from "react";
import { Play, Users, Star, Clock, CheckCircle } from "lucide-react";

const FormationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const formations = [
    {
      id: 1,
      title: "Trading Bitcoin Avancé",
      category: "crypto",
      price: 299,
      originalPrice: 599,
      level: "Avancé",
      duration: "12 heures",
      students: 2847,
      rating: 4.8,
      instructor: "Alexandre Martin",
      image: "🪙",
      description:
        "Maîtrisez le trading de Bitcoin avec l'analyse technique et l'IA",
      modules: 24,
      certificate: true,
      highlights: [
        "Stratégies avancées",
        "Analyse on-chain",
        "Risk management",
      ],
    },
    {
      id: 2,
      title: "DeFi & Yield Farming",
      category: "defi",
      price: 399,
      originalPrice: 799,
      level: "Intermédiaire",
      duration: "16 heures",
      students: 1923,
      rating: 4.9,
      instructor: "Sophie Chen",
      image: "🏦",
      description:
        "Explorez la finance décentralisée et optimisez vos rendements",
      modules: 32,
      certificate: true,
      highlights: ["Protocoles DeFi", "Smart contracts", "APY optimization"],
    },
    {
      id: 3,
      title: "Smart Contracts Solidity",
      category: "web3",
      price: 449,
      originalPrice: 899,
      level: "Intermédiaire",
      duration: "20 heures",
      students: 1456,
      rating: 4.7,
      instructor: "Thomas Dubois",
      image: "⚡",
      description: "Développez des smart contracts sécurisés sur Ethereum",
      modules: 40,
      certificate: true,
      highlights: ["Solidity avancé", "Security audits", "DApps development"],
    },
    {
      id: 4,
      title: "Technical Analysis Pro",
      category: "trading",
      price: 199,
      originalPrice: 399,
      level: "Débutant",
      duration: "8 heures",
      students: 3421,
      rating: 4.6,
      instructor: "Marie Laurent",
      image: "📈",
      description: "Apprenez l'analyse technique pour trader comme un pro",
      modules: 16,
      certificate: true,
      highlights: ["Chart patterns", "Indicators", "Trading psychology"],
    },
    {
      id: 5,
      title: "NFT & Digital Art",
      category: "nft",
      price: 149,
      originalPrice: 299,
      level: "Débutant",
      duration: "6 heures",
      students: 2156,
      rating: 4.5,
      instructor: "Lucas Bernard",
      image: "🎨",
      description: "Créez, vendez et collectionnez des NFTs",
      modules: 12,
      certificate: true,
      highlights: ["Digital creation", "Marketplaces", "IPFS storage"],
    },
    {
      id: 6,
      title: "Web3 Mastery",
      category: "web3",
      price: 599,
      originalPrice: 1299,
      level: "Avancé",
      duration: "32 heures",
      students: 987,
      rating: 4.9,
      instructor: "Nicolas Petit",
      image: "🌐",
      description: "Devenez expert de l'écosystème Web3 complet",
      modules: 64,
      certificate: true,
      highlights: ["Full-stack Web3", "Blockchain integration", "MetaMask"],
    },
  ];

  const categories = [
    { id: "all", name: "Toutes", icon: "🎯" },
    { id: "crypto", name: "Crypto", icon: "🪙" },
    { id: "defi", name: "DeFi", icon: "🏦" },
    { id: "web3", name: "Web3", icon: "⚡" },
    { id: "trading", name: "Trading", icon: "📈" },
    { id: "nft", name: "NFT", icon: "🎨" },
  ];

  const filteredFormations =
    selectedCategory === "all"
      ? formations
      : formations.filter((f) => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Formations Crypto & Web3
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Devenez expert en blockchain, trading et finance décentralisée
              avec nos formations dispensées par des professionnels du secteur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>12,890+ étudiants</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5" />
                <span>4.7/5 note moyenne</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Certificats reconnus</span>
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
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Formations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFormations.map((formation) => (
            <div
              key={formation.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="relative">
                <div className="bg-linear-to-r from-blue-500 to-purple-500 p-8 text-center">
                  <div className="text-6xl mb-4">{formation.image}</div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -
                    {Math.round(
                      ((formation.originalPrice - formation.price) /
                        formation.originalPrice) *
                        100,
                    )}
                    %
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                    {formation.level}
                  </span>
                  <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs font-medium">
                    {formation.modules} modules
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{formation.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {formation.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formation.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {formation.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {formation.rating}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  {formation.highlights.slice(0, 2).map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-300 mb-1"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">
                      {formation.instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {formation.instructor}
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-400">
                        {formation.price}€
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {formation.originalPrice}€
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Commencer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à maîtriser la crypto ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Rejoignez des milliers d'étudiants qui transforment leur carrière
            avec nos formations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Voir toutes les formations
            </button>
            <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors">
              Devenir instructeur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationsPage;
