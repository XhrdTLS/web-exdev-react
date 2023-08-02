export const Inicio = () => {
  return (
    <section className="my-6 mx-10 rounded-2xl h-screen relative image">
      <div className="flex flex-col items-center justify-center h-full gap-20">
        <h3 className="font-semibold text-6xl text-white text-center">
          Somos el club que une los conceptos
        </h3>
        <div className="flex flex-col items-center font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD]">
          <h2>Experimentar</h2>
          <h2>Desarrollar</h2>
        </div>
      </div>
      <section className="w-full flex justify-center -translate-y-10">
        <div className="w-20 bg-[#0097A9] rounded-full border-8 border-white hover:scale-105 ease-in duration-100">
          <a href="#">
            <img src="../../public/arrow-down.svg" alt="" className="w-full" />
          </a>
        </div>
      </section>
    </section>
  );
};
