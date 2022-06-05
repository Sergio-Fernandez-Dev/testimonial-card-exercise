import './App.css';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div className="App">
      <main className='main-container'>
        <h1>Lo que otras personas dicen de mí</h1>
        <TestimonialCard 
          name="Emma Bostian "
          country="Suecia"
          jobTitle="Ingeniera de Software"
          company="Spotify"
          testimony="Sergio es todo un profesional de la programación.
          Ha sido un auténtico placer conocerlo y verlo trabajar.
          A su lado he podido aprender un montón sobre código limpio y buenas prácticas.
          Su trabajo me ha servido de inspiración y me ha ayudado a mejorar como profesional."
          image=""
        />
      </main>
    </div>
  );
}

export default App;