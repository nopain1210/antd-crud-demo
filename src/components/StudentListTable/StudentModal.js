import {Button, DatePicker, Form, Input, Modal, Select} from "antd";
import {useEffect} from "react";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const StudentModal = ({open, info, onSubmit, onClose}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      form.setFieldsValue(info)
    } else {
      form.resetFields()
    }
  }, [open, info, form])

  const onReset = () => {
    form.resetFields();
  };

  const handleModalSubmit = () => {
    form.submit()
  }

  return (
    <Modal title="Basic Modal" visible={open} onOk={handleModalSubmit} onCancel={onClose}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onSubmit}>
        <Form.Item
          name="key"
          label="Key"
          hidden
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Họ và tên"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="Ngày sinh"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select allowClear>
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="accountNo"
          label="Số tài khoản"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout} hidden={true}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default StudentModal
