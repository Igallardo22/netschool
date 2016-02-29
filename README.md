# netschool

Definición

Portal de integración de tres plataformas que pretenden mejorar las relaciones universitarias profesor-alumno, alumno-alumno, además de proporcionar una herramienta que permita a los profesores enseñar y transmitir sus conocimientos al exterior del ámbito universitario.


Tutorias online

Plataforma web que permitirá realizar preguntas a los profesores, y dotará de un conjunto de herramientas para que éstos respondan utilizando vídeo, audio y herramientas interactivas, permitiendo que el profesor analice la mejor manera de responder a esa cuestión y cuando esté listo, responderla de manera clara y concisa para que el alumno obtenga la respuesta. Además, las preguntas seguirán siendo accesibles para todos los alumnos, de manera que respondiendo una vez sirva para todos los alumnos de todos los años lectivos, haciendo una pequeña enciclopedia interactiva del conocimiento de la universidad.

Así pues, primero se realizará una consulta para saber si está la pregunta ya respondida, y si no, se formulará. En este último caso, la pregunta será dirigida para ser respondida por el profesor más valorado en las áreas que cubre la pregunta. De la misma forma, se pedirá al alumno o alumnos que se beneficien de la respuesta que la valoren con una puntuación.

Estas funcionalidades serán implementadas mediante algunos módulos de Drupal (que será la espina dorsal de nuestro sitio web). Concretamente, trabajaremos con FAQ module, FAQ Ask y Video.js
FAQ Module y FAQ Ask

El primero es el que específicamente nos permitirá crear y gestionar una sección de FAQ, que al fin y al cabo será donde acudan los alumnos a buscar si su pregunta ya fue respondida. Cuando el módulo básico de Drupal Taxonomy está activado, permite además categorizar dichas preguntas para su búsqueda más cómoda. A tal fin, este componente se sirve de las tablas Taxonomy_index, Taxonomy_term_data y Taxonomy_vocabulary. 

Por otro lado, FAQ Ask nos otorga la capacidad de, si no encontramos nuestra pregunta, realizarla y encolarla para que la responda el correspondiente experto. Una vez respondida se añade a la sección correspondiente de preguntas.
Video.js

Esta unidad es en realidad un reproductor de vídeo de HTML5 adaptado para Drupal. Gracias a ella, nos es más fácil crear contenedores con un formato predeterminado para poder gestionar nuestro contenido multimedia. Así, los profesores podrían colgar sus explicaciones en forma de vídeo-tutoría.
Cursos online

Plataforma web que permite crear cursos online a los profesores, permitiendo realizar un aprendizaje que se adapte al ritmo del alumno, e incentive su participación mediante logros y objetivos a corto plazo. Estos cursos serán gratuitos para los alumnos, y se permitirá ofrecerlos al exterior del ámbito universitario mediante un pago establecido.

La plataforma seleccionada para la elaboración de los cursos es Course-Builder de Google. Se trata de una herramienta potente y de código abierto que permite la creación de una manera sencilla  cursos online. En la elección de esta herramienta ha influido enormemente el soporte de Google que nos garantiza un correcto funcionamiento en el framework Angular JS. 
Servicios de apuntes

Interfaz web con servidor FTP para compartición de archivos y sistemas de pago por rating. Permite visualizaciones gratuitas de los archivos, a cambio de una puntuación y un comentario acerca de este, y en función de la calidad del archivo será distribuido bajo una cuota conforme a la puntuación, siendo los peores gratuitos.

Los servicios de apuntes serán ofrecidos mediante Drupal. En un comienzo se contemplaron plataformas como Oxwall o Seafile, sin embargo, exisitían problemas de compatibilidad con otros sistemas. Por lo tanto, se decidió escoger Drupal como nexo de todas ellas. 

Para la oferta del servicio de apuntes serán necesarios diversos módulos de Drupal. Entre ellos se han escogido los siguientes:

-File Field

-Views

-Five Star
File Field

Se trata de un módulo que permite la gestión de archivos en la nube. Dicho módulo permite la subida de archivos a gran escala, la limitación de tamaño de archivo, la visualización del progreso de subida, ...

Por todas estas ventajas se hace el módulo idóneo para la tarea a realizar, además, oferta la posibilidad de añadir una infinidad de widgets que mejorarán el resultado en aspectos como funcionalidad o diseño.
Views

Éste módulo permite la visualización ordenada de los contenidos. Mediante sencillas modificaciones podremos ofrecer al usuario realizar búsquedas de archivos por palabras, fechas, autor, ...

Todo ello hace más sencillo el uso de nuestra plataforma incentivando así la subida de apuntes.
Five Star

Se necesita un módulo que permita la evaluación de los apuntes subidos, para ello tenemos Five Star como la mejor opción. Dicho módulo permite el rateo de cualquier nodo de la página de manera sencilla, visual y estadísticamente adecuada. Además, es completamente compatible con Views.

De esta manera tenemos la posibilidad de valorar los apuntes subidos a NetSchool.
Problemas de ingeniería y alternativas

/*Trasladar aquí todo lo que tenga que ver con problemas y análisis de alternativas*/
Estandarización de un sistema educativo online y certificaciones

Desde la organización NetSchool, y ante la falta de un baremo por el cual medir la validez de la formación online, hemos propuesto estandarizar esta clase de cursos, así como la expedición de unas certificaciones oficiales por la realización de los mismos que luego puedan adjuntarse en un currículum como prueba de la adquisición de estos conocimientos.

La normalización del aprendizaje a través de plataformas, comprende tres aspectos: estructura de los cursos (es decir, cómo vamos a distribuir el contenido), contenido y competencias desarrolladas. Para definir tanto el contenido como las competencias a desarrollar, es necesario dividir las materias por áreas de conocimiento. Dicha división será la ya impuesta por el plan Bolonia, de tal forma que pueda integrarse el conocimiento adquirido online con la organización de las universidades europeas. Las áreas del conocimiento serán:

- Artes y Humanidades

- Ciencias

- Ciencias de la Salud

- Ciencias Sociales y Jurídicas

- Ingeniería y Arquitectura

Además, los diplomas oficiales certificarán una serie de niveles, evaluados según un QualityNumber. Dicho QN es la suma de dos magnitudes distintas, a saber: Profundidad de conocimientos y Grado de las Competencias Desarrolladas. Dichas magnitudes se valoran, respectivamente, con una puntuación del 1 al 5 (de lo más básico a lo más complejo) tal como sigue:

PROFUNDIDAD:

1 Contenidos Básicos

2 Contenidos Medios

3 Contenidos Superiores 

4 Contenidos Avanzados

5 Contenidos de Experto

COMPETENCIAS DESARROLLADAS:

1 Competencias teóricas.

2 Competencias teóricas con pequeñas competencias prácticas.

3 Competencias teóricas con muchas competencias prácticas.  

4 Competencias prácticas con baja comprensión teórica.                                          

5 Competencias prácticas con alta comprensión teórica.
