import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth}  from '../../firebase/config'

const {Title} = Typography ;

const fbProvide = new firebase.auth.FacebookAuthProvider();

export default function Login() {

  const handleFBLogin = () => {
    auth.signInWithPopup(fbProvide);
  };

  return (
    <div>
      <Row justify="center" style={{ height: '100vh' }}>
        <Col span={8}>
          <Title style={{textAlign:'center'}} level={1}>
            Fun Chat
          </Title> 
          <Button style={{ width: '100%', marginBottom: 5 }}>Đăng nhập bằng Google</Button>
          <Button style={{ width: '100%', marginBottom: 5 }} onClick={handleFBLogin}>Đăng nhập bằng FaceBook</Button>
        </Col>
      </Row>
    </div>
  )
}