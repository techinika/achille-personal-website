import HireMeForm from "../components/Forms/hireMe";
import { Nav } from "../components/Navigation/Nav";
import { Footer } from "../components/Sides/Footer";
import { Header } from "../components/Sides/Header";

export default function HireMe() {
  return (
    <>
      <Header></Header>
      <section>
        <Nav title="Hire Me For You" />
        <HireMeForm />
      </section>
      <Footer></Footer>
    </>
  );
}
