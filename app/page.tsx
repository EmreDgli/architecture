import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { FeaturedProject } from "@/components/featured-project";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <PortfolioGrid />
      <FeaturedProject />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
