import { Container, Row, Table } from "react-bootstrap"

export const Historial=()=>{
    return(
        <Container>
            <Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Evento</th>
                            <th>Espacio</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>14-01-2024</td>
                                <td>No se</td>
                                <td>Docencia 2</td>
                                <td>$3000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>28-04-2024</td>
                                <td>Ni idea</td>
                                <td>Auditorio</td>
                                <td>$5000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>5-05-2024</td>
                                <td>Cumpleaños</td>
                                <td>Nose</td>
                                <td>$5000</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>10-08-2024</td>
                                <td>Cumpleaños</td>
                                <td>Nose</td>
                                <td>$5000</td>
                            </tr>
                        </tbody>
                </Table>
            </Row>
        </Container>
    );
}