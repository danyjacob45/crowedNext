import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { routes } from "../routes/routes";
import { AuthService } from "../services/auth/auth.http";
import { setAuthorizationToken } from "../services/axios-with-token";
import { setCurrentUser } from "../store/auth/authActions";

export const useCheckAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (!(window as any).hasCheckedAuth) {
        setAuthorizationToken(localStorage.getItem("token")!);
        AuthService.getUser()
          .then((res) => {
            (window as any).hasCheckedAuth = true;
            dispatch(
              setCurrentUser({
                store: res.data.store,
                user: res.data.user,
                token: localStorage.getItem("token")!,
              })
            );
            if (!res.data.store) {
              router.push(routes.registerStepTo().href);
            }
          })
          .catch((err) => {
            router.push("/login");
            console.log(err);
          });
      }
    } else {
      router.push("/login");
    }
  }, []);
};
