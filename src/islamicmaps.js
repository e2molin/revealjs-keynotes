import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/dist/theme/white.css';
import './css/reveal-ign.css';

/**
 * Imágenes
 */
import bgintroIslamic from './images/bgintro-islamic.jpg';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Hightlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';

/**
 * Keynote
 */

const contentKeynote = /*html*/`
  <div class="slides">
    <div class="slides">
      <section id="portrait" 
                data-background-transition="zoom" 
                data-background-image=${bgintroIslamic} 
                data-background-opacity=0.25 
                data-background-size=120% >
        <h1>HISTORIA DE LA CARTOGRAFÍA</h1>
        <br/>
        <h2>
          La cartografía en el Islam
        </h2>
        <br/><br/><br/><br/>
        <p>
          <small>1 de septiembre de 2020</small>
        </p>
        <aside class="notes">
          <p>HISTORIA DE LA CARTOGRAFÍA</p>
          <p>La Cartografía en el mundo del Islam</p>
          <p>Judith Sánchez González</p>
          <p>1 de septiembre de 2020</p>
        </aside>
      </section>

      <!-- Definimos estilo para la sección -->
      <section id="slide-7" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >
        <section id="slide-7.1" 
          data-markdown="keynote-islamicmaps/007-01-index.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8">
        </section>

        <section id="slide-7.2" 
          data-markdown="keynote-islamicmaps/007-02-contexto-geohisto.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8">
        </section>

        <section id="slide-7.3" 
          data-markdown="keynote-islamicmaps/007-03-cronologia.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8">
        </section>
  
      </section>

      <section id="slide-8" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >
          <section id="slide-8.1" 
            data-markdown="keynote-islamicmaps/008-01-ciencia.md" 
            data-separator="^#---------#" 
            data-separator-vertical="^{---------}" 	
            data-separator-notes="^Note:" 
            data-charset="utf-8">
          </section>
      </section>


      <!-- Definimos estilo para la sección -->
      <section id="slide-9" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >

        <section id="slide-9.1" 
          data-markdown="keynote-islamicmaps/009-01-cartoislam-index.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8"
        >
        </section>

        <section id="slide-9.2" 
          data-markdown="keynote-islamicmaps/009-02-cartoislam-caracteristicas.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8"
        >
        </section>

        <section id="slide-9.3" 
          data-markdown="keynote-islamicmaps/009-03-cartoislam-materiales.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 
          data-separator-notes="^Note:" 
          data-charset="utf-8"
        >
        </section>

        <!-- Características -->

      </section>


      <section id="slide-10" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >

        <section id="slide-10.0">

          <h3>Primeras representaciones</h3>

        </section>					

        <section id="slide-10.1" 
          data-markdown="keynote-islamicmaps/010-01-mamun.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8"
        >
        </section>

        <section id="slide-10.2a" 
          data-markdown="keynote-islamicmaps/010-02a-khwarizmi.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8"
        >
        </section>

        <section id="slide-10.2b" 
          data-markdown="keynote-islamicmaps/010-02b-balkhi.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8"
        >
        </section>
      

      </section>

      <!--Mapas KMMS-->
      <section id="slide-10-KMMS" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >

        <section id="slide-10-KMMS-1" 
          data-markdown="keynote-islamicmaps/010-02b-kmms.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8"
        >
        </section>

      </section>
        
      <!--al Istakhri-->
      <section 
        id="slide-11-Istakhri" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >

        <section id="slide-11.1" 
          data-markdown="keynote-islamicmaps/011-01-istakhri.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 
          data-separator-notes="^Note:" 
          data-charset="utf-8">
        </section>

      </section><!-- Final slide 8-->

      <!--Ibn Hawqal-->
      <section id="slide-12-IbnHawqal" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >
      
        <section id="slide-12.1" 
          data-markdown="keynote-islamicmaps/012-01-ibnhawqal.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8">
        </section>
      
      </section> <!-- Final Ibn Ḥawqal-->


      <!--al Idrisi-->
      <section id="slide-13-Idrisi" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >

        <section id="slide-13.1" 
          data-markdown="keynote-islamicmaps/013-01-idrisi.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8">
        </section>
        
      </section>

      <!--Book of Curiosities-->
      <section id="slide-14-Curiosities" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >
        <section id="slide-14.1" 
        data-markdown="keynote-islamicmaps/014-01-curiosities.md" 
        data-separator="^#---------#" 
        data-separator-vertical="^{---------}" 	
        data-separator-notes="^Note:" 
        data-charset="utf-8">
        </section>
      </section>

      <section id="slide-15-OtrosMapas" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >

        <section id="slide-15.1" 
          data-markdown="keynote-islamicmaps/015-01-otrosmapas.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 	
          data-separator-notes="^Note:" 
          data-charset="utf-8">
        </section>
        
      </section>


      <!--Piri Reis-->
      <section id="slide-16-PiriReis" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120%
      >

        <section id="slide-16.1" 
          data-markdown="keynote-islamicmaps/016-01-pirireis.md" 
          data-separator="^#---------#" 
          data-separator-vertical="^{---------}" 
          data-separator-notes="^Note:" 
          data-charset="utf-8">
        </section>
        
      </section>
      
      
      <section id="slide-16-conclusiones" 
        data-background-transition="zoom"
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120% 
        data-markdown
      >
        ## CONCLUSIONES
      </section>

      <section id="slide-17-biblio" 
        data-background-transition="zoom" 
        data-background-image=${bgintroIslamic} 
        data-background-opacity=0.25 
        data-background-size=120% 
        data-markdown
      >
        ## Bibliografía
      </section>

      <section id="slide-18-agradecimientos" 
        data-background-transition="zoom" 
        data-background-image="images/bgintro-islamic.jpg" 
        data-background-opacity=0.25 
        data-background-size=120% 
        data-markdown
      >
          ### Gracias por su atención

          Turno de preguntas
      </section>		
      
      </section>
      <!-- Final Keynote-->
    </div>
  </div>
`;

document.querySelector('#keynote').innerHTML = contentKeynote;

let deck = new Reveal({
   plugins: [ Markdown, Notes, Hightlight,Zoom ]
})
deck.initialize({
  // The "normal" size of the presentation, aspect ratio will
  // be preserved when the presentation is scaled to fit different
  // resolutions. Can be specified using percentage units.
  width: 960,
  height: 700,
  // Factor of the display size that should remain empty around
  // the content
  margin: 0.04,
  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 2.0,
  hash:true // Añade a la URL el hash de la diapositiva
});
