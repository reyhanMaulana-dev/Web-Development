import { useParams, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div id="home" className="flex flex-col items-center mt-6 lg:mt-20 bg-background text-textmain px-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Dashboard Survei{" "}
        <span className="bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text">
          UIN Syarif Hidayatullah Jakarta
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-textsecondary max-w-4xl">
        Platform ini menampilkan hasil dari berbagai survei layanan di lingkungan{" "}
        <strong className="text-accent2">
          UIN Syarif Hidayatullah Jakarta
        </strong>, meliputi aspek akademik, administrasi, alumni, sarana prasarana,
        hingga transformasi digital. Setiap dashboard memberikan gambaran
        komprehensif terhadap tingkat kepuasan dan kualitas layanan universitas.
      </p>

      <div className="flex justify-center my-10">
        <div
          onClick={()=> navigate("/survey/0")}
          className="cursor-pointer bg-gradient-to-r from-accent1 to-accent2 py-3 px-6 mx-3 rounded-md font-medium hover:opacity-90 transition"
        >
          Lihat Dashboard
        </div>
        <a
          href="#survei"
          className="cursor-pointer py-3 px-6 mx-3 rounded-md border border-accent3 text-accent2 hover:bg-accent3/20 transition"
        >
          Tentang Survei
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
