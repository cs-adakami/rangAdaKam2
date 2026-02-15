export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // --- PENGATURAN NOMOR ---
  const displayPhone = '0821-6364-257'; // Nomor yang terlihat di layar (Format 08)
  const waNumber = '628216364257';      // Nomor untuk Link WA & Panggilan (Format 62)
  // ------------------------

  function AdaKamiLogoFooter() {
    return (
      <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="white" opacity="0.95"/>
        <path d="M35 55C35 48 40 42 47 42C54 42 59 48 59 55" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path d="M28 65C28 55 35 48 44 48C53 48 60 55 60 65" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <path d="M65 60C65 52 70 46 77 46C84 46 89 52 89 60" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="6" fill="#FBBF24"/>
        <circle cx="76" cy="56" r="4" fill="#FBBF24"/>
      </svg>
    );
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-600 rounded-xl">
                <AdaKamiLogoFooter />
              </div>
              <div>
                <h3 className="text-xl font-bold">AdaKami</h3>
                <p className="text-sm text-gray-400">Layanan Pelanggan Resmi</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Pusat informasi dan bantuan resmi AdaKami yang memberikan dukungan terpadu 24 jam untuk kenyamanan dan kepuasan pelanggan.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => window.open(`https://wa.me/${waNumber}?text=Informasi produk`, '_blank')} className="hover:text-white transition-colors">
                  Informasi Produk
                </button>
              </li>
              <li>
                <button onClick={() => window.open(`https://wa.me/${waNumber}?text=Bantuan teknis`, '_blank')} className="hover:text-white transition-colors">
                  Bantuan Teknis
                </button>
              </li>
              <li>
                <button onClick={() => window.open(`https://wa.me/${waNumber}?text=Pengaturan akun`, '_blank')} className="hover:text-white transition-colors">
                  Pengaturan Akun
                </button>
              </li>
              <li>
                <button onClick={() => window.open(`https://wa.me/${waNumber}?text=Konsultasi`, '_blank')} className="hover:text-white transition-colors">
                  Konsultasi
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Kuningan Timur</li>
              <li>Jakarta Selatan</li>
              <li>DKI Jakarta</li>
              <li className="pt-2">
                <a href={`tel:${waNumber}`} className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                  {displayPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} AdaKami. Semua hak cipta dilindungi undang-undang.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Layanan Aktif 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
