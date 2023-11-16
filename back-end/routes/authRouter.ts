import cors from 'cors';
import { Router } from 'express';
const router = Router();
import { test, registerUser, getProfile} from '../controllers/authController';
import {loginUser} from '../controllers/authController'; 

router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/dashboard', getProfile);

export default router;