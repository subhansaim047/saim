import Hero from "./components/Hero";
import PizzaSection from "./components/PizzaSection";
import MenuSection from "./components/MenuSection";

export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden">
      <Hero />
      <PizzaSection />
      <MenuSection />
    </main>
  );
}
