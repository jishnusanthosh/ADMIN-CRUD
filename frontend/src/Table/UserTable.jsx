import React, { useState } from 'react';
import Table from '../Component/Table';
import AddUser from '../Component/AddUser';
import UpdateUser from '../Component/UpdateUser';
import DeleteUser from '../Component/DeleteUser';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function UserTable() {
    const [userId, setUserId] = useState();
    const [updatedUserId, setUpdatedUserId] = useState();
    const [value, setValue] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    });

    const deleteUser = (userid) => {
        setUserId(userid);
    };

    const handleUserDelete = async () => {
        try {
            const deletedUser = await axios.delete(`http://localhost:4000/api/deleteuser/${userId}`);
            const response = deletedUser.data;
            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const UpdateUserData = (Updatedid) => {
        setUpdatedUserId(Updatedid);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const UpdatedUser = await axios.put(`http://localhost:4000/api/updateuser/${updatedUserId}`, value);
            const response = UpdatedUser.data;
            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Table DeleteUser={deleteUser} UpdatedUser={UpdateUserData} />
            <AddUser />
            <UpdateUser handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange} />
            <DeleteUser handleUserDelet={handleUserDelete} />
        </>
    );
}
