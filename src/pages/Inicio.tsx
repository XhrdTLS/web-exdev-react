export const Inicio = () => {
  return (
    <main className="h-full w-full relative inline-block">
      <section className="my-6 mx-10 flex flex-col justify-center items-center h-[77vh] image rounded-2xl">
        <div className="flex flex-col items-center justify-center h-full gap-24">
          <h3 className="font-semibold text-5xl text-white text-center">
            Somos el club que une los conceptos
          </h3>
          <div className="flex flex-col items-center font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD]">
            <h2>Experimentar</h2>
            <h2>Desarrollar</h2>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <picture className="w-20 bg-[#0097A9] rounded-full border-8 border-white hover:scale-105 ease-in duration-100 translate-y-10">
            <a href="#ver-mas" id="ver-mas">
              <img src="/arrow-down.svg" alt="" className="w-full" />
            </a>
          </picture>
        </div>
      </section>

      <section className="relative inline-block my-24 mx-10">
        <h1 className=" text-center w-full my-11 text-4xl font-semibold  text-[#333333]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD]">
            Descubre
          </span>{" "}
          los proyectos de nuestro club
        </h1>

        <div className="grid grid-cols-3 grid-row items-center text-center gap-4 text-[#333333] mb-16">
          <article className="h-80  w-full flex justify-center rounded-2xl overflow-hidden relative ">
            <picture className=" w-full container-image">
              <img
                src="/lucas_linux.png"
                alt=""
                className="h-full object-cover w-full image-overlay"
              />
              <div className="overlay">
                <h3 className="text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <a
                  href="#"
                  className="absolute bottom-4 py-2 px-5 text-lg bg-[#F1F1F1] rounded-xl shadow-lg"
                >
                  Saber más
                </a>
              </div>
            </picture>
          </article>

          <article className="h-80  w-full flex justify-center rounded-2xl overflow-hidden relative ">
            <picture className=" w-full container-image">
              <img
                src="/example.png"
                alt=""
                className="h-full object-cover w-full image-overlay"
              />
              <div className="overlay">
                <h3 className="text-3xl ">App Mi UTEM</h3>
                <a
                  href="#"
                  className="absolute bottom-4 py-2 px-5 text-lg bg-[#F1F1F1] rounded-xl shadow-lg"
                >
                  Saber más
                </a>
              </div>
            </picture>
          </article>

          <article className="h-80 w-full flex justify-center rounded-2xl overflow-hidden relative ">
            <picture className=" w-full container-image">
              <img
                src="/Cover.svg"
                alt=""
                className="h-full object-cover w-full image-overlay"
              />
              <div className="overlay">
                <h3 className="text-3xl">hola que tal pipul</h3>
                <a
                  href="#"
                  className="absolute bottom-4 py-2 px-5 text-lgbg-[#F1F1F1] rounded-xl shadow-lg"
                >
                  Saber más
                </a>
              </div>
            </picture>
          </article>

          <article className="h-80  w-full flex justify-center rounded-2xl overflow-hidden relative ">
            <picture className=" w-full container-image">
              <img
                src="/lucas_linux.png"
                alt=""
                className="h-full object-cover w-full image-overlay"
              />
              <div className="overlay">
                <h3 className="text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <a
                  href="#"
                  className="absolute bottom-4 py-2 px-5 text-lg bg-[#F1F1F1] rounded-xl shadow-lg"
                >
                  Saber más
                </a>
              </div>
            </picture>
          </article>

          <article className="h-80  w-full flex justify-center rounded-2xl overflow-hidden relative ">
            <picture className=" w-full container-image">
              <img
                src="/lucas_linux.png"
                alt=""
                className="h-full object-cover w-full image-overlay"
              />
              <div className="overlay">
                <h3 className="text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <a
                  href="#"
                  className="absolute bottom-4 py-2 px-5 text-lg bg-[#F1F1F1] rounded-xl shadow-lg"
                >
                  Saber más
                </a>
              </div>
            </picture>
          </article>

          <article className="h-80  w-full flex justify-center rounded-2xl overflow-hidden relative ">
            <picture className=" w-full container-image">
              <img
                src="/lucas_linux.png"
                alt=""
                className="h-full object-cover w-full image-overlay"
              />
              <div className="overlay">
                <h3 className="text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <a
                  href="#"
                  className="absolute bottom-4 py-2 px-5 text-lg bg-[#F1F1F1] rounded-xl shadow-lg"
                >
                  Saber más
                </a>
              </div>
            </picture>
          </article>
        </div>
      </section>
    </main>
  );
};
