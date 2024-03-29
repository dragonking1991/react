import { Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { Button } from 'antd/lib/radio'
import React from 'react'
import styled from 'styled-components'

import { auth } from '../../firebase/config'

import { AuthContext } from '../Context/AuthProvider'

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

  const { user: {
    displayName,
    photoURL
  } } = React.useContext(AuthContext)

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0).toUpperCase()}</Avatar>
        <Typography.Text className='username'>{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()} >Dang xuat</Button>
    </WrapperStyled>
  )
}
