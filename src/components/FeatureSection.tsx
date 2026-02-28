import { Clock, Shield, Zap, Award } from 'lucide-react';

export default function FeatureSection() {
  // --- UBAH NOMOR WHATSAPP DI SINI ---
  const waNumber = '628192140072';
  // -----------------------------------

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Layanan 24/7',
      description: 'Tim kami selalu siap membantu Anda kapan saja, setiap hari dalam seminggu tanpa henti.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Aman & Terpercaya',
      description: 'Keamanan data dan privasi Anda adalah prioritas utama kami dengan sistem terenkripsi.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Respons Cepat',
      description: 'Dapatkan solusi dalam waktu singkat dengan tim profesional yang berpengalaman.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Berkualitas Tinggi',
      description: 'Standar layanan terbaik dengan kepuasan pelanggan sebagai ukuran kesuksesan kami.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami adalah memberikan pengalaman terbaik dengan standar profesional tinggi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Membantu Anda Sekarang
            </h3>
            <p className="text-lg text-green-50 mb-6 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim profesional kami siap memberikan solusi terbaik untuk kebutuhan Anda.
            </p>
            <button
              onClick={() => window.open(`https://wa.me/${waNumber}?text=Halo, saya ingin mendapatkan bantuan`, '_blank')}
              className="px-8 py-4 bg-yellow-300 text-green-700 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Mulai Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
