import UserModel from "../model/UserModel.js";

const getStudents = async (req, res) => {
  try {
    const students = await UserModel.find({});
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};

const postStudents = async (req, res) => {
  try {
    const { rollno, name } = req.body;
    await UserModel.create({ rollno, name });
    res.status(201).json({ message: "User created successfully" });
    console.log(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await UserModel.find({ _id: id });

    if (student.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const { rollno, name } = req.body;

    const updatedStudent = await UserModel.findByIdAndUpdate(
      id,
      { rollno, name },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(updatedStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};

const deleteStudents = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedStudent = await UserModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};

const studentController = {
  getStudents,
  postStudents,
  getStudentById,
  updateStudent,
  deleteStudents,
};

export default studentController;
