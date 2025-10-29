import { Menu, X, Home, BarChart3, Info } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Beranda", href: "", icon: <Home className="w-5 h-5" /> },
  { label: "Dashboard", href: "/survey/0", icon: <BarChart3 className="w-5 h-5" /> },
  { label: "Tentang Survei", href: "#survei", icon: <Info className="w-5 h-5" /> },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "") {
      // Scroll to top for Beranda
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = href;
    }
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-[#21C3FC]/20 bg-[#081028]/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo & Title */}
          <div className="flex items-center flex-shrink-0">
            {/* Kalau ingin pakai logo, aktifkan baris di bawah */}
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <span className="text-xl font-semibold bg-gradient-to-r from-[#8951FF] to-[#21C3FC] text-transparent bg-clip-text tracking-tight">
              Pusat Mutu Kinerja
            </span>
          </div>

          {/* Navigation (Desktop) */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
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

        {/* Mobile Drawer (kembali ke overlay kanan seperti asli, tapi dengan icon dan smooth scroll) */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-40 bg-[#081028] w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index} className="text-center">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center justify-center text-gray-200 hover:text-[#21C3FC] font-medium transition-colors duration-300 text-lg"
                  >
                    <div className="h-8 w-8 p-1 bg-accent1/20 text-accent2 rounded-full flex justify-center items-center mr-3">
                      {item.icon}
                    </div>
                    {item.label}
                  </button>
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
