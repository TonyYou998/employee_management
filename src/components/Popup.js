
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {mainApi} from "../api";

export default function() {
  const [show, setShow] = useState(false);
  let [user,setUser]=useState({
    maNv:"",
    name:"",
    email:"",
    password:"",
    
  });
  const handleShow = () => setShow(true);

  const  handleClose = async () =>{
    await mainApi.post("",user).then((result)=>{
      alert("success");

    })
    .catch((err)=>{
        alert("faild");
        console.log(err);
    })
    
    setShow(false);
  } 
 


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Thêm nhân viên
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm nhân viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mã số nhân viên</Form.Label>
            <Form.Control
              type="number"
              placeholder="1234"
              autoFocus
              onChange={(e)=>{
                  setUser({...user,maNv:e.target.value});
                  console.log(user);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="nguyen van a"
              autoFocus
              onChange={(e)=>{
                setUser({...user,name:e.target.value});
                console.log(user);

              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@gm.uit.edu.vn"
              autoFocus
              onChange={(e)=>{
                  setUser({...user,email:e.target.value});
                  
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="1234"
              autoFocus
              onChange={(e)=>{
                setUser({...user,password:e.target.value});
                
            }}
            />
          </Form.Group>

						<div className="form-group">
  <div className="input-group">
   
    <select className="form-control" id="chucvu" >
      <option>Chọn chức vụ</option>
      <option>Sếp</option>
      <option>Trưởng phòng</option>
      <option>Nhân viên</option>
    </select>
  </div>
  <span className="sp-thongbao" id="tbChucVu" />
            </div>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>

  )
}
