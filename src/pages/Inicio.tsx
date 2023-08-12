export const Inicio = () => {
  return (
    <main className="h-full w-full relative inline-block">
      <section className="my-6 mx-10 flex flex-col justify-center items-center h-screen image rounded-2xl">
        <div className="flex flex-col items-center justify-center h-full gap-24">
          <h3 className="font-semibold text-6xl text-white text-center">
            Somos el club que une los conceptos
          </h3>
          <div className="flex flex-col items-center font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD]">
            <h2>Experimentar</h2>
            <h2>Desarrollar</h2>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <picture className="w-20 bg-[#0097A9] rounded-full border-8 border-[#F1F1F1] hover:scale-105 ease-in duration-100 translate-y-10">
            <a href="#ver-mas" id="ver-mas">
              <img src="/arrow-down.svg" alt="" className="w-full" />
            </a>
          </picture>
        </div>
      </section>

      <section className="relative inline-block my-24 mx-10">
        <div className="grid grid-cols-[1fr,2fr,1.5fr] items-center text-center h-64 gap-4 text-[#333333] mb-16">
          <article className="h-full w-full flex justify-center rounded-2xl overflow-hidden ">
            <picture className=" w-full ">
              <img
                src="/example.png"
                alt=""
                className="h-full object-cover w-full "
              />
            </picture>
          </article>
          <article className="flex flex-col text-left h-full w-full justify-evenly bg-[#F5D0FE] rounded-2xl p-5">
            <h3 className="font-bold text-2xl">Cultura maker</h3>
            <p className="font-medium text-base">
              La cultura maker tiene su base en que todo el mundo puede hacer
              una tarea en específica sin tener que recurrir a un especialista
              para hacerlo. Como club estamos muy alineados a todo lo que se
              hace bajo esta filosofía, inspirándonos de muchas fuentes.
            </p>
          </article>
          <article className="h-full w-full flex justify-center rounded-2xl overflow-hidden">
            <picture className=" w-full ">
              <img
                src="/example.png"
                alt=""
                className="h-full object-cover w-full "
              />
            </picture>
          </article>
        </div>
        <div className="grid grid-cols-[2fr,3fr] items-center text-center h-64 gap-4 text-[#333333]">
          <article className="h-full w-full flex justify-center rounded-2xl overflow-hidden">
            <picture className=" w-full ">
              <img
                src="/example.png"
                alt=""
                className="h-full object-cover w-full "
              />
            </picture>
          </article>
          <article className="flex flex-col text-left h-full w-full justify-evenly bg-[#A5F3FC] rounded-2xl p-5">
            <h3 className="font-bold text-2xl">Cultura maker</h3>
            <p className="font-medium text-base">
              La cultura maker tiene su base en que todo el mundo puede hacer
              una tarea en específica sin tener que recurrir a un especialista
              para hacerlo. Como club estamos muy alineados a todo lo que se
              hace bajo esta filosofía, inspirándonos de muchas fuentes.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};
