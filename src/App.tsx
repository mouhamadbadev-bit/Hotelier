import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import FeaturesBar from "./components/home/FeaturesBar";
import ExperienceCards from "./components/home/ExperienceCards";

import RoomGrid from "./components/rooms/RoomGrid";
import ContactForm from "./components/contact/ContactForm";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <FeaturesBar />

        <RoomGrid />

        <ExperienceCards />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default App;