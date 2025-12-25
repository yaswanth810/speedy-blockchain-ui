import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BlockchainBackground from "@/components/BlockchainBackground";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Yaswanth Rayapureddy | Blockchain Developer</title>
        <meta
          name="description"
          content="Blockchain developer specializing in Solidity, smart contracts, ERC-721 NFTs, and Web3 applications. Building secure decentralized solutions."
        />
        <meta
          name="keywords"
          content="blockchain developer, solidity, smart contracts, web3, ethereum, nft, defi, crypto"
        />
        <meta property="og:title" content="Yaswanth Rayapureddy | Blockchain Developer" />
        <meta
          property="og:description"
          content="Blockchain developer specializing in Solidity, smart contracts, and Web3 applications."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yaswanth.dev" />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-x-hidden">
        <BlockchainBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
