import {Button, Popconfirm, Table} from "antd";
import StudentModal from "./StudentModal";
import {useState} from "react";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

const StudentListTable = () => {
  const [selectedStudent, setSelectedStudent] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([
    {
      key: '1',
      name: 'Student 1',
      birthday: moment(),
      gender: 'Nam',
      email: 'hihi@gmail.com',
      phone: '0987654321',
      accountNo: '123123'
    },
    {
      key: '2',
      name: 'Student 2',
      birthday: moment(),
      gender: 'Nam',
      email: 'hihi@gmail.com',
      phone: '0987654321',
      accountNo: '123123'
    }
  ]);

  const handleOpenModal = (student) => {
    setSelectedStudent(student)
    setModalVisible(true)
  }

  const handleSubmit = (student) => {
    if (student?.key) {
      setData(prv => prv.map(s => s.key === student.key ? student: s))
    } else {
      console.log('create')
      console.log(student)
      setData(prv => [
        ...prv,
        {
          ...student,
          key: uuidv4()
        }
      ])
    }
    setModalVisible(false)
  }

  const handleOpenCreateModal = () => {
    setModalVisible(true)
  }

  const handleDelete = (key) => {
    setData(prv => prv.filter(s => s.key !== key))
  }

  const columns = [
    {
      title: 'Tên',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Ngày sinh',
      width: 100,
      dataIndex: 'birthday',
      key: 'birthday',
      fixed: 'left',
      render: (date) => date?.format('L')
    },
    { title: 'Giới tính', dataIndex: 'gender', key: '1' },
    { title: 'Email', dataIndex: 'email', key: '2' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: '3' },
    { title: 'Số tài khoản', dataIndex: 'accountNo', key: '4' },
    {
      title: 'Edit',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => <Button onClick={() => handleOpenModal(record)} type="primary">Sửa</Button>,
    },
    {
      title: 'Delete',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (_, record) =>
        data.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <>
      <Button type={"primary"} onClick={handleOpenCreateModal}>Thêm</Button>
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
      <StudentModal open={modalVisible} onClose={() => setModalVisible(false)} info={selectedStudent} onSubmit={handleSubmit} />
    </>
  )
}

export default StudentListTable
