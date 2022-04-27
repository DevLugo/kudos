import { Button, Col, Form, Input, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { selectMe, signInWithCredentials } from "../../store/authSlice";
import './login.css';

export default function Login() {
    const dispatch = useAppDispatch();
    const { loading, token, error } = useSelector(selectMe);
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = () => {
        dispatch(signInWithCredentials({
            input: {
                email: user,
                password: password
            }
        }));
    }

    return (
        <Content className="items-center justify-center">
            <Row>
                <Col span={10} offset={6} className="center">
                    <Form
                        className="custom-form"
                        name="basic"
                        labelCol={{
                            span: 24,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input value={user} onChange={e => setUser(e.target.value)} placeholder="Type your username" />
                        </Form.Item>

                        <Form.Item
                            className="horizontal-input"
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password value={password} onChange={e => setPassword(e.target.value)} placeholder="Type your password" />
                        </Form.Item>

                        <Form.Item
                            style={{ width: '100%' }}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Button className="login-button" type="primary" htmlType="submit" onClick={login} loading={loading}>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Content>
    )
}

