import express from "express";

import studentController from "../controller/studentController.js";

const {
  getStudents,
  postStudents,
  getStudentById,
  updateStudent,
  deleteStudents,
} = studentController;

const studentRoutes = express.Router();

// Creating the route
studentRoutes.route("/students").get(getStudents).post(postStudents);

// get student by id route

studentRoutes
  .route("/students/:id")
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudents);

export default studentRoutes;
