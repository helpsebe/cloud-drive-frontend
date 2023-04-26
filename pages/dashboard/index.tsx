import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";
import React from "react";
import { Layout } from "@/layouts/Layout";

import * as Api from "@/api";

const DashboardPage: NextPage = () => {
  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
};

// @ts-ignore: TODO: fix this
DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard | Home">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  return {
    props: {},
  };
};

export default DashboardPage;
