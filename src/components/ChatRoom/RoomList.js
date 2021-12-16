import { Collapse } from 'antd'
import CollapsePanel from 'antd/lib/collapse/CollapsePanel'
import React from 'react'

export default function RoomList() {
  return (
    <div>
      <Collapse>
        <CollapsePanel header="Danh sach cac phong" key="1">
        </CollapsePanel>
      </Collapse>
    </div>
  )
}
