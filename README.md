"# introduccion-a-gatsby" 

## Introduccion

### Qué es Gatsby

Gatsby es un framework basado en tecnologías modernas para crear aplicaciones web rápidas, de alto rendimiento y accesibles. Está basado en React, una de las librerías más populares de JavaScript, y graphql, un lenguaje de consultas para obteener datos de tu servidor.

Las aplicaciones web construídas con Gatsby son muy rápidas gracias al proceso de precompilado a través del cual Gatsby generar páginas estáticas de tus componentes en React, que, una vez llegan al navegador, aprovechan React para el dinamismo de la aplicación.

Gatsby obtiene datos de un gran número de fuentes de datos que pueden ir desde un CMS como Wordpress, listas en Trello, hojas de cálculo, servicios web externos, archivos del sistema, bases de datos en la nube, entre otros. Por lo que puedes elegir de entre esta gran variedad de fuentes de información para alojar los datos de tu aplicación, Gatsby usa una interfaz común sin importar de donde venga la información, un servidor de graphql y el lenguaje de consultas de graphql.

Ésta tecnología, además, abre las puertas a una enorme comunidad que ha construído numerosos plugins que te ayudan con tareas como generar imágenes responsivas, construir aplicaciones web progresivas, integrar herramientas modernas en el frontend, conectar con servicios de datos externos, entre otras cosas. Éstas integraciones hacen que al desarrollar aplicaciones web con Gatsby te concentres en el núcleo de tu aplicación, y no en la configuración de la misma.

Desde un punto de vista más práctico, las aplicaciones de Gatsby son aplicaciones de React que incluyen una interfaz para la integración de fuentes de datos, plugins y temas. A través de Gatsby puedes generar nuevas aplicaciones de React, pre configuradas con estrategias modernas de desarrollo como hot reloading.

Conoce más acerca de la arquitectura detrás de Gatsby, en el siguiente tema del curso.


### Qué es el JAMStack

Un stack(pila) en programación es una colección de tecnologías, configuradas para trabajar entre sí. Algunas de las stack más famosas son LAMP (Linux, APache, mySQL y PHP), MEAN (Mongo, Express, Angular y NodeJS), MERN (Mongo, Express, React y NodeJS), entre otras más, que han tenido momentos de mucha popularida

Durante el último año, un nuevo stack conocido como JAM y al que normalmente nos referimos como el JAMStack ha tomado muchísima fuerza.

Mathias Biilman quien es el CEO de Netlify, acuñó el término en 2017 durante una plática titulada “The rise of the JAMStack”.

La base del JAMStack está en una arquitectura orientada hacia el cliente, y no hacia el servidor. Con el creciente desarrollo de frameworks JavaScript que corren en el frontend como React, Angular, Vue, entre otros, éste stack delega el funcionamiento de la aplicación a la programación en el cliente, lo que permite reducir el trabajo que hacemos en el servidor y por lo tanto entregar respuestas más rápidas en nuestras páginas web.

El segundo pilar de esta stack está en las APIs, por lo que en lugar de acceder a la base de datos desde el servidor y compilar templates con éstos datos como tradicionalmente lo hacen frameworks como Laravel, Rails, Django, etc. La comunicación de datos con nuestra aplicación se abstrae en servicios web, a los que accedemos vía HTTPs con JavaScript, usando cualquier tecnología del cliente que hayas decidido para la base de tu aplicación.

Por último, un tercer pilar es el markup precompilado, que a diferencia del desarrollo web tradicional, promueve precompilar las vistas, el marcado o los templates, en lugar de generarlos dinámicamente en cada petición.

Precompilar el markup, permite además el uso de estrategias para escalar y optimizar el rendimiento de tu página web, como la distribución de tus archivos usando redes de servidores en la nube, fácil escalamiento en múltiples servidores, resilencia a errores, entre otros.

El JAMStack no define con qué tecnologías trabajarás, más bien es una arquitectura de cómo se organizarán las tecnologías de tu aplicación. Ésta arquitectura está pensada para los desafíos modernos del internet, velocidad, rendimiento, seguridad, alta disponibilidad, resilencia a caídas y más.

En resumen y desde un punto de vista más práctico, el JAMStack son páginas web estáticas, sin ejecución de código en el backend, cuya funcionalidad y dinamismo recide en el frontend y se ejecuta con JavaScript. Los datos se obtienen de APIs que pueden ser servicios web, archivos de información, bases de datos en la nube, entre otros.

