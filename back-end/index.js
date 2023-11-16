"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors = require('cors');
const app = (0, express_1.default)();
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const mongoose_1 = __importDefault(require("mongoose"));
//middleware 
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.MONGO_URL)
    .then(() => console.log('database connected'))
    .catch((error) => console.log('database not connected', error));
app.use('/', authRouter_1.default);
app.listen(8000, () => {
    console.log("Example app listening on port");
});
