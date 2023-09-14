import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LineGradient from './components/LineGradient';
import Footer from './components/Footer';

function App() {
	return (
		<div className='bg-[#0a192f]'>
			<div>
				<Navbar />
			</div>
			<div>
				<Home />
			</div>
			<div>
				<LineGradient />
			</div>
			<div>
				<About />
			</div>
			<div className='mb-10'>
				<LineGradient />
			</div>
			<div>
				<Skills />
			</div>
			<div className='mb-10'>
				<LineGradient />
			</div>
			<div>
				<Projects />
			</div>
			<div className='mt-10'>
				<LineGradient />
			</div>
			<div>
				<Contact />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