## Fundamentos

### Iniciando un proyecto de Gatsby

- npm install -g gatsby-cli -> Instala Gatsby globalmente
- gatsby new [folder project] -> Inicia un nuevo proyecto 
- gatsby develop -> Inicia un entorno de desarollo

### Gatsby starters

Los gatsby starters son plantillas para iniciar el proyecto rapidamente con una base solida

https://www.gatsbyjs.com/starters/

### Creando mis primeras páginas

La convención de gatsby genera rutas automáticas en relación a el nombre de los archivos contenidos en la carpeta pages. En este caso creamos el componente de nomabre about que retorna una función asíncrona.

### Componentes de React

Los componentes que se agreguen fuera de la carpeta pages no se cargarán en una nueva página. Siguiendo las buenas prácticas los agruparemos en la carpeta components que acabamos de crear.

### Links

Para optimizar los links gatsby provee el tradicional Link de react, que carga la pagina sin hacer una patición al servidor, lo que se traduce en una trasición rapida y optima.

### API Files Gatsby

Gatsby expone archivos de configuración que te permiten tomar el control del ciclo completo que sigue tu código hasta su ejecución en el navegador.

Estos archivos son 4, cada uno de ellos tiene una API específica a través de la cuál puedes exponer métodos que se ejecutarán en puntos clave de la ejecución del código.

Estos archivos son opcionales y pertenecen en el root de tu proyecto de Gatsby, no es necesario que los integres de ninguna forma con el framework, basta con seguir la convención de nombres, y Gatsby sabrá cuándo y dónde debe ejecutarlos.

gatsby-config.js es el archivo a través del cuál puedes configurar tu aplicación web con Gatsby, agregar nuevos plugins, metadatos del sitio web, entre otros. En general, la configuración de tu sitio recide aquí.

gatsby-node.js es el archivo que Gatsby usa para exponer puntos clave del proceso de construcción de tu sitio web. Cada que se hace un cambio sobre tu aplicación web, el proceso del build de Gatsby se ejecuta, en este punto Gatsby crea todas las páginas web estáticas de tu sitio y las rutas para acceder a ellas. Tal como Gatsby lo hace, es a través de este archivo que puedes crear páginas dinámicamente, agregar nodos de datos para el motor de graphql, etc.

gatsby-browser.js te permite agregar funcionalidad sobre la ejecución de tu app de Gatsby en el navegador. Desde aquí podrías por ejemplo colocar código que se ejecutará cuando un usuario cambie de ruta en tu app, cuando la página cargue, etc.

gatsby-ssr.js es el archivo API para controlar la forma en cómo Gatsby construye tu sitio web. SSR son las siglas de server side rendering, la práctica que Gatsby usa para construir tus componentes de React en páginas estáticas, que luego pueden ser retomadas por React en el cliente para el dinamismo. A través de este archivo puedes alterar ese proceso de render desde el servidor.

A lo largo del curso estaremos trabajando con estos archivos y los distintos puntos de control o configuración que exponen para personalizar el funcionamiento de Gatsby para tu proyecto.

### Qué son los plugins de Gatsby

Gatsby ofrece una interfaz para que paquetes de NPM que puedes instalar en tu proyecto, puedan agregar funcionalidad a tu sitio a través del uso de los archivos APIs de tu proyecto, de los que ya hablamos en otro tema.

A través de estos plugins, los autores pueden empaquetar funcionalidad predefinida que se puede reutilizar en todos tus proyectos de Gatsby.

A través de plugins puedes integrar librerías externas del Frontend, agregar fuenetes de datos (más de esto en los próximos temas), integrar temas, etc.

Puedes usar la herramienta de exploración de Gatsby para buscar plugins que puedan servir para tu proyecto.

Una vez que encuentres un plugin que necesites, debes instalarlo usando NPM o yarn, dependiendo del manejador de paquetes que uses. Luego debes enlistar el proyecto en el archivo gatsby-config.js en la propiedad plugins.

module.exports = {
 plugins: [] // Aquí van tus plugins
}
En los siguientes vídeos veremos ejemplos de la instalación y configuración de varios plugins que puedes usar con React.

### Servidor de graphql

Gatsy incorpora el ide graphiql para manipular graphql en la dirección http://localhost:8000/___graphql

