import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { LoadingProvider } from "./LoadingContext";
import "nprogress/nprogress.css";
import { Spin } from "antd";

interface Props extends AppProps {
  Component: AppProps["Component"] & {
    getLayout: (page: React.ReactElement) => React.ReactNode;
  };
}

export default function App({ Component, pageProps }: Props) {
  const [loading, setLoading] = React.useState(true);
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <LoadingProvider>{getLayout(<Component {...pageProps} />)}</LoadingProvider>
  );
}
