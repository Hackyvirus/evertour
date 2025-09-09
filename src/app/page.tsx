import Content from "./components/Content";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PlatformInformation from "./components/PlatformInformation";




export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlatformInformation/>
      <Content/>
    </>

  );
}
