import Banner from "./components/Banner";
import Education from "./components/Education";
// import Contact from "./components/Contact";
// import Feature from "./components/Feature";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
// import ProgressBars from "./components/ProgressBar";

// import Projects from "./components/Projects";
import Watch from "./components/Watch";

function App() {
  return (
    <main className="font-bodyFont h-auto">
      <Navbar />

      <div className="w-full">
        <div>
        
        <Banner />
        <Watch/>
        <Education/>
        <Testimonial/>
          {/* <ProgressBars/>    */}
          {/* <Feature />
          <Projects />
          <Resume />
          <Contact />
          <Footer /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
