import { GetServerSidePropsContext, NextPage } from "next";
import { User } from "@/api/dto/auth.dto";
import styles from "@/styles/Profile.module.scss";
import { Typography, Descriptions, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { checkAuth } from "@/utils/checkAuth";

import * as Api from "@/api";
import { Layout } from "@/layouts/Layout";

const { Title } = Typography;

interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
  const onClickLogout = () => {
    if (confirm("Are you sure?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };
  return (
    <main>
      <div className={styles.root}>
        <Space direction="horizontal" size="large" align="start">
          <Title>Profile</Title>
          <UserOutlined className={styles.profileIcon} />
        </Space>
        <br />
        <Descriptions column={1}>
          <Descriptions.Item label="ID">{userData.id}</Descriptions.Item>
          <Descriptions.Item label="Username">
            {userData.fullName}
          </Descriptions.Item>
          <Descriptions.Item label="E-Mail">{userData.email}</Descriptions.Item>
        </Descriptions>
        <Button
          type="primary"
          danger
          className={styles.quitButton}
          onClick={onClickLogout}>
          Quit
        </Button>
      </div>
    </main>
  );
};

// @ts-ignore: TODO: fix this
DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard | Profile">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: { userData },
  };
};

export default DashboardProfilePage;
