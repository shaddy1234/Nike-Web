import { Nav } from "./Components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:pl-8 wide:pr-8 pb-4">
        <Hero />
      </section>
      <section className="p-6 sm:p-8">
        <PopularProducts />
      </section>
      <section className="p-6 sm:p-8">
        <SuperQuality />
      </section>
      <section className="px-6 sm:px-8 py-10">
        <Services />
      </section>
      <section className="p-6 sm:p-8">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue p-6 sm:p-8">
        <CustomerReviews />
      </section>
      <section className="px-6 sm:px-8 sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black px-6 sm:px-8 pt-8 pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
