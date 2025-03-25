import { AuthModal, Product, Navigation } from "@/features";
import { Main, Featured } from "@/widgets";

export default function Home() {

  return (
    <div>
      <AuthModal />
      <Navigation />
      <Main />
      <Featured />
      <h1 id='Products' className='mt-20 text-center text-4xl font-[600]'>Trending Earphones</h1>
      <Product/>
    </div>
  );
}
