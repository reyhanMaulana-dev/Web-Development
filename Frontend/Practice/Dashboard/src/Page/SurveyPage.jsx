import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { surveys } from "../constants";

const SurveyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const survey = surveys[id];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#081028] text-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0D1730] p-4 border-r border-accent3/20 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden absolute top-4 right-4 text-white hover:text-accent2"
        >
          ✕
        </button>

        {/* Button kembali ke beranda dengan icon dan title */}
        <div
          onClick={() => {
            navigate("/");
            setIsSidebarOpen(false); // Close sidebar on mobile after navigation
          }}
          className="cursor-pointer w-full mb-6 p-3 bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB] text-white rounded-lg hover:opacity-85 transition"
        >
          <div className="flex items-center">
            <div className="h-8 w-8 p-1 bg-black/20 text-white rounded-full flex justify-center items-center mr-3">
              {/* Icon Home SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <h5 className="text-sm font-semibold leading-tight">
              Beranda
            </h5>
          </div>
        </div>

        {/* List of surveys */}
        <div className="space-y-4">
          {surveys.map((surveyItem, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/survey/${index}`);
                setIsSidebarOpen(false); // Close sidebar on mobile after navigation
              }}
              className={`cursor-pointer p-3 rounded-lg transition ${
                id == index
                  ? "bg-accent2/20 border border-accent2/50"
                  : "hover:bg-accent1/10"
              }`}
            >
              <div className="flex items-center">
                <div className="h-8 w-8 p-1 bg-accent1/20 text-accent2 rounded-full flex justify-center items-center mr-3">
                  {surveyItem.icon}
                </div>
                <h5 className="text-sm font-semibold leading-tight text-white">
                  {surveyItem.text}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header for mobile with hamburger */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#0D1730] border-b border-accent3/20">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:text-accent2"
          >
            ☰
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          {survey ? (
            <iframe
              src={survey.link.replace(
                "reporting",
                "embed/reporting"
              )} // ubah link agar bisa di-embed
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: "12px", minHeight: "400px" }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl mb-4">Pilih survei dari sidebar</h2>
              <p className="text-textsecondary">Klik salah satu survei di sidebar untuk melihat dashboardnya.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
