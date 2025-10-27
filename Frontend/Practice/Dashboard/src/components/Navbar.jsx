import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Dashboard Survei", href: "#dashboards" },
  { label: "Tentang Survei", href: "#about" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-[#21C3FC]/20 bg-[#081028]/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo & Title */}
          <div className="flex items-center flex-shrink-0">
            {/* Kalau ingin pakai logo, aktifkan baris di bawah */}
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <span className="text-xl font-semibold bg-gradient-to-r from-[#8951FF] to-[#21C3FC] text-transparent bg-clip-text tracking-tight">
              UIN Syarif Hidayatullah
            </span>
          </div>

          {/* Navigation (Desktop) */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-200 hover:text-[#21C3FC] transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex flex-col justify-end">
            <button
              onClick={toggleNavbar}
              className="text-[#21C3FC] hover:text-[#8951FF] transition-colors duration-300"
            >
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-40 bg-[#081028] w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-lg text-center">
                  <a
                    href={item.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="text-gray-200 hover:text-[#21C3FC] font-medium transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
