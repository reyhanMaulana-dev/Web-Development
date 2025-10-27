// components/SurveySection.jsx
import { surveys } from "../constants";

const SurveySection = () => {
  return (
    <section
      id="dashboards"
      className="relative mt-20 border-b border-accent3/30 pb-20 min-h-[800px] bg-background text-textmain"
    >
      <div className="text-center">
        <span className="bg-accent3/10 text-accent2 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase tracking-wide">
          Dashboard
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Jelajahi{" "}
          <span className="bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text">
            Hasil Survei UIN
          </span>
        </h2>
        <p className="mt-6 text-textsecondary max-w-3xl mx-auto text-lg">
          Temukan berbagai dashboard interaktif yang menampilkan hasil survei
          terhadap layanan akademik, alumni, umum, dan transformasi digital di{" "}
          <strong className="text-accent2">
            UIN Syarif Hidayatullah Jakarta
          </strong>.
        </p>
      </div>

      <div className="flex flex-wrap mt-16 justify-center">
        {surveys.map((survey, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300 hover:scale-[1.02]"
          >
            <a
              href="https://lookerstudio.google.com/reporting/f030673d-e0a2-4a1c-a365-9dca9afe2b76"
              target="_blank"
              rel="noopener noreferrer"
              className="block flex flex-col h-full bg-[#0D1730] rounded-xl p-6 border border-accent3/20 hover:border-accent2/50 shadow-md shadow-accent3/10 transition"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 p-2 bg-accent1/20 text-accent2 rounded-full flex justify-center items-center mr-3">
                  {survey.icon}
                </div>
                <h5 className="text-lg font-semibold leading-tight text-white">
                  {survey.text}
                </h5>
              </div>
              <p className="text-textsecondary mb-4 flex-grow text-sm">
                {survey.description}
              </p>
              <span className="mt-auto inline-block text-accent2 hover:text-accent1 font-medium transition">
                Lihat Dashboard →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SurveySection;
