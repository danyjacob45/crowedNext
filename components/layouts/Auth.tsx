import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

const Layout = ({ title = "Login", children }: Props) => {
  return (
    <div className="bg-light">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
