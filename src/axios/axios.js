import axios from "axios";

export const axiosStudentInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/" })
export const axiosTeacherInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/teacher" })
export const axiosPrincipalInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/principal" })

