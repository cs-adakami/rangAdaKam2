import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  // --- BAGIAN EDIT NOMOR ---
  const displayPhone = '0813-1818-031'; // Format untuk dilihat user
  const actionPhone = '628131818031';   // Format untuk sistem (WA & Telpon)
  // -------------------------

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat Kantor',
      content: 'Kuningan Timur, Jakarta Selatan',
      subContent: 'DKI Jakarta, Indonesia',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      content: displayPhone,
      subContent: 'Tersedia untuk panggilan & WhatsApp',
      link: `tel:${actionPhone}`,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@adakami.id',
      subContent: 'Respons dalam 24 jam kerja',
      link: 'mailto:info@adakami.id',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Jam Operasional',
      content: 'Senin - Minggu',
      subContent: '24 Jam Nonstop',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informasi Kontak
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai cara untuk terhubung dengan tim layanan pelanggan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl shadow-lg">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors block mb-1"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-lg font-bold text-gray-900 mb-1">
                      {info.content}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    {info.subContent}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Punya Pertanyaan Lain?
          </h3>
          <p className="text-green-50 mb-6 max-w-xl mx-auto">
            Tim kami siap menjawab semua pertanyaan Anda dengan cepat dan profesional
          </p>
          <button
            onClick={() => window.open(`https://wa.me/${actionPhone}?text=Halo, saya punya pertanyaan`, '_blank')}
            className="px-8 py-3 bg-yellow-300 text-green-700 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Tanya Sekarang via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
