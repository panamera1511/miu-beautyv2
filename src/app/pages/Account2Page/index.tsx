import classNames from "classnames/bind";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Breadcrumbs, Button, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import styles from "./Account2Page.module.scss";
import Breadcrumb from "core/app/components/Breadcrumb";

const cx = classNames.bind(styles);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "#4152",
    "4/4/2024",
    "730.000 đ(1 sản phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "#5045",
    "2/3/2024",
    "250.000 đ(1 sản phẩm)",
    "Đang giao",
    "Chi tiết",
  ),
  createData(
    "#4600",
    "20/3/2024",
    "730.000 đ(1 sản phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "#4152",
    "15/3/2024",
    "345.000 đ(1 sản phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "#8881",
    "10/3/2024",
    "350.000 đ(1 sản phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "#4154",
    "2/3/2024",
    "730.000 đ(1 sản phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "#411",
    "1/3/2024",
    "730.000 đ(1 sản phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
];

export default function Account2Page() {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6.97794L7.11765 1.625L13.2353 6.97794V14.625H9.41176V11.5662C9.41176 10.9577 9.17006 10.3742 8.73983 9.94399C8.3096 9.51376 7.72608 9.27206 7.11765 9.27206C6.50921 9.27206 5.92569 9.51376 5.49546 9.94399C5.06523 10.3742 4.82353 10.9577 4.82353 11.5662V14.625H1V6.97794Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>,
    <Typography key="3" color="black">
      Tài khoản
    </Typography>,
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box
      sx={{
        marginTop: {lg: "112px", sm: "110px", xs: "67px" },
        paddingTop: { sm: "78px", xs: "10px" },
        // maxWidth: "45%"
      }}
    >
             <Breadcrumb breadcrumbs={breadcrumbs} />
     
      <Container maxWidth="xs" sx={{ padding: "20px 5px", marginTop: "20px"  }}>
        <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Lịch sử đặt hàng
        </h3>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 372 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "15px" }}>ID</TableCell>
                <TableCell style={{ fontSize: "15px" }}>Ngày</TableCell>
                <TableCell style={{ fontSize: "15px" }}>Tổng tiền</TableCell>
                <TableCell style={{ fontSize: "15px" }}>Trạng Thái</TableCell>
                <TableCell style={{ fontSize: "15px" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
              <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{ fontSize: "15px" }}
                component="th"
                scope="row"
              >
                 <Link to="/chi-tiet-tai-khoan">
                 {row.name}
                </Link>
               
              </TableCell>
              <TableCell style={{ fontSize: "15px" }}>
              <Link to="/chi-tiet-tai-khoan">
              {row.calories}
                </Link>
                
              </TableCell>
              <TableCell style={{ fontSize: "15px" }}>
              <Link to="/chi-tiet-tai-khoan">
              {row.fat}
                </Link>
               
                </TableCell>
              <TableCell style={{ fontSize: "15px" }}>
              <Link to="/chi-tiet-tai-khoan">
              {row.carbs}
                </Link>
                
              </TableCell>
              <TableCell style={{ fontSize: "15px" }}>
                <Link to="/chi-tiet-tai-khoan" style={{ color: "#FA58A6" }}>
                  {row.protein}
                </Link>
              </TableCell>
            </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
