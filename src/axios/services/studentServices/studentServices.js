import { axiosStudentInstance } from "../../axios";

export const studentsRegister = async (value) => {
  try {
    const response = await axiosStudentInstance.post("/register", value);
    // localStorage.setItem("studentToken", response.data.token);
    return response.data;
  } catch (error) {}
};

//functionality for Sutudent Login
export const studentLogin = async (value) => {
  try {
    const response = await axiosStudentInstance.post("/login", value);
    console.log(response.data,'the tokenin the student section')
    localStorage.setItem("studentToken", response.data.token);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//student service function for login the teacher withe the google
export const StudentGoogleLogin = async (email) => {
  try {
    const respons = await axiosStudentInstance.post("/googleLogin", { email });
    console.log(respons.data,'   000000 data')
    localStorage.setItem("studentToken", respons.data.token);
    return respons.data;
  } catch (error) {
    return error;
  }
};

export const otpVerification = async (value, user, id) => {
  try {
    const response = await axiosStudentInstance.post(`/verify/${id}`, value);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const GetAttandence = async (token) => {
  try {
    const response = await axiosStudentInstance.get("/attandence");
    return response.data;
  } catch (error) {
    return { msg: error.response };
  }
};

//stuent service function for getting all the existing Reviews
export const GetReviews = async (token) => {
  try {
    const respone = await axiosStudentInstance.get("/reviews");
    return respone.data;
  } catch (error) {
    return { msg: error.message };
  }
};

//stuent service function for getting all the existing Exams
export const GetComplaints = async (token) => {
  try {
    const respone = await axiosStudentInstance.get("/complaints");
    return respone.data;
  } catch (error) {
    return { msg: error.message };
  }
};

//stuent service function for getting all the existing Exams
export const GetExams = async (token, id) => {
  try {
    const respone = await axiosStudentInstance.get(`/exams`);
    return respone.data;
  } catch (error) {
    return { msg: error.message };
  }
};

//function for creating a new leave form for the teacehr
export const CreateStudentLeave = async (token, values) => {
  try {
    const response = await axiosStudentInstance.post("/leave", values);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//function for getting all the leave forms that teacher created
export const GetStudentLeaves = async (token) => {
  try {
    const response = await axiosStudentInstance.get("/leave");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* student services function for find the current student for the
profile component
*/
export const GetStudent = async (token, id) => {
  try {
    const response = await axiosStudentInstance.get(`/student/${id}`);
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

/* service function for updating the user data name,phone,emial,password here the user could update the 
password that getted by the mail
*/
export const UpdateStudent = async (token, id, values) => {
  try {
    const response = await axiosStudentInstance.put(`/student/${id}`, values);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//teacher service function for getting all the existing Teachers
export const GetTeachers = async (token) => {
  try {
    const response = await axiosStudentInstance.get("/teachers");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for creating converstation for teacher
 */
export const CreateStudentConversation = async (token, id, userId) => {
  const requestBody = { senderId: id, receiverId: userId };
  try {
    const response = await axiosStudentInstance.post(
      `/conversation`,
      requestBody
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for creating converstation for teacher
 */
export const GetStudentConversation = async (token, id) => {
  try {
    const response = await axiosStudentInstance.get(`/conversation/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for creating messages for students
 */
export const CreateStudentMessages = async (token, value) => {
  try {
    const response = await axiosStudentInstance.post(`/messages`, value);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting Messgaes  for students
 */
export const GetStudentMessages = async (token, id) => {
  try {
    const response = await axiosStudentInstance.get(`/messages/${id}`);
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

/* service function for getting chat persons  for students
 */
export const StudentChatMember = async (token, id) => {
  try {
    const response = await axiosStudentInstance.get(`/chatMember/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting the students monthly attendence for graphical representation for students
 */
export const GetMonthlyAttendance = async (token, id) => {
  try {
    const response = await axiosStudentInstance.get(`/monthlyAttendance`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

/* service function for getting the students exam marks innnorder to display in the progress card
 */
export const GetProgress = async (token) => {
  try {
    const response = await axiosStudentInstance.get(`/progress`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting the class timeTable for the student  */
export const GetTimeTable = async (token) => {
  try {
    const response = await axiosStudentInstance.get("/timeTable");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// router.post("/conversation",verifyStudent,CreateConversation)

// //new conversation
// router.get("/conversation/:userId",verifyStudent,GetConversation)

// //add mesages
// router.post('/messages',verifyStudent,CreateMessages)

// //get messages
// router.get("/messages/:conversationId",verifyStudent,GetMessages)