### Para qué usar graphql

Construir aplicaciones web viene acompañado siempre de procesar información de alguna fuente de datos. En el desarrollo web moderno, una aplicación web puede obtener información de distintas fuentes, incluso en un mismo proyecto, puedes tener 1, 2 o más fuentes de información alimentando la aplicación web.

Tradicionalmente, una aplicación web se acompaña de una base de datos para guardar y procesar la información. En el caso de graphql, las rutas y los archivos son estáticos, por lo que no hay oportunidad de hacer consultas a una base de datos como parte de una solicitud web.

Gatsby decide, en cambio, no asumir nada acerca de tu fuente de datos, decidir que cualquier desarrollador puede colocar cualquier tipo de fuente de datos para una aplicación de Gatsby, e incluso, que múltiples fuentes de datos pueden interactuar con Gatsby.

Esto por supuesto, es posible en cualquier otro framework, si buscas la implementación o el driver adecuado, puedes montar múltiples fuentes de datos para una aplicación web, en cualquier lenguaje. Lo que diferencía a Gatsby es graphql.

graphql funciona como una capa de comunicación entre Gatsby y las fuentes de datos, esto significa que es a través del lenguaje de consultas de graphql que puedes consultar información de cualquier fuente de datos con Gatsby.

Esta es una característica importante y poderosa para Gatsby, porque te permite efectivamente agregar, quitar o reemplazar fuentes de datos, sin tener que buscar drivers especiales o aprender el uso de una nueva librería, simplemente debes hacer una consulta con graphql, sin importar si tus datos vienen de un CMS, de archivos del sistema, de un servicio web, de una base de datos en la nube, o de varios de éstos a la vez.

Gatsby usa graphql para consultar datos que sirvan para el proceso de construcción de tus archivos estáticos. De ésta manera, conservas el dinamismo de una aplicación web, y los beneficios de un sitio web estático.

Cabe resaltar que no es necesario usar graphql en todos los sitios de Gatsby, tal como lo vimos en el vídeo pasado, sin embargo, graphql ofrece increíbles beneficios que irás conociendo conforme vayamos progresando en su uso.

## Trabajando con assets

### La carpeta assets de estáticos

La carpeta assets contiene archivos staticos como imagenes o videos, pero tambien pude contener archivos css y javascript de uso publico.

### Importar imagenes con webpack

Para seguir la convención de gatsby y el uso de webpack integrado en la configuración del proyecto usaremos la carpeta static que viene a ser la carpeta assets.

### Gatsby Image

Plugins necesarios para manipular las imagenes usando gatsby

npm install gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem

Para procesar las imagenes con gatsby es necesario obtenerlas mediante una query de graphql

### Fixed Image 

El uso de fixed image establece un valor estatico para el tamaño de la imagen


### Fluid Image

Cuando se usa fluid image la imagen se adapta a la resolución de la página de forma automatica

### Configuraciones adicionales de Gatsby Image

Es posible configurar distintas animaciones de carga e incluso reducir aín más el tamaño con withWebp con el fin de mejorar el rendimiento del sitio. A continuación los enlaces para revisar la documentación oficial de gatsby.

https://www.gatsbyjs.com/plugins/gatsby-image/#fragments
https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp

**GATSBY TRANSFORMER SHARP**

GatsbyImageSharpFixed
GatsbyImageSharpFixed_noBase64
GatsbyImageSharpFixed_tracedSVG
GatsbyImageSharpFixed_withWebp
GatsbyImageSharpFixed_withWebp_noBase64
GatsbyImageSharpFixed_withWebp_tracedSVG
GatsbyImageSharpFluid
GatsbyImageSharpFluid_noBase64
GatsbyImageSharpFluid_tracedSVG
GatsbyImageSharpFluid_withWebp
GatsbyImageSharpFluid_withWebp_noBase64
GatsbyImageSharpFluid_withWebp_tracedSVG
GatsbyImageSharpFluidLimitPresentationSize

### Importar hojas de estilo globales

Para importar hojas de estilo globales, se debe importar la hojoa de estilos en el archivo de configuración "gatsby-browser.js"

## Graphql y fuentes de datos

### Crear paginas dinámicamente

Para crear páginas de forma dínamica podemos crear el archivo "gatsby-node.js" y configurar las rutas en este caso agrupadas en la carpeta templates.

### Enviando datos a las páginas

