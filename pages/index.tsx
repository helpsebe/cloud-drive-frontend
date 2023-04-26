import { NextPage } from "next";
import React from "react";
import { Layout } from "@/layouts/Layout";

const DashboardPage: NextPage = () => {
  return <></>;
};

// @ts-ignore: TODO: fix this
DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Cloud Drive">{page}</Layout>;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
  };
};

export default DashboardPage;
