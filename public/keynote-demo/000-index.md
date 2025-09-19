<h1>Planificación de la Aplicación de Wellness</h1>
<h2>KenkoLabs</h2>
<br/><br/><br/><br/>


  <p>DEVELMAP.SL</p>
  <p>24 julio 2025</p>


Note:
Buenos días a todos. Hoy vamos a presentar el plan para el desarrollo de nuestra aplicación de wellness, que hemos llamado 'Mindful Connect'.

* El objetivo es crear una plataforma donde los usuarios puedan evaluar su estado emocional a través de tests y recibir diagnósticos personalizados.
* Mi objetivo es mostrarles el camino a seguir, desde la estrategia hasta la elección de las tecnologías.



#---------#

## Visión General del Proyecto

### Visión y Objetivos

* Funcionalidades clave:
  * Usuario: Acceso seguro, tests de evaluación, diagnósticos personalizados y seguimiento de progreso.
  * Administrador: Panel de control para crear y gestionar tests, asignar diagnósticos y visualizar datos globales.
* Metodología: Desarrollo Ágil (Scrum/Kanban) para una entrega incremental y flexible.

Note:

* La visión del proyecto es clara: queremos construir una herramienta que empodere a las personas a entender y gestionar su bienestar emocional.
* Las funcionalidades se dividen en dos roles principales: el usuario, que es el corazón de la aplicación, y el administrador, que es quien le da vida y contenido.
* Adoptaremos una metodología ágil. Esto nos permitirá lanzar un producto mínimo viable (MVP) rápidamente y añadir funcionalidades en sprints sucesivos, adaptándonos a las necesidades del mercado.

#---------#

## Wellness

### Estudio de la situación en el mercado

<div class="layout-4x2">
	<figure>
		<img data-src="https://help.headspace.com/hc/theming_assets/01HZPN3D3GJ8E2KKSCJW46HDN2" alt="Non-key areas of image blurred out">
		<figcaption>Headspace <a href="https://help.headspace.com/hc/es-419" target="_blank">🔗</a></figcaption>
	</figure>
	<figure>
		<img data-src="https://support.calm.com/hc/theming_assets/01JPMV6TDEGWE8KZKAXMB90N0D" alt="Non-key areas of image blurred out">
		<figcaption>Calm <a href="https://support.calm.com/hc/es-419" target="_blank">🔗</a></figcaption>
	</figure>
	<figure>
		<img  data-src="https://images.everydayhealth.com/images/2025/sleep-cycle-500x500.jpg?w=525" alt="Non-key areas of image blurred out">
		<figcaption>Sleep Cycle <a href="https://sleepcycle.com/" target="_blank">🔗</a></figcaption>
	</figure>							
	<figure>
		<img  data-src="https://cdn.prod.website-files.com/62a8d80d50e8142f365d1ba7/63a086996cc40121e665dc6a_Thrive%20Logotype-Light-NoClip.svg" alt="Non-key areas of image blurred out">
		<figcaption>Thrive Global <a href="https://thriveglobal.com/" target="_blank">🔗</a></figcaption>
	</figure>	
	<figure>
		<img  data-src="https://cdn.prod.website-files.com/5e69e7d533b1136fa45de350/670539f9c90efd6465013b0c_white_logo.png" alt="Non-key areas of image blurred out">
		<figcaption>Meditopia <a href="https://meditopia.com/es/forwork-old" target="_blank">🔗</a></figcaption>
	</figure>	
	<figure>
		<img  data-src="https://www.rootd.io/wp-content/uploads/2017/06/Rooted_teal-300px.png" alt="Non-key areas of image blurred out">
		<figcaption>rootd <a href="https://www.rootd.io/" target="_blank">🔗</a></figcaption>
	</figure>	
	<figure>
		<img  data-src="https://ifeelonline.com/wp-content/uploads/sites/2/2021/07/logo_web.svg" alt="Non-key areas of image blurred out">
		<figcaption>ifeel <a href="https://ifeelonline.com/" target="_blank">🔗</a></figcaption>
	</figure>
	<figure>
		<img  data-src="https://cdn.prod.website-files.com/64be95b96cfe9e427b6bf738/64d21c743ffe3987ff6167b5_logo-footer.svg" alt="Non-key areas of image blurred out">
		<figcaption>therapyside <a href="https://www.therapyside.com/es-es" target="_blank">🔗</a></figcaption>
	</figure>