A traves de la propiedad context configurada en ""gatsby-node.js" es posioble enviar información al template. Para acceder, se debe declarar desde las props el objeto pageContext.

### Fuentes de datos en Gatsby

En este contexto, entendemos una fuente de datos cómo alguna API de la que podamos obtener y en la que podamos modificar información.

Gatsby no asume nada acerca de la o las fuentes de datos que puedas usar en tu aplicación de Gatsby, de ésta manera, es posible usar una enorme cantidad de posibles fuentes de datos para tu aplicación web.

Una fuente de datos puede ser una hoja de cálculo, un archivo JSON, múltiples archivos locales, una base de datos en la nube, un servicio web, un CMS, entre muchísimos otros más.

Sin importar cuáles sean las características particulares de tu fuente de datos, Gatsby usa plugins como forma de integración entre ellos, por lo que en términos prácticos, tú únicamente usas el lenguaje de consultas de graphql para obtener la información que necesitas, sin importar de dónde venga ésta originalmente o si estás usando múltiples fuentes de datos que son distintas entre sí.

La integración de estas fuentes de datos con el servidor de graphql de Gatsby se da en el archivo gatsby-node.js, donde es posible agregar nuevos tipos de datos a graphql y nuevos resolvers, funciones que retornan la información de las consultas a graphql.

Gatsby cuenta con, al día en que hicimos el contenido de éste vídeo, con más de 1400 plugins, muchos de ellos te permiten integrar fuentes de datos con tu aplicación web.

Algunos de los ejemplos más comunes de fuentes de datos para aplicaciones de Gatsby son Wordpress, archivos locales del sistema, archivos markdown y servicios web; aunque también existen otros que aunque son menos populares, pueden resultar muy útiles como el uso de listas de trello, hojas de cálculo, entre otros.

### Datos de los archivos de sistema

El flujo de graphql es recibir datos desde distintas fuentes enviarlos al dom como nodos y realizar la query de consulta para obtener dicha información. En esta oportunidad, usamos la carpeta images configurada previamente en el plugin gatsby-source-filesystem del archivo "gatsby-config".-

### Consultas graphql con argumentos

Es posible combinar lo que hemos aprendido hasta ahora y usar el relativePath de pageContext y pasarlo como argumento en una consulta graphql, para renderizar las imagenes en cada path.

### Archivos css globales

Para aplicar la estregia de css global, a diferencia del global css que se importa en todos los archivos, estos se deben importar directamente en el componente o template que se va a utilizar. en este caso generamos un layout el cual posee un archivo de estilos del mismo nombre.

### CSS modular

La estrategia de css modular consiste en agrupar los archivos css junto a sus componentes e importar los estilos instanciando un objeto. De esta forma, independiente de los nombres de clases que se asignen, la convención de webpack asignará un nuevo nombre, evitando que hayan cruces de estilos entre componentes con el mismo nombre.

### styled components

npm install gatsby-plugin-styled-components
npm install styled-components
npm install babel-plugin-styled-components


Styled components o css in JS utiliza los estilos con funcionalidades de ECMAScript 6, es posible pasar estilos en variables con tags de html asignados o pasarlos en componentes de react al momento de exportarlos.

### Emotion

npm install gatsby-plugin-emotion
npm install  @emotion/styled
npm install @emotion/react

Es muy similar a styled components, sin embargo el tamaño de la libreria es menor lo que se traduce en un mejor rendimiento. En la practica realizada, compribamos que cambiando el elemento styled por el de emotion, la aplicación se sigue comportando como con styled components sin realizar cambio alguno. Adicional, usamos la propiedad css de @emotion/react para asignar estilos reutilizables a los componentes.

### Componentes persistentes

A pesar de tener un layout ya generado, este se recarga y pierde el estado junto con el resto de componentes, para hacerlo persistir se debe configurar en el archivo gatsby-browser y gatsby-ssr(pdte  de investigar ya que no queda claro en el curso). De esta forma, layout mantiene su estado y no se actualiza junto con el resto de componentes.

### Rutas del lado del cliente

npm install gatsby-plugin-create-client-paths

En esta sección revisamos como proteger rutas validando si el usuario esta autenticado

### Progresive Web App - Web manifest

npm install gatsby-plugin-manifest

### Progresive Web App - Service workers

npm install gatsby-plugin-offline

gatsby build












