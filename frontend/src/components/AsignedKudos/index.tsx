import { Col, Row } from "antd"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { fetchAsignedKudos, selectAsignedKudosList } from "../../store/asignedKudosListSlice";
import SingleAsignedKudo from "./SingleAsignedKudo"

type Props = {
}

export default function AsignedKudosList(props: Props) {
    const { loadingItems, items } = useSelector(selectAsignedKudosList);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAsignedKudos())
    }, [])

    return (
        <>
            <Col span={24} style={{ textAlign: 'center', fontSize: "40px", border: '2px solid', borderRadius: "5px" }}>
                Kudos Asigned To You
                <Row gutter={10}>
                    {items.map(i => <SingleAsignedKudo kudo={i} />)}
                </Row>
            </Col>

        </>
    )
}