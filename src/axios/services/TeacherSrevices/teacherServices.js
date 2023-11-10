import { axiosTeacherInstance } from "../../axios";

// export const teacherRegister = async (value) =>{
//
//     const  = {
//         headers:{
//             "Content-Type":"application/json"
//         },
//     };
//     try{
//         const response = await axiosTeacherInstance.post("/register", value, );
//         return response.data
//     }catch(error){
//
//
//         return(error)
//     }
// }

//teacher services for the login Routes
export const teacherLoginService = async (value) => {
  try {
    const respons = await axiosTeacherInstance.post("/login", value);
    localStorage.setItem("teacherToken", respons.data.token);
    return respons.data;
  } catch (error) {
    return error;
  }
};

//teacher service function for login the teacher withe the google
export const TeacherGoogleLogin = async (email) => {
  try {
    const respons = await axiosTeacherInstance.post("/googleLogin", { email });
    localStorage.setItem("teacherToken", respons.data.token);
    return respons.data;
  } catch (error) {
    return error;
  }
};

//teacher services for the otp verification in the teacher section
export const teacherOtpVerification = async (value, user, id) => {
  try {
    const response = await axiosTeacherInstance.post(`/verify/${id}`, value);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//teacher services for creating a weeekly task
export const weeklyTasks = async (token, value) => {
  try {
    const response = await axiosTeacherInstance.put(`/weeklyTask`, value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetWeeklyTasks = async (token) => {
  try {
    const response = await axiosTeacherInstance.get("/weeklyTask");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//teacher service function fro creating new student in the class
export const addStudent = async (token, value) => {
  try {
    const response = await axiosTeacherInstance.put("/students", value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//teacher service function for getting all the students existing in the class
export const GetStudents = async (token) => {
  try {
    const response = await axiosTeacherInstance.get("/students");
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const MarkAttandence = async (token, marking) => {
  try {
    const response = await axiosTeacherInstance.post("/attandence", marking);
    return response.data;
  } catch (error) {
    return { msg: error.response.data };
  }
};

//service function for gett all the existing exams for the teacher
export const GetExams = async (token) => {
  try {
    const response = await axiosTeacherInstance.get("/exams");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* function for the teacher to create exam mark updating document if not exists then 
create one and return it
*/
export const CreateExamMark = async (token, formData) => {
  try {
    const response = await axiosTeacherInstance.put("/marks", formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//function for the teahers to find all the existing edited marks of the exams
export const GetMarks = async (token, studentId, exmaId) => {
  try {
    const response = await axiosTeacherInstance.get(
      `/marks/${studentId}/${exmaId}`
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// all the complaint section code goes here

//creating a new complaint on the student
export const makeComplaint = async (value, token) => {
  try {
    const response = await axiosTeacherInstance.post("/complaint", value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//getting all the complaints that have created for the useEffect function to show in page mounting
export const GetComplaints = async (token) => {
  try {
    const response = await axiosTeacherInstance.get("/complaint");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//teacher services for editing and updating the existing complaint
export const EditComplaint = async (value, token) => {
  try {
    const response = await axiosTeacherInstance.put("/complaint", value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//all the review section services goes here

//creating a new Review on the student
export const makeReview = async (value, token) => {
  try {
    const response = await axiosTeacherInstance.post("/review", value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//getting all the Reviews that have created for the useEffect function to show in page mounting
export const GetReviews = async (token) => {
  try {
    const response = await axiosTeacherInstance.get("/review");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//teacher services for editing and updating the existing Review
export const EditReviews = async (value, token) => {
  try {
    const response = await axiosTeacherInstance.put("/review", value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//function for creating a new leave form for the teacehr
export const CreateTeacherLeave = async (token, values) => {
  try {
    const response = await axiosTeacherInstance.post("/leave", values);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//function for getting all the leave forms that teacher created
export const GetTeacherLeaves = async (token) => {
  try {
    const response = await axiosTeacherInstance.get("/leave");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* teacher services function for find the current teacher for the
profile component
*/
export const GetTeacher = async (token, id) => {
  try {
    const response = await axiosTeacherInstance.get(`/teacher/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for updating the user data name,phone,emial,password here the user could update the 
password that getted by the mail
*/
export const UpdateTeacher = async (token, id, values) => {
  try {
    const response = await axiosTeacherInstance.put(`/teacher/${id}`, values);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for creating converstation for teacher
 */
export const CreateTeacherConversation = async (token, id, userId) => {
  const requestBody = { senderId: id, receiverId: userId };
  try {
    const response = await axiosTeacherInstance.post(
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
export const GetTeacherConversation = async (token, id) => {
  try {
    const response = await axiosTeacherInstance.get(`/conversation/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for creating messages for teacher
 */
export const CreateTeacherMessages = async (token, value) => {
  try {
    const response = await axiosTeacherInstance.post(`/messages`, value);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting Messgaes  for teachers
 */
export const GetTeacherMessages = async (token, id) => {
  try {
    const response = await axiosTeacherInstance.get(`/messages/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting chat persons  for principal
 */
export const TeacherChatMember = async (token, id) => {
  try {
    const response = await axiosTeacherInstance.get(`/chatMember/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting the students monthly attendence for graphical representation for teacher
 */
export const GetMonthlyAttendance = async (token) => {
  try {
    const response = await axiosTeacherInstance.get(`/monthlyAttendance`);
    return response?.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting the students monthly attendence for graphical representation for teacher
 */
export const GetAnnualAttendance = async (token) => {
  try {
    const response = await axiosTeacherInstance.get("/annualAttendance");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for getting the timeTable for the class  */
export const GetTimeTable = async (token) => {
  try {
    const response = await axiosTeacherInstance.get("/timeTable");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/* service function for updating the timeTable for the class  */
export const updateTimeTable = async (token, image) => {
  try {
    const response = await axiosTeacherInstance.post(`/timeTable`, { image });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
