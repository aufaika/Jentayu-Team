"use client";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* SECTION PERTAMA: BANNER FULL HALAMAN */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/about.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold text-center leading-tight">
          <span className="block">STOP DREAMING,</span>
          <span className="block">START FLYING</span>
        </h1>
      </section>

      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          About Us
        </h2>
        <p className="max-w-3xl text-justify text-gray-700 leading-relaxed">
          Jentayu Team was founded in 2017 by students of Diponegoro University.
          Initially, this team started as an Aeromodelling Club at Department of
          Mechanical Engineering but has since evolved into the university's
          leading autonomous Unmanned Aerial Vehicle (UAV) team. The Jentayu
          Team is located at Diponegoro University, Semarang, Central Java,
          Indonesia. This team was formed with a focus on innovation and
          breakthroughs in aeromodelling things by developing efficiently
          designed UAV. Operating in the appropriate rules of competition is the
          community's goal.
        </p>
      </section>
    </div>
  );
}
