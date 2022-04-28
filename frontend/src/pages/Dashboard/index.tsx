import { Button, Card, Col, Input, Row } from "antd";
import AsignedKudosList from "../../components/AsignedKudos";
import ReceivedKudos from "../../components/ReceivedKudos";

export default function Dashboard() {
    return (
        <div className="m-8 bg-white border-1	bordered rounded-md">
            <div className="site-card-wrapper">
                <Row gutter={24}>
                    <AsignedKudosList />

                    <ReceivedKudos />
                </Row>
            </div>
        </div >
    )
}
