import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const waNumber = '628216364317';
  const defaultMessage = 'Halo, saya ingin bantuan mengenai layanan AdaKami';

  const handleSendMessage = (message: string) => {
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Chat WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden z-40 animate-slideUp">
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-5">
            <h3 className="text-white font-bold text-lg">Chat dengan Kami</h3>
            <p className="text-green-50 text-sm mt-1">Respons cepat dalam hitungan menit</p>
          </div>

          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            <button
              onClick={() => handleSendMessage('Halo, saya butuh informasi layanan resmi')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl transition-all text-sm text-gray-700 hover:text-green-700 font-medium"
            >
              Informasi Layanan Resmi
            </button>

            <button
              onClick={() => handleSendMessage('Halo, saya ingin panduan bantuan teknis')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl transition-all text-sm text-gray-700 hover:text-green-700 font-medium"
            >
              Panduan Bantuan Teknis
            </button>

            <button
              onClick={() => handleSendMessage('Halo, saya butuh bantuan kendala akun')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl transition-all text-sm text-gray-700 hover:text-green-700 font-medium"
            >
              Bantuan Kendala Akun
            </button>

            <button
              onClick={() => handleSendMessage('Halo, saya ingin bicara dengan CS AdaKami')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl transition-all text-sm text-gray-700 hover:text-green-700 font-medium"
            >
              Hubungi CS Resmi
            </button>

            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={() => handleSendMessage(defaultMessage)}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg"
              >
                Mulai Chat Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
