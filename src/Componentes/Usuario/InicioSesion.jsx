import { Button, Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";

export const InicioSesion=()=>{
    return(
      <Container  className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <Row>
        
            <Row style={{justifyContent: "center", alignItems:"center", textAlign:"center"}}>
                <img src="src\Img\Logo-utez.png" style={{width:200, height:100, marginTop:10}}/>
                <h1>Sivex</h1>
            </Row>

            <Row style={{justifyContent: "center", alignItems:"center"}}>
                <Col md={6}>
                    <Card style={{justifyContent: "center", alignItems:"center", backgroundColor:"#F5ECEC" }}>
                        <CardBody>
                            <Form>
                
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Correo:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Contraseña: </Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button style={{backgroundColor:'#191970', width:250}} type="submit">Iniciar Sesion</Button>
                            </Form> 
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Row>
      </Container>  
    );
}

/*
<img src="src\Img\Logo-utez.png"/>
            <h1>Sivex</h1>
            <Card >
                <CardBody>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="primary" variant="primary" type="submit">Submit</Button>
                </Form>
                </CardBody>
            </Card>
*/