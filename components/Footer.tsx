import React from 'react';

// --- Komponen Ikon SVG untuk Media Sosial ---
// Dibuat sebagai komponen kecil agar mudah digunakan kembali
const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
    {children}
  </a>
);

// --- Komponen Utama Footer ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222531] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Bagian Atas: Deskripsi dan Tautan Navigasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Kolom Utama (Logo & Deskripsi) */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">
              Psycho<span className="text-purple-400">Art</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Platform marketplace terdepan untuk menemukan, mengoleksi, dan memperdagangkan karya seni digital NFT yang luar biasa.
            </p>
          </div>

          {/* 2. Kolom Tautan Marketplace */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Marketplace</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Art</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photography</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pattern</a></li>
            </ul>
          </div>

          {/* 3. Kolom Tautan Perusahaan */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* 4. Kolom Ajakan (Call to Action) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Join our community</h3>
            <p className="text-gray-400 mb-4">Dapatkan berita terbaru, update, dan penawaran eksklusif langsung di email Anda.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-[#2A2D3A] text-gray-300 px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold px-4 rounded-r-lg hover:opacity-90 transition-opacity"
              >
                Go
              </button>
            </form>
          </div>

        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-gray-700/50 mb-8"></div>

        {/* Bagian Bawah: Hak Cipta & Media Sosial */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PsychoArt. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <SocialIcon href="https://twitter.com">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.098 2.52c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.161 4.573a.75.75 0 01.75.75v5.304a.75.75 0 01-.75.75s-5.304 0-5.304-.75V7.073a.75.75 0 01.75-.75h3.804z" clipRule="evenodd" /><path d="M16.5 6.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01z" /><path fillRule="evenodd" d="M12 15a3 3 0 100-6 3 3 0 000 6zm0-1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon href="https://discord.com">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.54 5.32a.872.872 0 00-1.13-.21l-3.32 1.58A11.75 11.75 0 0012 6.5a11.75 11.75 0 00-2.88.37l-3.32-1.58a.872.872 0 00-1.13.21.872.872 0 00-.21 1.13l1.58 3.32A12.018 12.018 0 006.5 12a12.018 12.018 0 00.37 2.88l-1.58 3.32a.872.872 0 00.21 1.13.872.872 0 001.13.21l3.32-1.58A11.75 11.75 0 0012 17.5a11.75 11.75 0 002.88-.37l3.32 1.58a.872.872 0 001.13-.21.872.872 0 00.21-1.13l-1.58-3.32A12.018 12.018 0 0017.5 12a12.018 12.018 0 00-.37-2.88l1.58-3.32a.872.872 0 00-.21-1.13zM10 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;