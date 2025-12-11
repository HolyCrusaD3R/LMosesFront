import React from "react";

export default function AboutUsSection() {
  return (
    <section className="mt-16 w-9/10 mx-auto px-4">
      <h2 className="text-2xl font-semibold text-c-black mb-6 text-center">
        About Our Team
      </h2>

      <p className="text-c-black/90 leading-relaxed text-center max-w-3xl mx-auto mb-6">
        We are a team of software engineering students enrolled in the "Product
        Development for Software Engineers" course. Our mission is to build{" "}
        <strong>LMoses</strong> — your AI-powered assistant for everything
        related to
        <strong> Kutaisi International University</strong>. With LMoses,
        students and staff can get instant answers, search syllabuses,
        scholarships, personnel information, and stay updated with the latest
        news at KIU.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        {/* Team Member Example */}
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 w-60">
          <div className="w-20 h-20 rounded-full bg-c-primary/20 flex items-center justify-center text-3xl mb-3">
            🧑‍💻
          </div>
          <h3 className="font-semibold text-c-black mb-1">Luka</h3>
          <p className="text-c-black/80 text-sm">Fullstack Developer</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 w-60">
          <div className="w-20 h-20 rounded-full bg-c-primary/20 flex items-center justify-center text-3xl mb-3">
            🧑‍💻
          </div>
          <h3 className="font-semibold text-c-black mb-1">Konstantine</h3>
          <p className="text-c-black/80 text-sm">Backend Developer</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 w-60">
          <div className="w-20 h-20 rounded-full bg-c-primary/20 flex items-center justify-center text-3xl mb-3">
            🤖
          </div>
          <h3 className="font-semibold text-c-black mb-1">Kvirike</h3>
          <p className="text-c-black/80 text-sm">AI & Data Specialist</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 w-60">
          <div className="w-20 h-20 rounded-full bg-c-primary/20 flex items-center justify-center text-3xl mb-3">
            🎨
          </div>
          <h3 className="font-semibold text-c-black mb-1">Giorgi</h3>
          <p className="text-c-black/80 text-sm">Design & Management</p>
        </div>
      </div>
    </section>
  );
}
