import { UserAddOutlined } from '@ant-design/icons/lib/icons'
import { Button, Input, Tooltip, Avatar, Form } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../Context/AppProvider';
import Message from './Message';

const WarpperStyle = styled.div`
  height: 100vh;
`

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom:1px solid purple;

  .header {
    &__info {
      display: flex;
      flex-direction:column;
      justify-content:center;
    }

    &__title {
      margin: 0;
      font-weight:bold;
    }

    &__description {
      font-size:12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items:center;
`;

const MessageListStyled = styled.div``;

const ContentStyled = styled.div`
  height: calc( 100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content:flex-end;
`;

const FormStyled = styled(Form)`
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding: 2px 2px 2px 0 ;
  border: 1px solid rgb(230,230,230);
  border-radius:2px;

  .ant-form-item {
    flex:1;
    margin-bottom:0
  }
`

export default function ChatWindow() {
  const { selectedRoom, members } = React.useContext(AppContext)

  return (
    <div>
      <WarpperStyle>
        <HeaderStyled>
          <div className='header__info'>
            <p className='header__title'>{selectedRoom && selectedRoom.name}</p>
            <span className='header__description'>{selectedRoom && selectedRoom.description}</span>
          </div>

          <ButtonGroupStyled>
            <Button icon={<UserAddOutlined />} type='text'>Invite</Button>
            <Avatar.Group size='small' maxCount={2}>
              {
                members.map(member =>
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>{member.photoURL ? '' : member.displayName?.charAt(0)?.toUpperCase()}</Avatar>
                  </Tooltip>
                )
              }
            </Avatar.Group>
          </ButtonGroupStyled>

        </HeaderStyled >

        <ContentStyled>
          <MessageListStyled>
            <Message text='sdasd' photoURL={null} displayName='xxxxxxxx' createdAt={123123132} />
            <Message text='sdasd' photoURL={null} displayName='xxxxxxxx' createdAt={123123132} />
            <Message text='sdasd' photoURL={null} displayName='xxxxxxxx' createdAt={123123132} />
          </MessageListStyled>

          <FormStyled>
            <Form.Item>
              <Input placeholder='Enter message' bordered={false} autoComplete='off' />
            </Form.Item>
            <Button type='primary'>Send</Button>
          </FormStyled>
        </ContentStyled>
      </WarpperStyle>
    </div >
  )
}
