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
    // debugger;
    if (localStorage.getItem("token")) {
      // if (!(window as any).hasCheckedAuth) {
      setAuthorizationToken(localStorage.getItem("token")!);
      (window as any).hasCheckedAuth = true;

      AuthService.getUser()
        .then((res) => {
          (window as any).hasCheckedAuth = true;
          dispatch(
            setCurrentUser({
              user: res.data.user,
              token: localStorage.getItem("token")!,
            })
          );
        })
        .catch((err) => {
          router.push("/");
          console.log(err);
        });
      // }
    } else {
      router.push("/");
    }
  }, []);
};
