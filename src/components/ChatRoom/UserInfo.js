import { Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { Button } from 'antd/lib/radio'
import React from 'react'
import styled from 'styled-components'

import { auth, db } from '../../firebase/config'

const WrapperStyled = styled.div`
  display:flex;
  justify-content: space-between;
  padding:12px 16px;
  border-bottom: 1px solid red;

  .username {
    color: white;
    margin-left:5px;
  }

`;

export default function UserInfo() {
  React.useEffect(() => {
    db.collection('users').onSnapshot( snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
      }))

      console.log({ data, snapshot, docs: snapshot.docs })
    })
  })

  return (
    <WrapperStyled>
      <div>
        <Avatar />
        <Typography.Text className='username'>ABC</Typography.Text>
      </div>
      <Button ghost onClick={ () => auth.signOut()} >Dang xuat</Button>
    </WrapperStyled>
  )
}
