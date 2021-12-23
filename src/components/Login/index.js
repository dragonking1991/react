import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from '../../firebase/config'
import { addDocument } from "../../firebase/services";

const { Title } = Typography;

const fbProvide = new firebase.auth.FacebookAuthProvider();

export default function Login() {

  const handleFBLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvide);

    if (additionalUserInfo.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerID: additionalUserInfo.providerId
      })
    }
  };

  return (
    <div>
      <Row justify="center" style={{ height: '100vh' }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center' }} level={1}>
            Fun Chat
          </Title>
          <Button style={{ width: '100%', marginBottom: 5 }}>Đăng nhập bằng Google</Button>
          <Button style={{ width: '100%', marginBottom: 5 }} onClick={handleFBLogin}>Đăng nhập bằng FaceBook</Button>
        </Col>
      </Row>
    </div>
  )
}