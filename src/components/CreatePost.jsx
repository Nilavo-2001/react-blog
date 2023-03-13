import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
export default function CreatePost() {
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [content, setContent] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoaded(false);
    await addDoc(collection(db, "posts"), {
      title,
      subtitle,
      content,
      Date: String(new Date()),
    });
    setIsLoaded(true);
    setTitle("");
    setSubtitle("");
    setContent("");
  };

  return (
    <Container
      className="content"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <h1 className="h1"> Create Post</h1>
      <Container style={{ textAlign: "left", marginTop: "20px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subtitle</Form.Label>
            <Form.Control
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Subtitle..."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              value={content}
              onChange={(e) => setContent(e.target.value)}
              as="textarea"
              rows={6}
            />
          </Form.Group>
          {!isLoaded && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {isLoaded && (
            <Button variant="primary" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </Container>
    </Container>
  );
}
