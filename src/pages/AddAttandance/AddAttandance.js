import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Container,
  Button,
  Stack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CloseIcon } from "@chakra-ui/icons";

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
    setEditIndex(null);
  };

  return (
    <Container bg="white" mt={5} p={6}>
      <Text fontSize="lg" color="blue.600" fontWeight="bold" textAlign="center">
        Attendance Management System
      </Text>

      <Table variant="simple" mt={5}>
        <Thead>
          <Tr>
            <Th>Student ID</Th>
            <Th>Course ID</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {attendanceRecords.map((record, index) => (
            <Tr key={index}>
              <Td>{record.studentId}</Td>
              <Td>{record.courseId}</Td>
              <Td>{record.date}</Td>
              <Td>{record.status}</Td>
              <Td>
                <IconButton
                  colorScheme="blue"
                  aria-label="Edit"
                  icon={<EditIcon />}
                  onClick={() => editAttendanceRecord(index)}
                />
                <IconButton
                  colorScheme="red"
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  onClick={() => deleteAttendanceRecord(index)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

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
        <Stack direction="row">
          <Button onClick={addAttendanceRecord}>
            {editIndex !== null ? "Update Attendance" : "Record Attendance"}
          </Button>
          <IconButton
            colorScheme="blue"
            aria-label="Clear"
            icon={<CloseIcon />}
            onClick={() => setEditIndex(null)}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Attendance;
