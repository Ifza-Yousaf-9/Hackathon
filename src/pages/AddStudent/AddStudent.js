import {
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import UseAddDetails from "../../customHook/UseAddDetails";
import { EditIcon } from "@chakra-ui/icons";
import { MoonLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

export default function AddStudent() {
    const {
        firstName,
        validateFirstName,
        firstNameError,
        lastName,
        lastNameError,
        validateLastName,
        email,
        emailError,
        validateEmail,
        addDetailsHandler,
        isLoading,
        flag,
        updateDetailsHandler,
        phoneNum,
        phoneNumError,
        validatePhoneNumber,
        updateFieldsHandler
    } = UseAddDetails();

    const { state } = useLocation();

    useEffect(() => {
        if (state?.userData) {
            let paramsData = state?.userData;
            updateFieldsHandler(paramsData);
        }
    }, []);

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
        <Container boxShadow="lg" p="6" rounded="md" bg="white" mt={5}>
            <Text
                fontSize="lg"
                color="blackAlpha.900"
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Add Student Form
            </Text>
            <FormControl isRequired mb={4} isInvalid={firstNameError}>
                <FormLabel>First name</FormLabel>
                <Input
                    placeholder="Enter First name..."
                    value={firstName}
                    onChange={validateFirstName}
                />
            </FormControl>
            <FormControl isRequired mb={4} isInvalid={lastNameError}>
                <FormLabel>Last name</FormLabel>
                <Input
                    placeholder="Enter Last name..."
                    value={lastName}
                    onChange={validateLastName}
                />
            </FormControl>
            <FormControl isRequired mb={4} isInvalid={emailError}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter Email..." value={email} onChange={validateEmail} />
            </FormControl>
            <FormControl isRequired mb={4} isInvalid={phoneNumError}>
                <FormLabel>Phone number</FormLabel>
                <Input
                    placeholder="Enter Phone number..."
                    value={phoneNum}
                    onChange={validatePhoneNumber}
                />
            </FormControl>
            {flag ? (
                <Button colorScheme="green" onClick={updateDetailsHandler}>
                    Update Student
                    <EditIcon style={{ marginLeft: "10px" }} />
                </Button>
            ) : (
                <Button colorScheme="green" onClick={addDetailsHandler}>
                    Add Student
                    <AiOutlinePlus style={{ marginLeft: "10px" }} />
                </Button>
            )}
        </Container>
    );
}