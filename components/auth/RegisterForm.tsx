import React from "react";
import styles from "./Auth.module.scss";
import { Button, Form, Input, notification } from "antd";
import { RegisterFormDTO } from "@/api/dto/auth.dto";
import { setCookie } from "nookies";

import * as Api from "@/api";

export const RegisterForm: React.FC = () => {
  const onSubmit = async (values: RegisterFormDTO) => {
    try {
      const { token } = await Api.auth.register(values);

      notification.success({
        message: "Success",
        description: "You have successfully logged in",
        duration: 2,
      });

      setCookie(null, "_token", token, { path: "/" });

      location.href = "/dashboard";

      notification.success({
        message: "Success",
        description: "You have successfully registered",
        duration: 2,
      });
    } catch (error) {
      notification.error({
        message: "Register Error",
        description: "Something went wrong",
        duration: 2,
      });
    }
  };
  return (
    <div className={styles.formBlock}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[{ required: true, message: "E-Mail is required" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Full Name is required" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password is required" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
