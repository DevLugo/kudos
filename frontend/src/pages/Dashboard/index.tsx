import { Button, Card, Col, Input, Row } from "antd";

export default function Dashboard() {
    return (
        <div className="m-8 bg-white border-1	bordered rounded-md">
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={24} style={{ textAlign: 'center', fontSize: "40px" }}>
                        Kudos Asigned To You
                    </Col>
                    <Col span={8}>
                        <Card title="To: Card title" bordered={false}>
                            Card content
                            <Input type="text" />
                            <Button>Send</Button>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24} style={{ textAlign: 'center', fontSize: "40px" }}>
                        Kudos Asigned To You
                    </Col>
                    <Col span={8}>
                        <Card title="To: Card title" bordered={false}>
                            Card content
                            <Input type="text" />
                            <Button>Send</Button>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
