import { PlusSquareOutlined } from '@ant-design/icons/lib/icons'
import { Button, Collapse, Typography } from 'antd'
import CollapsePanel from 'antd/lib/collapse/CollapsePanel'
import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../Context/AppProvider'

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
`
const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom:5px;
  color: white;
  `

export default function RoomList() {

  const { rooms, setIsAddRoomVisible, setselectedRoomId} = React.useContext(AppContext)
  // console.log({ rooms });

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  }
  return (
    <div>
      <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled header="Danh sach cac phong" key="1">
          {
            rooms.map(room =>
              <LinkStyled key={room.id} onClick={() => {
                setselectedRoomId(room.id)
              }}>{room.name}</LinkStyled>
            )
          }
          <Button className='add-room' type='text' icon={<PlusSquareOutlined />} onClick={handleAddRoom}>Them Phong</Button>
        </PanelStyled>
      </Collapse>
    </div>
  )
}
