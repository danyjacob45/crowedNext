import Head from "next/head";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import { connect } from "react-redux";
import { setCurrentUser } from "../store/auth/authActions";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { IStoreState } from "../store/reducers/rootReducer";
import { IUser } from "../store/auth/authReducers";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
  title?: string;
  setCurrentUser: typeof setCurrentUser;
  user: IUser | null;
};

const Layout: React.FC<Props> = ({ title = "Next app", children, user }) => {
  // useCheckAuth();
  const { sideBarCollapse } = useSelector((store: any) => {
    return store.ui;
  });

  console.log(user);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header sideBarCollapse={sideBarCollapse} />
      {/* <Header user={"user"} /> */}

      {"user" ? (
        <>
          <Sidebar />

          <main
            className="mainContainer"
            style={{
              marginLeft: `${sideBarCollapse ? "62px" : "250px"}`,

              width: `${
                sideBarCollapse ? "calc(100% - 62px)" : "calc(100% - 250px)"
              }`,
            }}
          >
            <>{children}</>
          </main>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state: IStoreState) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {
  setCurrentUser,
})(Layout);
