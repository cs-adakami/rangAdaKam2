import { BookOpen, Headphones, Settings, Users, FileText, HelpCircle } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  message: string;
}

export default function ServiceGrid() {
  const waNumber = '6282113000671';

  const services: Service[] = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Informasi Produk',
      description: 'Pelajari fitur dan layanan lengkap yang tersedia untuk Anda',
      message: 'Saya ingin mengetahui informasi produk',
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Bantuan Teknis',
      description: 'Solusi cepat untuk kendala teknis yang Anda alami',
      message: 'Saya memerlukan bantuan teknis',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Pengaturan Akun',
      description: 'Kelola dan sesuaikan preferensi akun Anda dengan mudah',
      message: 'Saya ingin bantuan pengaturan akun',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Konsultasi Personal',
      description: 'Diskusi langsung dengan tim ahli kami untuk solusi terbaik',
      message: 'Saya ingin konsultasi dengan tim',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Panduan Lengkap',
      description: 'Akses dokumentasi dan tutorial penggunaan aplikasi',
      message: 'Saya butuh panduan penggunaan',
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: 'FAQ & Dukungan',
      description: 'Temukan jawaban cepat untuk pertanyaan umum Anda',
      message: 'Saya punya pertanyaan umum',
    },
  ];

  const handleServiceClick = (message: string) => {
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bagaimana Kami Bisa Membantu?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih kategori layanan yang sesuai dengan kebutuhan Anda untuk mendapatkan bantuan yang tepat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(service.message)}
              className="group text-left bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
