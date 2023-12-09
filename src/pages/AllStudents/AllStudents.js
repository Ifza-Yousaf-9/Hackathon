import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { MoonLoader } from "react-spinners";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import UseShowDetails from "../../customHook/useShowDetails";

export default function AllStudent() {
  const { storeData, isLoading, deleteDetailsHandler } = UseShowDetails();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Container
        height={"75vh"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MoonLoader color="#3182ce" />
      </Container>
    );
  }

  return (
    <>
      <Text
        fontSize="lg"
        color="blue.600"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Student Management System
      </Text>
      <TableContainer boxShadow="lg" rounded="md" bg="white" mt={5}>
        <Table variant="simple">
          <TableCaption>All right reserved &amp; created by  &copy; <i>Ifza Yousaf</i></TableCaption>
          <Thead>
            <Tr>
              <Th>Student_ID</Th>
              <Th>First name</Th>
              <Th>Last name</Th>
              <Th>Email</Th>
              <Th>Phone/cell</Th>
              <Th>Delete</Th>
              <Th>Update</Th>
            </Tr>
          </Thead>
          <Tbody>
            {storeData?.map((item, index) => (
              <Tr key={index}>
                <Td>{item?._id}</Td>
                <Td>{item?.firstName}</Td>
                <Td>{item?.lastName}</Td>
                <Td>{item?.email}</Td>
                <Td>{item?.phoneNum}</Td>
                <Td>
                  <IconButton
                    size="lg"
                    variant="solid"
                    aria-label="open menu"
                    icon={<DeleteIcon color={"red.600"} />}
                    onClick={() => deleteDetailsHandler(item?._id)}
                  />
                </Td>
                <Td>
                  
                    <IconButton
                      size="lg"
                      variant="solid"
                      aria-label="open menu"
                      icon={<EditIcon color={"blue.600"} />}
                      onClick={() => navigate("/addStudent", { state: { userData: item } })}
                    />
                  {/* </Link> */}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
