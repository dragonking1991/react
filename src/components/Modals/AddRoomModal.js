import React from 'react'
import { Modal, Form, Input } from 'antd'
import { AppContext } from '../Context/AppProvider'
import { addDocument } from '../../firebase/services'
import { AuthContext } from '../Context/AuthProvider'

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = React.useContext(AppContext)
  const { user: { uid } } = React.useContext(AuthContext)
  const [form] = Form.useForm()

  const handleOK = () => {

    console.log({ FormData: form.getFieldValue() })
    addDocument('rooms', { ...form.getFieldValue(), members: [uid] })
    form.resetFields()
    setIsAddRoomVisible(false)
  }

  const handleCancel = () => {
    form.resetFields()
    setIsAddRoomVisible(false)
  }

  return (
    <div>
      <Modal
        title="Tạo phòng"
        visible={isAddRoomVisible}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        <Form form={form} layout='vertical'>
          <Form.Item label="Tên Phòng" name="name">
            <Input placeholder='Nhập tên phòng' />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input placeholder='Nhập mô tả' />
          </Form.Item>
        </Form>
      </Modal>

    </div>
  )
}
