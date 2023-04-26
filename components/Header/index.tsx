import React from "react";
import styles from "./Header.module.scss";
import { Avatar, Button, Layout, Menu, Popover } from "antd";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import * as Api from "@/api";

export const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogout = () => {
    if (confirm("Are you sure?")) {
      Api.auth.logout();
      router.push("/");
    }
  };

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Cloud Drive
          </h2>
          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: `/dashboard`, label: "Home" },
              { key: `/dashboard/profile`, label: "Profile" },
            ]}
          />
        </div>
        <div className={styles.headerRight}>
          <Popover
            trigger={"click"}
            content={
              <Button type="primary" danger onClick={onClickLogout}>
                Quit
              </Button>
            }>
            <Avatar>D</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};
