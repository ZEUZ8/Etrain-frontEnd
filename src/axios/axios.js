import axios from "axios";

// export const axiosStudentInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/"})
// export const axiosTeacherInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/teacher"})
// export const axiosPrincipalInstance = axios.create({baseURL :"https://etrain-z30o.onrender.com/principal"})

//crating The Axios intance Functions and reusing with all the users in the list
function createInstance(url) {
  const axiosIntance = axios.create({
    baseURL: url,
    timeout: 200000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return axiosIntance;
}

//funtion fro attaching the token to all the request
// we also achieving the reusablity by using the Token dynamically
function attachToken(req, userToken) {
  const token = localStorage.getItem(userToken);
  console.log(token, "the token is sage in hre");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
}

//creating the axios instance for the principal
export const axiosPrincipalInstance = createInstance(
  "http://localhost:4000/principal"
);
axiosPrincipalInstance.interceptors.request.use((req) => {
  const config = attachToken(req, "principalToken");
  return config;
});

//creating the axios intance for teachers
export const axiosTeacherInstance = createInstance(
  "http://localhost:4000/teacher"
);
axiosTeacherInstance.interceptors.request.use((req) => {
  const config = attachToken(req, "teacherToken");
  return config;
});

//creating the axios instance for student
export const axiosStudentInstance = createInstance("http://localhost:4000");
axiosStudentInstance.interceptors.request.use((req) => {
  const config = attachToken(req, "studentToken");
  return config;
});

/*                      Axios response interceptors                      */

const errMsgs = ["Access Denied", "jwt malformed", "jwt expired"];

function handleResponse(res){
    console.log(res,'  in the created funciton')
}

axiosPrincipalInstance.interceptors.response.use((res) => {
    const config = handleResponse(res)
    return config
  }
);
