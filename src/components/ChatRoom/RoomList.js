import { PlusSquareOutlined } from '@ant-design/icons/lib/icons';
import { Button, Collapse, Typography } from 'antd'
import CollapsePanel from 'antd/lib/collapse/CollapsePanel'
import React from 'react'
import styled from 'styled-components'
import useFilestore from '../../Hooks/useFilestore';
import { AuthContext } from '../Context/AuthProvider';

const PanelStyled = styled(CollapsePanel)`
  &&& {
    .ant-collapse-header, p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom:5px;
  color: white;
`;

export default function RoomList() {
  const { user: { uid } } = React.useContext(AuthContext)

  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid
    }
  }, [uid]);

  const roomsFull = useFilestore('rooms');
  const rooms = useFilestore('rooms', roomsCondition);
  console.log({roomsFull, rooms,roomsCondition, uid })

  return (
    <div>
      <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled header="Danh sach cac phong" key="1">
          {
            rooms.map(room => <LinkStyled key={room.id}>{room.name}</LinkStyled>)
          }
          <Button className='add-room' type='text' icon={<PlusSquareOutlined />}>Them Phong</Button>
        </PanelStyled>
      </Collapse>
    </div>
  )
}
