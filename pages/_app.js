// import "../styles/asset/global_assets/css/icons/icomoon/styles.css";
// import "../styles/asset/user/assets/css/bootstrap.min.css";
// import "../styles/asset/global_assets/css/icons/icomoon/styles.css";
// import "../styles/asset/user/assets/css/bootstrap_limitless.min.css";
// import "../styles/asset/user/assets/css/layout.min.css";
// import "../styles/asset/user/assets/css/components.min.css";
// import "../styles/asset/user/assets/css/colors.min.css";
import "../styles/argon.css";
import "../styles/globals.scss";

import { Provider } from "react-redux";
import store from "../store/store";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" />
// <!-- Global stylesheets -->
// <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
// <link href="{{ 'asset/global_assets/css/icons/icomoon/styles.css' }}" rel="stylesheet" type="text/css">
// <link href="{{ 'asset/user/assets/css/bootstrap.min.css' }}" rel="stylesheet" type="text/css">
// <link href="{{ 'asset/user/assets/css/bootstrap_limitless.min.css' }}" rel="stylesheet" type="text/css">
// <link href="{{ 'asset/user/assets/css/layout.min.css' }}" rel="stylesheet" type="text/css">
// <link href="{{ 'asset/user/assets/css/components.min.css' }}" rel="stylesheet" type="text/css">
// <link href="{{ 'asset/user/assets/css/colors.min.css' }}" rel="stylesheet" type="text/css">
// <!-- /global stylesheets -->

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
