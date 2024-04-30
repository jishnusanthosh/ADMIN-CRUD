import React, { useRef, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AddUser() {
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    });

    const CloseRef = useRef();

    const handleOnChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make sure the request URL matches your backend endpoint
            const response = await axios.post('http://localhost:4000/api/createuser', value);
            
            if (response.data.success) {
                toast.success(response.data.message);
                // Clear the form fields after successful submission
                setValue({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: ''
                });
                // Close the modal
                CloseRef.current.click();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred while adding the user.');
        }
    };

    return (
        <div>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={value.firstname} name="firstname" onChange={handleOnChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={value.lastname} name="lastname" onChange={handleOnChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={value.email} name="email" onChange={handleOnChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value={value.phone} name="phone" onChange={handleOnChange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