</div>

{---------}

# Headspace

{---------}

# Calm

{---------}

# Sleep Cycle

{---------}

# Thrive Global

{---------}

# Meditopia

{---------}

# rootd

{---------}

# ifeel

{---------}

# therapyside

#---------#

# STACK TECNOLÓGICO

{---------}

## Arquitectura y Tecnologías (Frontend)

### Frontend: La Interfaz de Usuario

* Tecnología Recomendada: **React.js**
* Motivos:
  * Componentes Reutilizables: Permite construir la interfaz de manera modular.
  * Comunidad Amplia: Facilita el soporte y la búsqueda de recursos.
  * Rendimiento: Ideal para crear aplicaciones de una sola página (SPA) rápidas.
* Alternativas: Vue.js, Angular.


Note:

* Para el frontend, la cara visible de nuestra app, la recomendación principal es React.js.
* Su modelo de componentes nos permitirá construir una interfaz de usuario coherente y fácil de mantener, donde cada elemento, desde un botón hasta un test completo, es un componente reutilizable.
* La gran comunidad de React nos asegura que siempre encontraremos soluciones a los problemas que puedan surgir. Vue.js y Angular son buenas alternativas, pero React es actualmente el estándar de la industria.


{---------}

## Arquitectura y Tecnologías (Backend)

### Backend: El Cerebro de la Aplicación

* Tecnología Recomendada: Node.js con Express.js
* Motivos:
  * Velocidad: Alto rendimiento para manejar múltiples solicitudes.
  * API RESTful: Creación de APIs robustas y escalables.
  * JavaScript: Un solo lenguaje para frontend y backend, lo que optimiza el equipo de desarrollo.
* Alternativas: Python (Django), Ruby on Rails.

Note:

* El backend es la lógica detrás de la aplicación. Aquí es donde se gestionan los usuarios, se calculan los diagnósticos y se almacenan los datos.
* Optamos por Node.js y Express.js por su eficiencia y su capacidad para manejar un gran número de peticiones simultáneas.
* Además, al usar JavaScript en el backend, los desarrolladores de frontend pueden contribuir en ambos lados de la aplicación, lo que nos da una gran flexibilidad.
* Otras opciones como Django o Ruby on Rails también son excelentes, pero Node.js es la mejor opción para esta aplicación.


{---------}

## Base de Datos

### Almacenamiento de Datos

* Tecnología Recomendada: PostgreSQL
  * Tipo: Base de datos relacional.
* Motivos:
  * Seguridad y Fiabilidad: Ideal para datos sensibles y personales.
  * Integridad de Datos: Garantiza la consistencia de la información (usuarios, tests, resultados).
  * Escalabilidad: Se adapta al crecimiento de la aplicación.
* Alternativas: MongoDB (NoSQL).

Note:

* La elección de la base de datos es crucial para la seguridad de la información. PostgreSQL es la opción más sólida y segura para nuestro proyecto.
* Su naturaleza relacional nos permite modelar perfectamente las conexiones entre usuarios, tests y preguntas, asegurando la integridad de los datos.
* Aunque MongoDB es una opción flexible, la estructura de nuestro proyecto se beneficia de la fiabilidad y la consistencia que ofrece una base de datos relacional como PostgreSQL.


{---------}

# Conclusiones: Stack tecnológico

* Frontend: React.js
* Backend: Node.js + Express.js
* Base de Datos: PostgreSQL
* Metodología: Desarrollo Ágil

Note:

* Para resumir, aquí tienen el stack tecnológico que proponemos.
* Esta combinación de tecnologías es conocida por ser potente, ecalable y segura, lo que nos dará una base sólida para el crecimiento de la aplicación.
* Utilizar una pila de JavaScript tanto en el frontend como en el backend optimizará el proceso de desarrollo y la curva de aprendizaje del equipo.
* Con este plan, estamos listos para comenzar la fase de diseño y desarrollo de la aplicación.

#---------#

# SIGUIENTES PASOS

#---------#

# CONCLUSIONES

