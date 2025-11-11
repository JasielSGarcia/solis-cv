const About = () => {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Sobre mí</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Soy estudiante de décimo cuatrimestre en la Universidad Tecnológica de Durango (UTD),
              apasionado por el desarrollo front-end y la creación de experiencias digitales excepcionales.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Me especializo en construir aplicaciones web y móviles con las tecnologías más modernas,
              siempre buscando la mejor experiencia de usuario y código limpio.
            </p>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Educación</h4>
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <p className="text-gray-900 dark:text-white font-medium">Universidad Tecnológica de Durango</p>
                <p className="text-gray-600 dark:text-gray-400">Décimo Cuatrimestre - En curso</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Programación y desarrollo"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;