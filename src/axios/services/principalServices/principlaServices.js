import { axiosPrincipalInstance } from "../../axios";

/*  -----------------------------------------------------------------------------*/

//principal service function for login
export const principalLoginService = async (value) => {
  try {
    const respons = await axiosPrincipalInstance.post("/login", value);
    localStorage.setItem("principalToken", respons.data.token);
    return respons.data;
  } catch (error) {
    return error;
  }
};

//principal service function for login the teacher withe the google
export const PrincipalGoogleLogin = async (email) => {
  try {
    const respons = await axiosPrincipalInstance.post("/googleLogin", {
      email,
    });
    return respons.data;
  } catch (error) {
    return error;
  }
};

//principal services function for creating a new calss
export const classCreation = async (token, value) => {
  try {
    const response = await axiosPrincipalInstance.post("/Class", value);
    return response.data;
  } catch (error) {
    return error;
  }
};

//principal services function for update The class
export const UpdateClass = async (token, value, id) => {
  try {
    const response = await axiosPrincipalInstance.put(`/Class/${id}`, value);
    return response.data;
  } catch (error) {
    return error;
  }
};

//principal services function for finding all the classes
export const classes = async (token) => {
  //
  try {
    const respons = await axiosPrincipalInstance.get("/classes");
    return respons.data;
  } catch (error) {
    return error.response.data;
  }
};

{
  /*principal service function for adding a new teacher with specied emial and the 
otp that created in the controller function 
*/
}
export const addNewTeacher = async (token, value) => {
  try {
    const respons = await axiosPrincipalInstance.post("/teachers", value);
    return respons.data;
  } catch (error) {
    return error.response.data;
  }
};

//principla service function for finding all the teachers
export const teachers = async (token) => {
  //
  try {
    const respons = await axiosPrincipalInstance.get("/teachers");
    return respons.data;
  } catch (error) {
    return error.response.data;
  }
};

//principla service function for finding all the available  teachers
export const availableTeachers = async (token) => {
  //
  try {
    const respons = await axiosPrincipalInstance.get(`/availableTeacher`);
    return respons.data;
  } catch (error) {
    return error.response.data;
  }
};

//principal teachers editig functions services goes  here
export const updateTeacher = async (token, formData) => {
  try {
    const respons = await axiosPrincipalInstance.put("/teachers", formData);
    return respons.data;
  } catch (error) {
    return error.response.data;
  }
};

//principal exam creation function services goes here
export const CreateExam = async (token, value) => {
  try {
    const response = await axiosPrincipalInstance.post("/exam", value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//principal services function for finding all the exams goes here
export const GetExam = async (token) => {
  try {
    const response = await axiosPrincipalInstance.get("/exam");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for updating the created exam goes here */
export const UpdateExam = async (token, id, value) => {
  try {
    const response = await axiosPrincipalInstance.put(`/exam/${id}`, value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// export const principalOtpVerification = async (value,user,id)=>{
//
//     try{
//         const response = await axiosPrincipalInstance.post(`/verify/${id}`,value)
//         return response.data
//     }catch(error){
//
//         return(error.message)
//     }
// }

/* principal services function for fiding the admin, for
profile component
*/
export const GetPrincipal = async (token, id) => {
  try {
    const response = await axiosPrincipalInstance.get(`/principal/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for updating the user data name,phone,emial,password here the user could update the 
password that getted by the mail
*/
export const UpdatePrincipal = async (token, id, values) => {
  try {
    const response = await axiosPrincipalInstance.put(
      `/principal/${id}`,
      values
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting all the leaves for principal*/
export const GetLeaves = async (token) => {
  try {
    const response = await axiosPrincipalInstance.get("/leaves");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for creating converstation for principal
 */
export const CreatePrincipalConversation = async (token, id, userId) => {
  const requestBody = { senderId: id, receiverId: userId };
  try {
    const response = await axiosPrincipalInstance.post(
      `/conversation`,
      requestBody
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for creating converstation for principal
 */
export const GetPrincipalConversation = async (token, id) => {
  try {
    const response = await axiosPrincipalInstance.get(`/conversation/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for creating messages for principal
 */
export const CreatePrincipalMessages = async (token, value) => {
  try {
    const response = await axiosPrincipalInstance.post(`/messages`, value);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting Messgaes  for principal
 */
export const GetPrincipalMessages = async (token, id) => {
  try {
    const response = await axiosPrincipalInstance.get(`/messages/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting chat persons  for principal
 */
export const principalChatMember = async (token, id) => {
  try {
    const response = await axiosPrincipalInstance.get(`/chatMember/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting chat persons  for principal
 */
export const PrincipalAllAttendance = async (token, date) => {
  try {
    const response = await axiosPrincipalInstance.get(`/attendance/${date}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting students in the class  for principal
 */
export const GetStudents = async (token, id) => {
  try {
    const response = await axiosPrincipalInstance.get(`/students/${id}`);
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
