import React from "react";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";
import { UploadButton } from "@/components/UploadButton";
import { Menu, Spin } from "antd";
import {
  DeleteOutlined,
  FileImageOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { useLoading } from "@/pages/LoadingContext";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { isLoading, setLoading } = useLoading();
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router, setLoading]);

  const selectedMenu = router.pathname;

  return (
    <main className={styles.dashboardContainer}>
      {isLoading ? (
        <div className={styles.loader}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className={styles.sidebar}>
            <UploadButton />
            <Menu
              className={styles.menu}
              mode="inline"
              selectedKeys={[selectedMenu]}
              items={[
                {
                  key: `/dashboard`,
                  icon: <FileOutlined />,
                  label: `Files`,
                  onClick: () => router.push("/dashboard"),
                },
                {
                  key: `/dashboard/photos`,
                  icon: <FileImageOutlined />,
                  label: `Photos`,
                  onClick: () => router.push("/dashboard/photos"),
                },
                {
                  key: `/dashboard/trash`,
                  icon: <DeleteOutlined />,
                  label: `Trash`,
                  onClick: () => router.push("/dashboard/trash"),
                },
              ]}
            />
          </div>

          <div className="container">{children}</div>
        </>
      )}
    </main>
  );
};
