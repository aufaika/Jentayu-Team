export default function aeroMapper() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="min-h-screen py-20 px-8 text-center bg-white flex flex-col justify-center items-center">
        <h2
          className="text-5xl font-extrabold mb-4"
          style={{ color: "#515050" }}
        >
          AEROMAPPER
        </h2>
      </section>

      <section className="min-h-screen py-20 px-8 text-center bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-32 h-32 bg-gray-300 rounded-lg mb-8 flex items-center justify-center">
          logo aeromapper
        </div>

        <h3
          className="text-4xl font-extrabold mb-4"
          style={{ color: "#515050" }}
        >
          DESCRIPTION TEAM
        </h3>

        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-700 leading-relaxed mx-auto">
            Description for AeroMapper team goes here...
          </p>
        </div>
      </section>
    </div>
  );
}
