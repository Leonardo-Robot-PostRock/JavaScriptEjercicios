import React from 'react';
import foto from './../../assets/images/profile/foto.png';
import fotoWhite from './../../assets/images/profile/foto_bgWhite.jpg';
import { ReactComponent as Twitter } from '../../assets/icons/social/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/social/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/social/linkedin.svg';
import { SocialMediaIcon } from '../../ui/components/SocialMediaIcon';

// Este código es un componente de React llamado "Home" que representa la página de 
//inicio de un sitio web. Aquí hay una breve descripción de lo que hace:

// Importa las bibliotecas y archivos necesarios, incluyendo imágenes y componentes SVG.

// Define el componente "Home" que toma una prop llamada "darkMode" como argumento.

// Renderiza una página principal con un fondo y diseño específico, que se ajusta al modo 
//claro u oscuro según el valor de la prop "darkMode".

// Dentro de la página principal, muestra una imagen de perfil, un nombre, un título 
//(FrontEnd Developer) y enlaces a perfiles en redes sociales (Twitter, Github, Linkedin) 
//utilizando el componente "SocialMediaIcon".

// En resumen, este código representa la página de inicio de un sitio web personal con 
//detalles de perfil y enlaces a perfiles de redes sociales, y su estilo puede cambiar 
//según el modo claro u oscuro especificado.

export const ejercicio9 = ({ darkMode }) => { // Se cambia nombre Home por nombre de ejercicio9

  return (
    <main
      className="flex h-screen min-w-280 place-content-center items-center bg-slate-100 font-victorMono dark:bg-neutral-900 md:mx-28 md:mb-20"
      id="home">
      <section className="mt-32 flex justify-center md:mt-14 2xl:my-20">
        <div className="md:mt-16 2xl:mt-24">
          <figure className="lg:w-50 mx-auto mb-5 w-44 justify-center rounded-full border-4 border-solid border-neutral-300 shadow-lg dark:border-neutral-950 dark:shadow-none md:mt-10 md:w-44 lg:border-8 2xl:w-72">
            {!darkMode ? (
              <img
                src={fotoWhite}
                alt="Leonardo Puebla"
                className="w-full rounded-full border-4 border-solid border-sky-400 brightness-105 lg:border-4"
                width={44}
                height={44}
              />
            ) : (
              <img
                src={foto}
                alt="Leonardo Puebla"
                className="w-full rounded-full border-4 border-solid border-sky-400 contrast-125 lg:border-4"
                width={44}
                height={44}
              />
            )}
          </figure>
          <h2 className="px-2 text-center font-Kanit text-3xl text-neutral-950 dark:text-white md:text-3xl lg:text-3xl lg:tracking-wider xl:text-4xl xl:tracking-widest">
            Hello, I'm
          </h2>
          <p className="mb-4 text-center font-Raleway text-4xl tracking-wider text-sky-400 lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Leonardo
          </p>
          <h2 className="xl:text-1xl mt-3 px-1 text-center font-victorMonoBold text-2xl tracking-wider text-neutral-950 dark:text-white sm:text-3xl md:text-3xl lg:text-2xl xl:mt-5 2xl:my-10 2xl:text-5xl">
            FrontEnd Developer
          </h2>
          <div className="my-5 flex justify-center gap-6">
            <SocialMediaIcon
              className="home"
              link="https://twitter.com/LeonardoPu65507"
              icon={Twitter}
              alt="red social Twitter"
            />
            <SocialMediaIcon
              className="home"
              link="https://github.com/Leonardo-Robot-PostRock?tab=repositories"
              icon={Github}
              alt="repositorio Github"
            />
            <SocialMediaIcon
              className="home"
              link="https://www.linkedin.com/in/leonardo-puebla-1a2b71229/"
              icon={Linkedin}
              alt="red social Linkedin"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
