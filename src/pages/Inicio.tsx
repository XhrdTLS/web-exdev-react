export const Inicio = () => {
  return (
    <section className="bg-slate-700 my-6 mx-10 rounded-2xl h-screen relative image">
      <div className="flex flex-col items-center justify-center h-full gap-14">
        <h3 className="font-semibold text-6xl text-white text-center">
          Somos el club que une los conceptos
        </h3>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD]">
            Experimentar
          </h2>
          <h2 className="font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD]">
            Desarrollar
          </h2>
        </div>
      </div>
    </section>
  );
};
