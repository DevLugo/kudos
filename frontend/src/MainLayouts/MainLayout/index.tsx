import { Link, Outlet, useNavigate } from "react-router-dom";
import { Row, Col, Layout, Menu, Breadcrumb } from "antd";
import { useLocation } from 'react-router-dom';
import { logoutUser, selectMe } from "../../store/authSlice";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

export default function MainLayout() {
    const { user } = useSelector(selectMe)
    const dispatch = useAppDispatch();
    const location = useLocation();

    return (
        <>
            <Row>
                <Col lg={24}>
                    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <Menu theme="dark" mode="horizontal" >
                            <Menu.Item disabled={true} key="1" >User: {user?.firstName} {user?.lastName}</Menu.Item>
                            <Menu.Item disabled={true} key="2" >Company: {user?.organization?.name}</Menu.Item>
                            <Menu.Item key="3" onClick={() => dispatch(logoutUser())}>Salir</Menu.Item>
                        </Menu>
                    </Header>
                </Col>
            </Row>
            <Layout hasSider>

                <Sider width={200} style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: "64px",
                    bottom: 0,
                }} className="site-layout-background">
                    <Menu
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        defaultOpenKeys={['sub1']}

                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="/in/dashboard">
                            <Link to="/in/dashboard">Dashboard</Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200, marginTop: 50, height: "100vh" }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            overflow: 'initial'
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>

            <Footer style={{ textAlign: 'center' }}>Kudos</Footer>
        </>
    );
}
