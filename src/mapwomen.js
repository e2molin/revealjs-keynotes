import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/dist/theme/white.css';
import './css/reveal-ign.css';

/**
 * Imágenes
 */
import bgMiddleAge  from './images/bgintro-islamic.jpg';
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
      <section id="slide-0"
                data-markdown="keynote-mapwomen/000-index.md" 
                data-separator="^#---------#" 
                data-separator-vertical="^{---------}" 	
                data-separator-notes="^Note:" 
                data-charset="utf-8"
                data-background-transition="zoom" 
                data-background-image=${bgMiddleAge} 
                data-background-opacity=0.25 
                data-background-size=120% >
      </section>

      <section id="slide-1" 
        data-background-transition="zoom" 
        data-background-image=${bgMiddleAge} 
        data-background-opacity=0.25 
        data-background-size=120%
      >
          <section id="slide-1.1" 
            data-markdown="keynote-mapwomen/001-comienzos.md" 
            data-separator="^#---------#" 
            data-separator-vertical="^{---------}" 	
            data-separator-notes="^Note:" 
            data-charset="utf-8">
          </section>
      </section>

      <section id="slide-X-conclusiones" 
        data-background-transition="zoom"
        data-background-image=${bgMiddleAge} 
        data-background-opacity=0.25 
        data-background-size=120% 
        data-markdown
      >
        ## CONCLUSIONES
      </section>

      <section id="slide-Y-biblio" 
        data-background-transition="zoom" 
        data-background-image=${bgMiddleAge} 
        data-background-opacity=0.25 
        data-background-size=120% 
        data-markdown
      >
        ## Bibliografía
      </section>

      <section id="slide-Z-agradecimientos" 
        data-background-transition="zoom" 
        data-background-image=${bgMiddleAge}  
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
