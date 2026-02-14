import { Shield, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">AdaKami</h1>
              <p className="text-xs text-blue-100">Layanan Pelanggan Resmi</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:0889-7318-7761" className="flex items-center gap-2 text-sm hover:text-blue-100 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0889-7318-7761</span>
            </a>
            <a href="mailto:info@adakami.id" className="flex items-center gap-2 text-sm hover:text-blue-100 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@adakami.id</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Tersedia 24 Jam Setiap Hari
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Pusat Bantuan &<br />Informasi Layanan
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed mb-8">
              Solusi cepat dan terpercaya untuk semua kebutuhan bantuan Anda. Tim profesional kami siap membantu dengan respons yang ramah dan efisien.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => window.open('https://wa.me/6288973187761?text=Halo, saya memerlukan bantuan', '_blank')}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Hubungi Sekarang
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Lihat Layanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
