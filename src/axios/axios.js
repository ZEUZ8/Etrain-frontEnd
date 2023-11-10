import axios from "axios";

// export const axiosStudentInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/"})
// export const axiosTeacherInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/teacher"})
// export const axiosPrincipalInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/principal"})


// export const axiosStudentInstance = axios.create({baseURL :"http://localhost:4000"})
// export const axiosTeacherInstance = axios.create({baseURL :"http://localhost:4000/teacher"})
// export const axiosPrincipalInstance = axios.create({baseURL :"http://localhost:4000/principal"}) 

//crating The Axios intance Functions and reusing with all the users in the list
function createInstance(url){
    const axiosIntance = axios.create({
        baseURL:url,
        timeout: 200000,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return axiosIntance
}


//funtion fro attaching the token to all the request 
// we also achieving the reusablity by using the Token dynamically

function attachToken(req,userToken){
    const token = localStorage.getItem(userToken)
    console.log(token,'the token is sage in hre')
    if(token){
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
}


export const axiosPrincipalInstance = createInstance("http://localhost:4000/principal")
axiosPrincipalInstance.interceptors.request.use((req)=>{
    const config = attachToken(req,"principalToken")
    return config
})

export const axiosTeacherInstance = createInstance("http://localhost:4000/teacher")
axiosTeacherInstance.interceptors.request.use((req)=>{
    const config = attachToken(req,"teacherToken")
    return config
})

export const axiosStudentInstance = createInstance("http://localhost:4000")
axiosStudentInstance.interceptors.request.use((req)=>{
    const config = attachToken(req,"studentToken")
    return config
})