// SurveyForm.js
import React, { useState } from 'react';
import { Form, Input, Button, notification, FormInstance } from 'antd';
import styles from './index.module.scss';
import { addHelpData } from '@/service/api';
const SurveyForm = ({setVisible,form}:{
    setVisible: (visible: boolean) => void;
    form:FormInstance
}) => {
  

    const onFinish = (values: any) => {
        // 在这里处理表单提交，比如发送数据到服务器
        addHelpData({ ...values }).then(res => {
            notification.success({
                message: '提交成功',
                description: '您的问卷调查已提交！',
            });
            form.resetFields();
            setVisible(false);
        }).catch(err => {
            console.error(err)
        })

    };

    const onFinishFailed = (errorInfo: any) => {
        console.error('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="survey_form"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.form}
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ message: '请输入用户名!' }]}
            >
                <Input placeholder='请输入用户名' />
            </Form.Item>

            <Form.Item
                label="描述"
                name="description"
                rules={[{ required: true, message: '请输入您的问题' }]}
            >
                <Input.TextArea style={{ minHeight: 160 }} placeholder='请输入您的问题' />
            </Form.Item>

            <Form.Item
                label="电话"
                name="phone"
                rules={[
                    { message: '请输入电话号码!' },
                    {
                        pattern: /^\d{11}$/,
                        message: '电话号码必须是11位数字!',
                    },
                ]}
            >
                <Input placeholder='请输入电话号码' />
            </Form.Item>

            <Form.Item
                label="电子邮件"
                name="email"
                rules={[
                    { message: '请输入电子邮件!' },
                    {
                        type: 'email',
                        message: '请输入有效的电子邮件地址!(以便更好的联系您)',
                    },
                ]}
            >
                <Input placeholder='请输入有效的电子邮件地址!(以便更好的联系您)' />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SurveyForm;