import { Card, Col } from "antd"
import { getReceivedKudos_getReceivedKudos } from "../../__generated__/getReceivedKudos";

type Props = {
    kudo: getReceivedKudos_getReceivedKudos
}
export default function ReceivedSingleKudo(props: Props) {
    const { kudo } = props;

    return (
        <Col span={24}>
            <Card title={`From: ${kudo.User_from.email}`} bordered={false} style={{ width: '100%' }}>
                {kudo.User_from.firstName} {kudo.User_from.lastName}
                <br />
                MESSAGE:{kudo.message}
            </Card>
        </Col>
    )
}