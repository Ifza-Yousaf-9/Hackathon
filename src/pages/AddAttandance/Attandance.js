import React, { useState, useEffect } from "react";
import { Text, Container, Button, Input, Stack } from "@chakra-ui/react";

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    studentId: "",
    courseId: "",
    date: "",
    status: "Present",
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    setAttendanceRecords(storedRecords);
  }, []);

  useEffect(() => {
    localStorage.setItem("attendanceRecords", JSON.stringify(attendanceRecords));
  }, [attendanceRecords]);

  const addAttendanceRecord = () => {
    const status =
      newRecord.studentId && newRecord.courseId && newRecord.date
        ? newRecord.status
        : "Absent";

    if (editIndex !== null) {
      const updatedRecords = [...attendanceRecords];
      updatedRecords[editIndex] = { ...newRecord, status };
      setAttendanceRecords(updatedRecords);
      setEditIndex(null);
    } else {
      setAttendanceRecords([...attendanceRecords, { ...newRecord, status }]);
    }

    setNewRecord({
      studentId: "",
      courseId: "",
      date: "",
      status: "Present",
    });
  };

  const editAttendanceRecord = (index) => {
    setEditIndex(index);
    setNewRecord(attendanceRecords[index]);
  };

  const deleteAttendanceRecord = (index) => {
    const updatedRecords = [...attendanceRecords];
    updatedRecords.splice(index, 1);
    setAttendanceRecords(updatedRecords);
  };

  return (
    <Container boxShadow="lg" p="6" rounded="md" bg="white" mt={5}>
      <Text fontSize="lg" color="blue.600" fontWeight="bold" textAlign="center">
        Attendance Management System
      </Text>

      <Stack spacing={3} mt={5}>
        <Input
          placeholder="Student ID"
          value={newRecord.studentId}
          onChange={(e) => setNewRecord({ ...newRecord, studentId: e.target.value })}
        />
        <Input
          placeholder="Course ID"
          value={newRecord.courseId}
          onChange={(e) => setNewRecord({ ...newRecord, courseId: e.target.value })}
        />
        <Input
          type="date"
          placeholder="Date"
          value={newRecord.date}
          onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
        />
        <Button onClick={addAttendanceRecord}>
          {editIndex !== null ? "Update Attendance" : "Record Attendance"}
        </Button>
      </Stack>

      <Stack mt={5}>
        {attendanceRecords.map((record, index) => (
          <div key={index}>
            <Text>
              Student ID: {record.studentId}, Course ID: {record.courseId}, Date:{" "}
              {record.date}, Status: {record.status}
            </Text>
            <Button onClick={() => editAttendanceRecord(index)}>Edit Record</Button>
            <Button onClick={() => deleteAttendanceRecord(index)}>Delete Record</Button>
          </div>
        ))}
      </Stack>
    </Container>
  );
};

export default Attendance;
