import { Github, Linkedin, Mail } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import photo from '../assets/img/photo.png'

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-32 px-6 relative min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <div className="md:col-span-1">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Jasiel S. García 
              <span className="inline-block animate-wave" style={{ transformOrigin: '70% 70%' }}>
                👋
              </span>
            </h1>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Desarrollador Front-end
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
              Especializado en crear interfaces modernas y funcionales con React Native, Tailwind CSS y tecnologías móviles.
            </p>
            <a 
              href="#contacto" 
              className="px-8 py-4 bg-gray-900 text-white rounded-lg text-xl font-medium hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
            >
              Di "Hola" <span>📧</span>
            </a>
          </div>

          {/* Columna de Imagen */}
          <div className="md:col-span-1 flex justify-center items-center">
            {/* Contenedor de la Imagen con forma */}
            <div className="relative w-[300px] h-[400px] lg:w-[350px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-[50%_50%_50%_50%/50%_50%_50%_50%] "></div>
              
              <img
                src={photo}
                alt="Foto"
                className="relative z-10 w-full h-full object-cover rounded-[50%_50%_50%_50%/50%_50%_50%_50%] "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contactos */}
      <div className="hidden md:flex flex-col gap-6 absolute left-6 lg:left-12 top-1/2 -translate-y-1/2">
        {/* GitHub */}
        <a href="https://github.com/JasielSGarcia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
          <Github size={24} />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/jasiel-solís-garcía-a163a53a2/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
          <Linkedin size={24} />
        </a>

        {/* Email */}
        <a href="mailto:jasielsolisgarcia08@gmail.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
          <Mail size={24} />
        </a>
      </div>

      {/* Indicador de Scroll Down */}
      <a href="#sobre-mi" className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
        <ArrowDown size={20} className="animate-bounce" />
        <span className="font-medium">Scroll Down</span>
      </a>
    </section>
  );
};

export default Hero;