import { Button, Card, Col, Input } from "antd"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { requestSendKudo } from "../../store/asignedKudosListSlice";
import { selectMe } from "../../store/authSlice";
import { getAsignedKudos_getAsignedKudos } from "../../__generated__/getAsignedKudos";

type Props = {
    kudo: getAsignedKudos_getAsignedKudos
}
export default function SingleAsignedKudo(props: Props) {
    const { kudo } = props;
    const dispatch = useAppDispatch();
    const [kudoMessage, setKudoMessage] = useState<string>("");

    const sendKudo = () => {
        dispatch(requestSendKudo({
            asignedKudoId: kudo.id,
            variables: {
                input: {
                    id: kudo.id,
                    User_to: {
                        connect: {
                            id: kudo.userToR.id
                        }
                    },
                    message: kudoMessage
                }
            }
        }))
    }

    return (
        <Col span={8}>
            <Card title={`To: ${kudo.userToR.email}`} bordered={false} style={{ width: '100%' }}>
                {kudo.userToR.firstName} {kudo.userToR.lastName}
                <Input
                    type="text"
                    disabled={kudo.status === "SENT"}
                    onChange={e => setKudoMessage(e.target.value)} value={kudoMessage} />
                <Button
                    onClick={() => sendKudo()}
                    disabled={kudo.status === "SENT"}
                >
                    {kudo.status === "SENT" ? "Already sent" : "Send"}
                </Button>
            </Card>
        </Col>
    )
}