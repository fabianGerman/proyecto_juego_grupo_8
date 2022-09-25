import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import './style.css';

function MyVerticallyCenteredModal(props) {
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="text-header">
        <Modal.Title id="contained-modal-title-vcenter" >
          Datos del Jugador
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Complete Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
            <Form.Text className="text-muted">
              We'll never share your name with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          
          <Button variant="primary" type="submit" id="btnJugar">
            INICIAR
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="text-footer">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    <script src='./controlJuego,js'></script>
    </>
  );
}
export default MyVerticallyCenteredModal;