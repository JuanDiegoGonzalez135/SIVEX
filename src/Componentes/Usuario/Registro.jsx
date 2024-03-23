import { Button, Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";


export const Registro=()=>{
    return(
        <Container style={{height:'100vh'}}>
        <Row>
            <Row style={{justifyContent: "center", alignItems:"center",textAlign:"center" }}>
                <img src="src\Img\Logo-utez.png" style={{width:200, height:100, marginTop:10}}/>
                <h1>Registro</h1>
            </Row>
            <Row style={{justifyContent: "center", alignItems:"center"}}>
                <Col md={6}>
                    <Card style={{alignItems:"center", backgroundColor:"#F5ECEC" }}>
                        <CardBody>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Correo:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Confirmar Correo:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Contraseña: </Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Confirmar Contraseña: </Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button style={{backgroundColor:'#129E9E', width:250}} variant="success" type="submit">Enviar</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Row>
      </Container>    
    );
}