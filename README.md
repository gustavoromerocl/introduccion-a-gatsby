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