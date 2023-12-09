import SideBar from "./SideBar";
import React from "react";

export default function Layout({ children }) {
  return <SideBar>{children}</SideBar>;
}
