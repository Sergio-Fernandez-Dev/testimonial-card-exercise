import './App.css';
import TestimonialCard from './components/TestimonialCard';
import cardInfo from './info/info';

function App() {
  return (
    <div className="App">
      <main className='main-container'>
        <h1>Lo que otras personas dicen de mí</h1>
        <TestimonialCard
          name={cardInfo.shawn.name}
          country={cardInfo.shawn.country}
          jobTitle={cardInfo.shawn.jobTitle}
          company={cardInfo.shawn.company}
          testimony={cardInfo.shawn.testimony}
          image={cardInfo.shawn.image} />
        <TestimonialCard 
          name={cardInfo.emma.name}
          country={cardInfo.emma.country}
          jobTitle={cardInfo.emma.jobTitle}
          company={cardInfo.emma.company}
          testimony={cardInfo.emma.testimony}
          image={cardInfo.emma.image} />
        <TestimonialCard 
          name={cardInfo.sarah.name}
          country={cardInfo.sarah.country}
          jobTitle={cardInfo.sarah.jobTitle}
          company={cardInfo.sarah.company}
          testimony={cardInfo.sarah.testimony}
          image={cardInfo.sarah.image} />
      </main>
    </div>
  );
}

export default App;