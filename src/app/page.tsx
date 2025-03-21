import { useAppDispatch, useAppSelector } from "@/shared/redux/store";
import { setAuthModal } from "@/shared/redux/slices/auth-slice";
import Cookie from 'js-cookie'
import { AuthModal } from "@/widgets";

export default function Home() {

  return (
    <div>
      <AuthModal />
    </div>
  );
}
