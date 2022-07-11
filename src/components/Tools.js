import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Tools() {
    return <>
        <Container>

            <Row>
                <Col> <>
                    {[

                        'Success',

                    ].map((variant) => (
                        <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </></Col>
                <Col xs={5}>{[

                    'Success',

                ].map((variant) => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '22rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{variant} Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}</Col>
                <Col>{[

                    'Success',

                ].map((variant) => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{variant} Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}</Col>
            </Row>
        </Container>
    </>

}


export default Tools;