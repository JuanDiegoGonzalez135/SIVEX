import { Container, Row, Table } from "react-bootstrap";

export const Servicios=()=>{
    return(
        <Container>
            <Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Algo</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mesas</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mesas</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mesas</td>
                                <td>...</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>10-08-2024</td>
                                <td>Mesas</td>
                                <td>...</td>
                            </tr>
                        </tbody>
                </Table>
            </Row>
        </Container>
    );
}