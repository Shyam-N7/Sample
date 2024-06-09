import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminRegister from './pages/Admin_Register';
import AdminLogin from "./pages/Admin_Login";
import StudentDetails from './pages/StudentDetails';
import BranchSelection from "./pages/Branch";
import YearSelection from './pages/Year';
import FirstsemInfo from './pages/First_Year/First_Sem';
import SecondsemInfo from './pages/First_Year/Second_Sem';
import ThirdsemInfo from './pages/Second_Year/Third_Sem';
import FourthsemInfo from './pages/Second_Year/Fourth_Sem';
import FifthsemInfo from './pages/Third_Year/Fifth_Sem';
import SixthsemInfo from './pages/Third_Year/Sixth_Sem';
import SeventhsemInfo from './pages/Fourth_Year/Seventh_Sem';
import EighthsemInfo from './pages/Fourth_Year/Eighth_Sem';
import WorkshopInfo from './pages/Workshops';
import HackathonInfo from './pages/Hackathons';
import TimeTableSEM1 from './pages/First_Year/First_Sem/TT_Sem1';
import ModelandAssnS1 from './pages/First_Year/First_Sem/QP_Sem1';
import MarksUploadSem1 from './pages/First_Year/First_Sem/Marks_Upload_S1';
import TimeTableSEM2 from './pages/First_Year/Second_Sem/TT_Sem2';
import ModelandAssnS2 from './pages/First_Year/Second_Sem/QP_Sem2';
import MarksUploadSem2 from './pages/First_Year/Second_Sem/Marks_Upload_S2';
import TimeTableSEM3 from './pages/Second_Year/Third_Sem/TT_Sem3';
import ModelandAssnS3 from './pages/Second_Year/Third_Sem/QP_Sem3';
import MarksUploadSem3 from './pages/Second_Year/Third_Sem/Marks_Upload_S3';
import TimeTableSEM4 from './pages/Second_Year/Fourth_Sem/TT_Sem4';
import ModelandAssnS4 from './pages/Second_Year/Fourth_Sem/QP_Sem4';
import MarksUploadSem4 from './pages/Second_Year/Fourth_Sem/Marks_Upload_S4';
import TimeTableSEM5 from './pages/Third_Year/Fifth_Sem/TT_Sem5';
import ModelandAssnS5 from './pages/Third_Year/Fifth_Sem/QP_Sem5';
import MarksUploadSem5 from './pages/Third_Year/Fifth_Sem/Marks_Upload_S5';
import TimeTableSEM6 from './pages/Third_Year/Sixth_Sem/TT_Sem6';
import ModelandAssnS6 from './pages/Third_Year/Sixth_Sem/QP_Sem6';
import MarksUploadSem6 from './pages/Third_Year/Sixth_Sem/Marks_Upload_S6';
import TimeTableSEM7 from './pages/Fourth_Year/Seventh_Sem/TT_Sem7';
import ModelandAssnS7 from './pages/Fourth_Year/Seventh_Sem/QP_Sem7';
import MarksUploadSem7 from './pages/Fourth_Year/Seventh_Sem/Marks_Upload_S7';
import TimeTableSEM8 from './pages/Fourth_Year/Eighth_Sem/TT_Sem8';
import ModelandAssnS8 from './pages/Fourth_Year/Eighth_Sem/QP_Sem8';
import MarksUploadSem8 from './pages/Fourth_Year/Eighth_Sem/Marks_Upload_S8';
import MessageFTD from './pages/Message_for_the_day';
import AssignmentMQP from './pages/Assignment_MQP';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin_register" element={<AdminRegister />} />
          <Route path="/admin_login" element={<AdminLogin />} />
          <Route path="/branch_selection" element={<BranchSelection />} />
          <Route path="/student_details" element={<StudentDetails />} />
          <Route path="/year_selection" element={<YearSelection />} />
          <Route path="/first_sem_information" element={<FirstsemInfo />} />
          <Route path="/second_sem_information" element={<SecondsemInfo />} />
          <Route path="/third_sem_information" element={<ThirdsemInfo />} />
          <Route path="/fourth_sem_information" element={<FourthsemInfo />} />
          <Route path="/fifth_sem_information" element={<FifthsemInfo />} />
          <Route path="/sixth_sem_information" element={<SixthsemInfo />} />
          <Route path="/seventh_sem_information" element={<SeventhsemInfo />} />
          <Route path="/eighth_sem_information" element={<EighthsemInfo />} />
          <Route path="/workshop_details" element={<WorkshopInfo />} />
          <Route path="/hackathon_details" element={<HackathonInfo />} />
          <Route path="/timetablesem1/:sem" element={<TimeTableSEM1 />} />
          <Route path="/assignments/mqp_sem1" element={<ModelandAssnS1 />} />
          <Route path="/marksupload/sem1" element={<MarksUploadSem1 />} />
          <Route path="/timetablesem2/:sem" element={<TimeTableSEM2 />} />
          <Route path="/assignments/mqp_sem2" element={<ModelandAssnS2 />} />
          <Route path="/marksupload/sem2" element={<MarksUploadSem2 />} />
          <Route path="/timetablesem3/:sem" element={<TimeTableSEM3 />} />
          <Route path="/assignments/mqp_sem3" element={<ModelandAssnS3 />} />
          <Route path="/marksupload/sem3" element={<MarksUploadSem3 />} />
          <Route path="/timetablesem4/:sem" element={<TimeTableSEM4 />} />
          <Route path="/assignments/mqp_sem4" element={<ModelandAssnS4 />} />
          <Route path="/marksupload/sem4" element={<MarksUploadSem4 />} />
          <Route path="/timetablesem5/:sem" element={<TimeTableSEM5 />} />
          <Route path="/assignments/mqp_sem5" element={<ModelandAssnS5 />} />
          <Route path="/marksupload/sem5" element={<MarksUploadSem5 />} />
          <Route path="/timetablesem6/:sem" element={<TimeTableSEM6 />} />
          <Route path="/assignments/mqp_sem6" element={<ModelandAssnS6 />} />
          <Route path="/marksupload/sem6" element={<MarksUploadSem6 />} />
          <Route path="/timetablesem7/:sem" element={<TimeTableSEM7 />} />
          <Route path="/assignments/mqp_sem7" element={<ModelandAssnS7 />} />
          <Route path="/marksupload/sem7" element={<MarksUploadSem7 />} />
          <Route path="/timetablesem8/:sem" element={<TimeTableSEM8 />} />
          <Route path="/assignments/mqp_sem8" element={<ModelandAssnS8 />} />
          <Route path="/marksupload/sem8" element={<MarksUploadSem8 />} />
          <Route path="/messagefortheday" element={<MessageFTD />} />
          <Route path="/assignments_mqp" element={<AssignmentMQP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;