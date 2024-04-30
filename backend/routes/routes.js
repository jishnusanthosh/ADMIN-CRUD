import express from 'express';
import { CreateUser,GetUsers,UpdateUser,deleteUser} from '../controllers/UserController.js';
const routers=express.Router();

routers.post('/createuser',CreateUser)
routers.get('/getusers',GetUsers)
routers.put('/updateuser/:id',UpdateUser)
routers.delete('/deleteuser/:id',deleteUser)


export default  routers;