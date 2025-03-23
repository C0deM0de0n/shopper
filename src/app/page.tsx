import { AuthModal } from "@/features";
import { Navigation } from "@/features";
import { Main } from "@/widgets";

export default function Home() {

  return (
    <div>
      <AuthModal />
      <Navigation />
      <Main />
    </div>
  );
}
