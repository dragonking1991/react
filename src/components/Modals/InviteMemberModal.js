import React from 'react'
import { Modal, Form, Input, Select, Spin } from 'antd'
import { AppContext } from '../Context/AppProvider'
import { addDocument } from '../../firebase/services'
import { AuthContext } from '../Context/AuthProvider'
import debounce from 'lodash.debounce'
import Avatar from 'antd/lib/avatar/avatar'

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...prop }) {
  const [fetching, setFetching] = React.useState(false)
  const [options, setOptions] = React.useState([])

  const debounceFetcher = React.useMemo(() => {
    const loadOptions = value => {
      setOptions([])
      setFetching(true)

      setOptions(value).then(newOptions => {
        setOptions(newOptions)
        setFetching(false)
      })
    }

    return debounceFetcher(loadOptions, debounceTimeout)
  }, [debounceTimeout, fetchOptions])
  return (
    <Select
      labelInValue
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...prop}
    >
      {
        options.map(opt => (
          <Select.Option>
            <Avatar size="small" src={opt.photoURL}>
              {opt.photoURL ? '' : opt.label?.charAt(0)?.toUpperCase()}
            </Avatar>
            {` ${opt.label}`}
          </Select.Option>
        ))
      }
    </Select>

  )
}

export default function InviteMemberModal() {
  const { isInviteMemberVisible, setIsInviteMemberVisible } = React.useContext(AppContext)
  const { user: { uid } } = React.useContext(AuthContext)
  const [form] = Form.useForm()

  const handleOK = () => {

    console.log({ FormData: form.getFieldValue() })
    addDocument('rooms', { ...form.getFieldValue(), members: [uid] })
    form.resetFields()
    setIsInviteMemberVisible(false)
  }

  const handleCancel = () => {
    form.resetFields()
    setIsInviteMemberVisible(false)
  }

  return (
    <div>
      <Modal
        title="Tạo phòng"
        visible={isInviteMemberVisible}
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
