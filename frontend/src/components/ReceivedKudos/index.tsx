import { Col, Row } from "antd"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { fetchAsignedKudos, fetchReceivedKudos, selectAsignedKudosList } from "../../store/asignedKudosListSlice";
import ReceivedSingleKudo from "./receivedSingleKudo";

type Props = {
}

export default function ReceivedKudos(props: Props) {
    const { receivedKudos } = useSelector(selectAsignedKudosList);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchReceivedKudos())
    }, [])

    return (
        <>
            <Col span={24} style={{ textAlign: 'center', fontSize: "40px", marginTop: "20px", border: '2px solid', borderRadius: "5px" }}>
                Received Kudos
                <Row gutter={[10, 10]}>
                    {receivedKudos.map(i => <ReceivedSingleKudo kudo={i} />)}
                </Row>
            </Col>

        </>
    )
}