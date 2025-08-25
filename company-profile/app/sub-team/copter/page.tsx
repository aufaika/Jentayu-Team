export default function RacingPlane() {
  return (
    <div className="w-full">
      {/* ================= PAGE 1 : copter ================= */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/copter1.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold">
          COPTER
        </h1>
      </section>

      {/* ================= PAGE 2 : Description Team ================= */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundImage: "url('/bg-description-team.jpg')" }} // << FOTO BG 2
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
            DESCRIPTION TEAM
          </h2>

          <p className="text-white text-lg leading-relaxed text-justify">
            Jentayu Copter Team, specializing in Vertical Take-Off Landing
            (VTOL) technology, focused on designing and developing a quad-copter
            style drone for the competition. The theme for this year, "Long-
            Range Autonomous Flight Mission with Indoor Flight Capabilities,"
            required teams to operate their drones autonomously within a
            designated area divided into two sections: one indoor and one
            outdoor. The competition tested teams' abilities to manage their
            aircraft across both environments. Indoor operations demanded
            precise control due to the confined spaces, while outdoor missions
            emphasized endurance and range.
          </p>
        </div>
      </section>
    </div>
  );
}
