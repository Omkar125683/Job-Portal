import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:'ddpasu4kx',
    api_key:'73JsDvPSbqIO_0mlm7XSvIB-Xec',
    api_secret:'537223588173952'
});
export default cloudinary;