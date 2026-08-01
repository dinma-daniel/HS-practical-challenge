import './App.css';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Testimonial from './Sections/Testimonial';
import FAQ from './Sections/FAQ';
import Nav from './components/Nav';
import { ScholarshipProvider, useScholarship } from './data/ScholarshipContext';

const SLUG = 'data-science-apprenticeship-zeptolab';

function Page() {
  const { loading, error } = useScholarship();

  if (loading) return <div className="p-20 text-center text-brand-text">Loading…</div>;
  if (error) return <div className="p-20 text-center text-brand-text">Couldn’t load the scholarship: {error.message}</div>;

  return (
    <div className="App overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Testimonial />
      <FAQ />
    </div>
  );
}

function App() {
  return (
    <ScholarshipProvider slug={SLUG}>
      <Page />
    </ScholarshipProvider>
  );
}

export default App;
