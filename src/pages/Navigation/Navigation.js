import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import { useSelector } from "react-redux";
import AllStudent from "../AllStudents/AllStudents";
import AllCourses from "../AllCourses/AllCourses";
import AddCourse from "../AddCourse/AddCourse";
import AddStudent from "../AddStudent/AddStudent";
import Layout from "../../components/Layout";

function Navigation() {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AllStudent />
                        }
                    />
                    <Route
                        path="allCourses"
                        element={
                            <AllCourses />
                        }
                    />
                    <Route
                        path="addCourse"
                        element={
                            <AddCourse />
                        }
                    />
                    <Route
                        path="addStudent"
                        element={
                            <AddStudent />
                        }
                    />
                </Routes>
            </Layout>
        </Router>
    );
}

export default Navigation;




