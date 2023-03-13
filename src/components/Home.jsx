import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostCard from "./PostCard";
import db from "../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const newPosts = [];
      querySnapshot.forEach((doc) => {
        newPosts.push(doc.data());
      });
      setPosts(newPosts);
      console.log(newPosts);
    };
    fetchData();
  }, []);
  return (
    <Container className="content" style={{ textAlign: "center" }}>
      <h1 className="display-2"> Posts</h1>
      <Container style={{ marginTop: "10px" }}>
        {posts.map((post) => {
          return (
            <Row>
              <Col>
                <PostCard data={post} />
              </Col>
            </Row>
          );
        })}
      </Container>
    </Container>
  );
}
