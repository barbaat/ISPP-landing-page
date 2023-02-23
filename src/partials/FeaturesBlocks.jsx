import React from 'react';
import Fj from '../images/fcojavierbarba.png';
import Alejandro from '../images/alejandro.png';
import Angela from '../images/angela.jpeg';
import Paco from '../images/paco.jpg';
import Paola from '../images/paola.png';
import Jose from '../images/jose.png';



function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-white pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-white-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">¿Quiénes somos?</h2>
            <p className="text-xl text-gray-600">Somos 15 estudiantes del grado en Ingeniería Informática en la Universidad de Sevilla. </p>
            <p className="text-xl text-gray-600">Somos consciente de la cantidad de gente que quiere practicar este deporte y lo complicado que es encontrar a compañeros para jugar.
            Por eso, ¡queremos darte las facilidades para que tu hagas el resto para conocer a los demás!</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-5 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Alejandro} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Alejandro</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Carrasco Núnez</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Paola} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Paola</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Martín Sánchez</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Angela} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Ángela</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Bernal Martín</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Paco} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Francisco</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Reyes Madrid</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Jose} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">José Ignacio</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Castro Vázquez</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="150" height="150" alt="Features bg" />
            <p> </p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fco Javier</h4>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
              <p className="text-gray-600 text-center">Backend</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
