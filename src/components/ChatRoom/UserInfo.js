import { Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { Button } from 'antd/lib/radio'
import React from 'react'

export default function UserInfo() {
  return (
    <div>
      <div>
        <Avatar />
        <Typography.Text>ABC</Typography.Text>
      </div>
      <Button>Dang xuat</Button>
    </div>
  )
}
