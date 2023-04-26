import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";
import React from "react";
import { Layout } from "@/layouts/Layout";
import { useRouter } from "next/router";

import * as Api from "@/api";
import { FileItem } from "@/api/dto/files.dto";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import Files from "@/modules/Files";

interface Props {
  items: FileItem[];
}

const DashboardTrash: NextPage<Props> = ({ items }) => {
  const router = useRouter();
  const selectedMenu = router.pathname;
  return (
    <DashboardLayout>
      <Files items={items} />
    </DashboardLayout>
  );
};

// @ts-ignore: TODO: fix this
DashboardTrash.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard | Photos">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll("trash");

    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        items: [],
      },
    };
  }
};

export default DashboardTrash;
