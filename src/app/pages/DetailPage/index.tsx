import classNames from "classnames/bind";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Box, Breadcrumbs, Button, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Discount from "core/app/components/Discount";
import Product from "core/app/components/Product";
import bannerUrl from "core/assets/images/Image.png";

import categories from "../../../datas/categories.json";
import styles from "./DetailPage.module.scss";
import { useCartStore } from "core/store/useCartStore";
import { useShallow } from "zustand/react/shallow";
import Breadcrumb from "core/app/components/Breadcrumb";

const cx = classNames.bind(styles);

export default function DetailPage() {
  const { id } = useParams();
  const [number, setNumber] = useState(1);

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
    <Link
      underline="hover"
      key="2"
      color="black"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Danh mục sản phẩm
    </Link>,
    <Typography key="3" color="black">
      Chi tiết sản phẩm
    </Typography>,
  ];


  const { cart, handleCart } = useCartStore(
    useShallow(state => ({
      cart: state.cart,
      handleCart: state.handleCart,
    })),
  );

  // const [cart, setCart] = React.useState([]);
  const handleAddToCart = (item: propCart) => {
    const allLike = JSON.parse(localStorage.getItem("cart") || "[]");
    const isExist = allLike.some(current => current.id === item.id);

    // Nếu item chưa tồn tại trong allLike, thêm vào mảng và cập nhật state và localStorage
    if (!isExist) {
      const newArr = [...allLike, item];
      // setLike(newArr);
      localStorage.setItem("cart", JSON.stringify(newArr));
      let count = newArr.length;
      handleCart(count);
    }
  };

  return (
    <Box
      sx={{
        marginTop: {lg: "100px", sm: "110px", xs: "67px" },
        paddingTop: { sm: "78px", xs: "10px" },
      }}
    >
             <Breadcrumb breadcrumbs={breadcrumbs} />

      <Container maxWidth="lg" sx={{ padding: "20px 5px", marginTop: "60px" }}>
        <Grid container spacing={2}>
          {categories?.map((item, index) => {
            if (item.id === id) {
              return (
                <React.Fragment key={index}>
                  <Grid item sm={5} xs={12}>
                    <div className={cx("detail_img")}>
                      <img
                        style={{ width: "100%" }}
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  </Grid>
                  <Grid item sm={7} xs={12}>
                    <div className={cx("detail_top")}>
                      <h3 className={cx("detail_title")}>{item.name}</h3>
                      <p className={cx("detail_status")}>Còn hàng</p>
                      <p className={cx("detail_star")}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.31008 13.4106L12.8566 15.6573C13.31 15.9441 13.8725 15.5172 13.7381 14.9879L12.7138 10.9576C12.6848 10.8453 12.6882 10.7271 12.7234 10.6167C12.7586 10.5062 12.8243 10.408 12.9129 10.3332L16.0933 7.68663C16.5106 7.339 16.2958 6.64544 15.7586 6.61056L11.6056 6.34056C11.4938 6.33263 11.3866 6.2931 11.2964 6.22658C11.2061 6.16006 11.1367 6.06928 11.096 5.96481L9.5469 2.06444C9.50472 1.95359 9.42984 1.85819 9.33219 1.79087C9.23455 1.72355 9.11875 1.6875 9.00015 1.6875C8.88155 1.6875 8.76575 1.72355 8.6681 1.79087C8.57046 1.85819 8.49558 1.95359 8.4534 2.06444L6.90427 5.96481C6.86372 6.06939 6.79429 6.16028 6.70406 6.22691C6.61383 6.29354 6.50652 6.33315 6.39465 6.34113L2.24171 6.61113C1.70508 6.64544 1.48908 7.339 1.90702 7.68663L5.0874 10.3338C5.17588 10.4085 5.2415 10.5067 5.27673 10.617C5.31195 10.7273 5.31534 10.8454 5.28652 10.9576L4.33702 14.6954C4.17558 15.3304 4.85115 15.8429 5.39452 15.4981L8.69077 13.4106C8.78342 13.3517 8.89093 13.3204 9.00071 13.3204C9.11049 13.3204 9.218 13.3517 9.31065 13.4106H9.31008Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.31008 13.4106L12.8566 15.6573C13.31 15.9441 13.8725 15.5172 13.7381 14.9879L12.7138 10.9576C12.6848 10.8453 12.6882 10.7271 12.7234 10.6167C12.7586 10.5062 12.8243 10.408 12.9129 10.3332L16.0933 7.68663C16.5106 7.339 16.2958 6.64544 15.7586 6.61056L11.6056 6.34056C11.4938 6.33263 11.3866 6.2931 11.2964 6.22658C11.2061 6.16006 11.1367 6.06928 11.096 5.96481L9.5469 2.06444C9.50472 1.95359 9.42984 1.85819 9.33219 1.79087C9.23455 1.72355 9.11875 1.6875 9.00015 1.6875C8.88155 1.6875 8.76575 1.72355 8.6681 1.79087C8.57046 1.85819 8.49558 1.95359 8.4534 2.06444L6.90427 5.96481C6.86372 6.06939 6.79429 6.16028 6.70406 6.22691C6.61383 6.29354 6.50652 6.33315 6.39465 6.34113L2.24171 6.61113C1.70508 6.64544 1.48908 7.339 1.90702 7.68663L5.0874 10.3338C5.17588 10.4085 5.2415 10.5067 5.27673 10.617C5.31195 10.7273 5.31534 10.8454 5.28652 10.9576L4.33702 14.6954C4.17558 15.3304 4.85115 15.8429 5.39452 15.4981L8.69077 13.4106C8.78342 13.3517 8.89093 13.3204 9.00071 13.3204C9.11049 13.3204 9.218 13.3517 9.31065 13.4106H9.31008Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.31008 13.4106L12.8566 15.6573C13.31 15.9441 13.8725 15.5172 13.7381 14.9879L12.7138 10.9576C12.6848 10.8453 12.6882 10.7271 12.7234 10.6167C12.7586 10.5062 12.8243 10.408 12.9129 10.3332L16.0933 7.68663C16.5106 7.339 16.2958 6.64544 15.7586 6.61056L11.6056 6.34056C11.4938 6.33263 11.3866 6.2931 11.2964 6.22658C11.2061 6.16006 11.1367 6.06928 11.096 5.96481L9.5469 2.06444C9.50472 1.95359 9.42984 1.85819 9.33219 1.79087C9.23455 1.72355 9.11875 1.6875 9.00015 1.6875C8.88155 1.6875 8.76575 1.72355 8.6681 1.79087C8.57046 1.85819 8.49558 1.95359 8.4534 2.06444L6.90427 5.96481C6.86372 6.06939 6.79429 6.16028 6.70406 6.22691C6.61383 6.29354 6.50652 6.33315 6.39465 6.34113L2.24171 6.61113C1.70508 6.64544 1.48908 7.339 1.90702 7.68663L5.0874 10.3338C5.17588 10.4085 5.2415 10.5067 5.27673 10.617C5.31195 10.7273 5.31534 10.8454 5.28652 10.9576L4.33702 14.6954C4.17558 15.3304 4.85115 15.8429 5.39452 15.4981L8.69077 13.4106C8.78342 13.3517 8.89093 13.3204 9.00071 13.3204C9.11049 13.3204 9.218 13.3517 9.31065 13.4106H9.31008Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.31008 13.4106L12.8566 15.6573C13.31 15.9441 13.8725 15.5172 13.7381 14.9879L12.7138 10.9576C12.6848 10.8453 12.6882 10.7271 12.7234 10.6167C12.7586 10.5062 12.8243 10.408 12.9129 10.3332L16.0933 7.68663C16.5106 7.339 16.2958 6.64544 15.7586 6.61056L11.6056 6.34056C11.4938 6.33263 11.3866 6.2931 11.2964 6.22658C11.2061 6.16006 11.1367 6.06928 11.096 5.96481L9.5469 2.06444C9.50472 1.95359 9.42984 1.85819 9.33219 1.79087C9.23455 1.72355 9.11875 1.6875 9.00015 1.6875C8.88155 1.6875 8.76575 1.72355 8.6681 1.79087C8.57046 1.85819 8.49558 1.95359 8.4534 2.06444L6.90427 5.96481C6.86372 6.06939 6.79429 6.16028 6.70406 6.22691C6.61383 6.29354 6.50652 6.33315 6.39465 6.34113L2.24171 6.61113C1.70508 6.64544 1.48908 7.339 1.90702 7.68663L5.0874 10.3338C5.17588 10.4085 5.2415 10.5067 5.27673 10.617C5.31195 10.7273 5.31534 10.8454 5.28652 10.9576L4.33702 14.6954C4.17558 15.3304 4.85115 15.8429 5.39452 15.4981L8.69077 13.4106C8.78342 13.3517 8.89093 13.3204 9.00071 13.3204C9.11049 13.3204 9.218 13.3517 9.31065 13.4106H9.31008Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.31008 13.4106L12.8566 15.6573C13.31 15.9441 13.8725 15.5172 13.7381 14.9879L12.7138 10.9576C12.6848 10.8453 12.6882 10.7271 12.7234 10.6167C12.7586 10.5062 12.8243 10.408 12.9129 10.3332L16.0933 7.68663C16.5106 7.339 16.2958 6.64544 15.7586 6.61056L11.6056 6.34056C11.4938 6.33263 11.3866 6.2931 11.2964 6.22658C11.2061 6.16006 11.1367 6.06928 11.096 5.96481L9.5469 2.06444C9.50472 1.95359 9.42984 1.85819 9.33219 1.79087C9.23455 1.72355 9.11875 1.6875 9.00015 1.6875C8.88155 1.6875 8.76575 1.72355 8.6681 1.79087C8.57046 1.85819 8.49558 1.95359 8.4534 2.06444L6.90427 5.96481C6.86372 6.06939 6.79429 6.16028 6.70406 6.22691C6.61383 6.29354 6.50652 6.33315 6.39465 6.34113L2.24171 6.61113C1.70508 6.64544 1.48908 7.339 1.90702 7.68663L5.0874 10.3338C5.17588 10.4085 5.2415 10.5067 5.27673 10.617C5.31195 10.7273 5.31534 10.8454 5.28652 10.9576L4.33702 14.6954C4.17558 15.3304 4.85115 15.8429 5.39452 15.4981L8.69077 13.4106C8.78342 13.3517 8.89093 13.3204 9.00071 13.3204C9.11049 13.3204 9.218 13.3517 9.31065 13.4106H9.31008Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <span>1074 Đánh giá</span>
                      </p>
                      <h4 className={cx("detail_price")}>{item.price}</h4>
                    </div>
                    <div className={cx("detail_bottom")}>
                      <div className={cx("detail_bottom-item")}>
                        <p className={cx("detail_bottom-branch")}>
                          <span>Thương Hiệu: </span> URIAGE
                        </p>
                        <p className={cx("detail_bottom-share")}>
                          <p style={{marginRight: "15px", color: "#1A1A1A"}}>Chia sẻ: </p>
                          <p className={cx("detail_icon")}>
                          <svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3575 3.48875H9.00075V0.62675C8.71725 0.58775 7.74225 0.5 6.60675 0.5C4.2375 0.5 2.6145 1.99025 2.6145 4.72925V7.25H0V10.4495H2.6145V18.5H5.82V10.4503H8.32875L8.727 7.25075H5.81925V5.0465C5.82 4.12175 6.069 3.48875 7.3575 3.48875Z" fill="#B3B3B3"/>
</svg>

                          </p>
                          <p className={cx("detail_icon")}>
                            <svg
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 2.23138C17.3306 2.525 16.6174 2.71963 15.8737 2.81413C16.6388 2.35738 17.2226 1.63963 17.4971 0.7745C16.7839 1.19975 15.9964 1.50013 15.1571 1.66775C14.4799 0.946625 13.5146 0.5 12.4616 0.5C10.4186 0.5 8.77387 2.15825 8.77387 4.19113C8.77387 4.48363 8.79862 4.76488 8.85938 5.03263C5.7915 4.883 3.07687 3.41263 1.25325 1.17275C0.934875 1.72513 0.748125 2.35738 0.748125 3.038C0.748125 4.316 1.40625 5.44888 2.38725 6.10475C1.79437 6.0935 1.21275 5.92138 0.72 5.65025C0.72 5.6615 0.72 5.67613 0.72 5.69075C0.72 7.484 1.99912 8.9735 3.6765 9.31663C3.37612 9.39875 3.04875 9.43813 2.709 9.43813C2.47275 9.43813 2.23425 9.42463 2.01038 9.37513C2.4885 10.8365 3.84525 11.9109 5.4585 11.9458C4.203 12.9279 2.60888 13.5196 0.883125 13.5196C0.5805 13.5196 0.29025 13.5061 0 13.469C1.63462 14.5231 3.57188 15.125 5.661 15.125C12.4515 15.125 16.164 9.5 16.164 4.62425C16.164 4.46113 16.1584 4.30363 16.1505 4.14725C16.8829 3.6275 17.4982 2.97838 18 2.23138Z"
                                fill="#B3B3B3"
                              />
                            </svg>
                          </p>
                          <p className={cx("detail_icon")}>
                            <svg
                              width="15"
                              height="19"
                              viewBox="0 0 15 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.55696 0.5C2.62362 0.5 0 3.66139 0 7.10855C0 8.70724 0.89329 10.7008 2.32323 11.3331C2.54036 11.431 2.65849 11.3894 2.70687 11.188C2.74962 11.035 2.93751 10.2981 3.02864 9.95042C3.05676 9.83904 3.04214 9.74229 2.95213 9.63766C2.47736 9.08864 2.10047 8.08847 2.10047 7.15017C2.10047 4.74594 4.01193 2.41146 7.26445 2.41146C10.0771 2.41146 12.0448 4.23854 12.0448 6.85204C12.0448 9.80529 10.4821 11.8484 8.45138 11.8484C7.32745 11.8484 6.49042 10.9663 6.75593 9.87505C7.07657 8.57561 7.70547 7.1783 7.70547 6.24113C7.70547 5.40072 7.2307 4.70544 6.26091 4.70544C5.11673 4.70544 4.18856 5.83837 4.18856 7.35943C4.18856 8.32585 4.53058 8.97838 4.53058 8.97838C4.53058 8.97838 3.39878 13.5506 3.18839 14.4045C2.83288 15.8502 3.23677 18.1914 3.27165 18.3928C3.29302 18.5042 3.4179 18.5391 3.48766 18.4479C3.59904 18.3017 4.9671 16.3497 5.35074 14.9389C5.49025 14.4248 6.0629 12.34 6.0629 12.34C6.43979 13.0207 7.52771 13.5911 8.68651 13.5911C12.1337 13.5911 14.6245 10.5613 14.6245 6.80141C14.6122 3.19675 11.5273 0.5 7.55696 0.5Z"
                                fill="#B3B3B3"
                              />
                            </svg>
                          </p>
                          <p className={cx("detail_icon")}>
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9507 5.79205C17.9086 4.83564 17.7539 4.17812 17.5324 3.60836C17.3038 3.00359 16.9522 2.46213 16.4915 2.01201C16.0414 1.55489 15.4963 1.19969 14.8986 0.974702C14.3255 0.753147 13.6714 0.598484 12.715 0.556316C11.7515 0.510576 11.4456 0.5 9.00174 0.5C6.55791 0.5 6.25202 0.510576 5.29204 0.552745C4.33563 0.594913 3.67811 0.749713 3.1085 0.971131C2.50358 1.19969 1.96213 1.55132 1.51201 2.01201C1.05489 2.46213 0.699827 3.00716 0.474701 3.60493C0.253147 4.17812 0.098484 4.83207 0.0563158 5.78848C0.0105764 6.75203 0 7.05792 0 9.50176C0 11.9456 0.0105764 12.2515 0.0527446 13.2115C0.0949128 14.1679 0.249713 14.8254 0.471267 15.3952C0.699827 15.9999 1.05489 16.5414 1.51201 16.9915C1.96213 17.4486 2.50715 17.8038 3.10493 18.0288C3.67811 18.2504 4.33206 18.405 5.28861 18.4472C6.24845 18.4895 6.55448 18.4999 8.99831 18.4999C11.4421 18.4999 11.748 18.4895 12.708 18.4472C13.6644 18.405 14.3219 18.2504 14.8916 18.0288C16.1012 17.5611 17.0577 16.6047 17.5254 15.3952C17.7468 14.822 17.9016 14.1679 17.9437 13.2115C17.9859 12.2515 17.9965 11.9456 17.9965 9.50176C17.9965 7.05792 17.9929 6.75203 17.9507 5.79205ZM16.3298 13.1411C16.2911 14.0202 16.1434 14.4949 16.0203 14.8114C15.7179 15.5956 15.0955 16.2179 14.3114 16.5204C13.9949 16.6434 13.5168 16.7911 12.6411 16.8297C11.6917 16.872 11.407 16.8824 9.00532 16.8824C6.60365 16.8824 6.31534 16.872 5.36937 16.8297C4.4903 16.7911 4.01559 16.6434 3.69913 16.5204C3.3089 16.3761 2.9537 16.1476 2.66539 15.8487C2.3665 15.5568 2.13794 15.2052 1.99372 14.815C1.87065 14.4985 1.72299 14.0202 1.68439 13.1447C1.64209 12.1953 1.63165 11.9104 1.63165 9.50876C1.63165 7.10709 1.64209 6.81878 1.68439 5.87295C1.72299 4.99387 1.87065 4.51917 1.99372 4.2027C2.13794 3.81234 2.3665 3.45727 2.66896 3.16883C2.9607 2.86994 3.31233 2.64138 3.7027 2.49729C4.01917 2.37422 4.49744 2.22656 5.37294 2.18783C6.32235 2.14566 6.60722 2.13508 9.00875 2.13508C11.414 2.13508 11.6987 2.14566 12.6447 2.18783C13.5238 2.22656 13.9985 2.37422 14.3149 2.49729C14.7052 2.64138 15.0604 2.86994 15.3487 3.16883C15.6476 3.46071 15.8761 3.81234 16.0203 4.2027C16.1434 4.51917 16.2911 4.99731 16.3298 5.87295C16.372 6.82236 16.3826 7.10709 16.3826 9.50876C16.3826 11.9104 16.372 12.1917 16.3298 13.1411Z" fill="#B3B3B3"/>
<path d="M9.00188 4.87793C6.44912 4.87793 4.37793 6.94898 4.37793 9.50188C4.37793 12.0548 6.44912 14.1258 9.00188 14.1258C11.5548 14.1258 13.6258 12.0548 13.6258 9.50188C13.6258 6.94898 11.5548 4.87793 9.00188 4.87793ZM9.00188 12.5013C7.34578 12.5013 6.00244 11.1581 6.00244 9.50188C6.00244 7.84564 7.34578 6.50244 9.00188 6.50244C10.6581 6.50244 12.0013 7.84564 12.0013 9.50188C12.0013 11.1581 10.6581 12.5013 9.00188 12.5013Z" fill="#B3B3B3"/>
<path d="M14.8881 4.69472C14.8881 5.29084 14.4048 5.7742 13.8085 5.7742C13.2124 5.7742 12.729 5.29084 12.729 4.69472C12.729 4.09845 13.2124 3.61523 13.8085 3.61523C14.4048 3.61523 14.8881 4.09845 14.8881 4.69472Z" fill="#B3B3B3"/>
</svg>

                          </p>
                        </p>
                      </div>
                      <p className={cx("detail_bottom-desc")}>
                        Serum dưỡng sáng da, giúp làm đều màu da URIAGE DEPIDERM
                        SERUM CORRECTEUR giúp dưỡng sáng da, làm đều màu da,
                        loại bỏ các vùng da tối màu, ngăn ngừa các đốm nâu, tàn
                        nhang, cho làn da sáng hồng tự nhiên, đều màu rạng rỡ
                      </p>
                    </div>
                    <div className={cx("detail_button")}>
                      <button className={cx("detail_button-desc")}>
                        <svg
                          width="34"
                          height="35"
                          viewBox="0 0 34 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="34"
                            height="34"
                            rx="17"
                            fill="#F2F2F2"
                          />
                          <path
                            d="M12.3335 17.5H21.6668"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>

                      <p>{number}</p>

                      <button className={cx("detail_button-incre")}>
                        <svg
                          width="34"
                          height="35"
                          viewBox="0 0 34 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="34"
                            height="34"
                            rx="17"
                            fill="#F2F2F2"
                          />
                          <path
                            d="M12.3335 17.4997H21.6668M17.0002 12.833V22.1663V12.833Z"
                            stroke="#1A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>

                      <Button
                        sx={{
                          padding: { sm: "10px 30px" },
                          borderRadius: "10px",
                          margin: { sm: "0 20px", xs: "0 5px 0 0" },
                          fontSize: { xs: "13px" },
                        }}
                        onClick={() => handleAddToCart({ ...item, number: "1" })}
                      >
                        Thêm vào giỏ hàng
                        <Typography
                          style={{ marginLeft: "10px" }}
                          sx={{ display: { xs: "none" } }}
                        >
                          <svg
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.66667 6.83333H3.16667L1.5 16H16.5L14.8333 6.83333H12.3333M5.66667 6.83333V4.33333C5.66667 2.49239 7.15905 1 9 1V1C10.8409 1 12.3333 2.49238 12.3333 4.33333V6.83333M5.66667 6.83333H12.3333M5.66667 6.83333V9.33333M12.3333 6.83333V9.33333"
                              stroke="white"
                              stroke-width="1.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Typography>
                      </Button>

                      <Button
                        sx={{
                          padding: { sm: "10px 70px" },
                          borderRadius: "10px",
                          margin: { sm: "0 20px" },
                        }}
                      >
                        <Link to="/buy" style={{ color: "white" }}>
                          Mua ngay
                        </Link>
                      </Button>
                      <Typography sx={{ display: { xs: "none" } }}>
                        <svg
                          width="52"
                          height="53"
                          viewBox="0 0 52 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="52"
                            height="52"
                            rx="26"
                            fill="#FFE6F2"
                          />
                          <path
                            d="M25.9996 34.0448C9.33328 24.8331 20.9999 14.8331 25.9996 21.1564C30.9999 14.8331 42.6666 24.8331 25.9996 34.0448Z"
                            stroke="#FA58A6"
                            stroke-width="1.5"
                          />
                        </svg>
                      </Typography>
                    </div>
                    <div className={cx("detail_type")}>Phân loại: 30 ml</div>
                  </Grid>
                </React.Fragment>
              );
            }
          })}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ padding: "0 5px" }}>
        <Grid container spacing={{ sm: 10, xs: 1 }}>
          <Grid item sm={7} xs={12}>
            <Typography
              variant="h3"
              style={{
                marginBottom: "20px",
              }}
              sx={{
                borderBottom: { sm: "3px solid #FA58A6", xs: "1px solid #FFF" },
                fontSize: { xs: "20px", sm: "25px" },
                width: { xs: "100%", sm: "44%" },
                fontWeight: "600",
              }}
            >
              THÔNG TIN SẢN PHẨM
            </Typography>
            <p className={cx("infor_desc")}>
              Serum dưỡng ẩm, sáng da giúp làm đều màu da, giúp da sáng khỏe hơn
              mỗi ngày. Công dụng Serum dưỡng sáng da, giúp làm đều màu da
              URIAGE:
            </p>
            <ul className={cx("infor_list")}>
              <li className={cx("infor_item")}>
                <p className={cx("infor_icon")}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_268_7352)">
                      <rect
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#FA58A6"
                      />
                      <path
                        d="M14.4168 7.625L8.68766 13.3542L6.0835 10.75"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_268_7352">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <p>Trắng sáng từ sâu bên trong da</p>
              </li>
              <li className={cx("infor_item")}>
                <p className={cx("infor_icon")}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_268_7352)">
                      <rect
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#FA58A6"
                      />
                      <path
                        d="M14.4168 7.625L8.68766 13.3542L6.0835 10.75"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_268_7352">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <p>Tăng cường sức sống cho da, hạn chế và ngăn ngừa lão hóa da.</p>
              </li>
              <li className={cx("infor_item")}>
                <p className={cx("infor_icon")}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_268_7352)">
                      <rect
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#FA58A6"
                      />
                      <path
                        d="M14.4168 7.625L8.68766 13.3542L6.0835 10.75"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_268_7352">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <p>Làm đều màu và mịn da, kích thích và tăng cường sức sống cho da.</p>
              </li>
              <li className={cx("infor_item")}>
                <p className={cx("infor_icon")}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_268_7352)">
                      <rect
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#FA58A6"
                      />
                      <path
                        d="M14.4168 7.625L8.68766 13.3542L6.0835 10.75"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_268_7352">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <p>Được tăng cường bởi nước khoáng Uriage làm dịu, dưỡng ẩm </p>
              </li>
            </ul>
            <p style={{padding: "12px 0", fontWeight:"600", fontSize: "18px"}}>
            Hướng dẫn sử dụng
            </p>
            <ul className={cx("infor_list")}>
              <li className={cx("infor_item")}>
                <p className={cx("infor_icon")}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_268_7352)">
                      <rect
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#FA58A6"
                      />
                      <path
                        d="M14.4168 7.625L8.68766 13.3542L6.0835 10.75"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_268_7352">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <p>Sử dụng sáng và tối trên làn da sạch sau bước làm sạch, cân bằng da</p>
              </li>
              <li className={cx("infor_item")}>
                <p className={cx("infor_icon")}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_268_7352)">
                      <rect
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#FA58A6"
                      />
                      <path
                        d="M14.4168 7.625L8.68766 13.3542L6.0835 10.75"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_268_7352">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <p>Không trang điểm trước khi sử dụng</p>
              </li>
              <li className={cx("infor_item")}>
                <p className={cx("infor_icon")}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_268_7352)">
                      <rect
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#FA58A6"
                      />
                      <path
                        d="M14.4168 7.625L8.68766 13.3542L6.0835 10.75"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_268_7352">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <p>Thoa sản phẩm trên toàn bộ gương mặt, cổ hoặc tay</p>
              </li>
            
            </ul>
          </Grid>
          <Grid item sm={5}>
            <Typography
              variant="h3"
              style={{
                margin: "0 0 20px 0",
              }}
              sx={{
                borderBottom: { sm: "3px solid #FA58A6", xs: "1px solid #FFF" },
                fontSize: { xs: "20px", sm: "25px" },
                width: { xs: "100%", sm: "40%" },
                fontWeight: "600",
              }}
            >
              THÀNH PHẦN
            </Typography>
            <p>
              Aqua (Water, EAU), Dicaprylyl Carbonate, Isodecyl Neopentanoate,
              Ptfe, Butylene Glycol, Diglycerin, Glycerin, Polymethyl
              Methacrylate, Methyl Glucose Sesquis-stearate, Peg-20 Methyl
              Glucose Sesquistearate, Maltodextrin, 1-2 Hexanediol, Ascorbyl
              Glucoside, Creatine, Dimethicone, Peg-40 Hydrogenated Castor Oil,
              Phenoxyethanol, Sucrose Dilaurate, Chlorphenesin, Parfum
              (Fragrance), Sodium Hydroxide, Acrylates/C10-30 Alkyl Acrylate
              Crosspolymer, Niacinamide, Sodium Cocoyl Glutamate, Sodium
              Citrate, Xanthan gum, o-Cymen-5-OL, Sodium Polyacrylate,
              Tocopheryl Acetate, Pisum Sativum Extract ( Pisum Sativum (Pea)
              Extract ), Biosaccha-Ride Gum-1, Mica, CI 77891 (Titanium
              Dioxide), Citric Acid, Tocopherol.
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={{ sm: 10, xs: 2 }} sx={{ marginTop: "20px" }}>
          <Grid item sm={7}>
            <Box
              className={cx("content2")}
              sx={{
                marginTop: { xs: "0", sm: "38px" },
              }}
            >
              <Typography
                variant="h3"
                style={{
                  marginTop: "20px",
                }}
                sx={{
                  borderBottom: {
                    sm: "3px solid #FA58A6",
                    xs: "1px solid #FFF",
                  },
                  fontSize: { xs: "20px", sm: "25px" },
                  width: { xs: "100%", sm: "20%" },
                  fontWeight: "600",
                  // margin: {xs: "0", sm: "40px 0"}
                }}
              >
                PHẢN HỒI
              </Typography>
              <div className={cx("comment")}>
                <div className={cx("comment_about")}>
                  <div className={cx("comment_persion")}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src="https://i.postimg.cc/jds5G8JW/Ellipse-4.png"
                        alt="persion"
                      />
                    </div>
                    <div className={cx("comment_persion-content")}>
                      <p style={{ fontWeight: "700" }}>Vũ Nguyễn</p>
                      <p>
                        <svg
                          width="80"
                          height="17"
                          viewBox="0 0 80 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.27563 12.421L11.4281 14.418C11.8311 14.673 12.3311 14.2935 12.2116 13.823L11.3011 10.2405C11.2754 10.1408 11.2784 10.0357 11.3097 9.93755C11.341 9.83937 11.3994 9.75202 11.4781 9.68555L14.3051 7.33305C14.6761 7.02405 14.4851 6.40755 14.0076 6.37655L10.3161 6.13655C10.2167 6.1295 10.1214 6.09436 10.0412 6.03523C9.961 5.9761 9.89925 5.89541 9.86313 5.80255L8.48613 2.33555C8.44864 2.23701 8.38208 2.15221 8.29528 2.09237C8.20849 2.03253 8.10555 2.00049 8.00013 2.00049C7.89471 2.00049 7.79177 2.03253 7.70498 2.09237C7.61818 2.15221 7.55163 2.23701 7.51413 2.33555L6.13713 5.80255C6.10109 5.8955 6.03937 5.9763 5.95916 6.03552C5.87896 6.09474 5.78358 6.12995 5.68413 6.13705L1.99263 6.37705C1.51563 6.40755 1.32363 7.02405 1.69513 7.33305L4.52213 9.68605C4.60079 9.75248 4.65911 9.83975 4.69042 9.93783C4.72173 10.0359 4.72475 10.1408 4.69913 10.2405L3.85513 13.563C3.71163 14.1275 4.31213 14.583 4.79513 14.2765L7.72513 12.421C7.80748 12.3687 7.90305 12.3409 8.00063 12.3409C8.09822 12.3409 8.19378 12.3687 8.27613 12.421H8.27563Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M24.2756 12.421L27.4281 14.418C27.8311 14.673 28.3311 14.2935 28.2116 13.823L27.3011 10.2405C27.2754 10.1408 27.2784 10.0357 27.3097 9.93755C27.341 9.83937 27.3994 9.75202 27.4781 9.68554L30.3051 7.33305C30.6761 7.02404 30.4851 6.40755 30.0076 6.37654L26.3161 6.13655C26.2167 6.12949 26.1214 6.09436 26.0412 6.03523C25.961 5.9761 25.8993 5.89541 25.8631 5.80254L24.4861 2.33555C24.4486 2.23701 24.3821 2.15221 24.2953 2.09237C24.2085 2.03253 24.1056 2.00049 24.0001 2.00049C23.8947 2.00049 23.7918 2.03253 23.705 2.09237C23.6182 2.15221 23.5516 2.23701 23.5141 2.33555L22.1371 5.80254C22.1011 5.8955 22.0394 5.9763 21.9592 6.03552C21.879 6.09474 21.7836 6.12995 21.6841 6.13704L17.9926 6.37704C17.5156 6.40754 17.3236 7.02404 17.6951 7.33305L20.5221 9.68604C20.6008 9.75248 20.6591 9.83974 20.6904 9.93783C20.7217 10.0359 20.7247 10.1408 20.6991 10.2405L19.8551 13.563C19.7116 14.1275 20.3121 14.583 20.7951 14.2765L23.7251 12.421C23.8075 12.3687 23.903 12.3409 24.0006 12.3409C24.0982 12.3409 24.1938 12.3687 24.2761 12.421H24.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M40.2756 12.421L43.4281 14.418C43.8311 14.673 44.3311 14.2935 44.2116 13.823L43.3011 10.2405C43.2754 10.1408 43.2784 10.0357 43.3097 9.93755C43.341 9.83937 43.3994 9.75202 43.4781 9.68554L46.3051 7.33305C46.6761 7.02404 46.4851 6.40755 46.0076 6.37654L42.3161 6.13655C42.2167 6.12949 42.1214 6.09436 42.0412 6.03523C41.961 5.9761 41.8993 5.89541 41.8631 5.80254L40.4861 2.33555C40.4486 2.23701 40.3821 2.15221 40.2953 2.09237C40.2085 2.03253 40.1056 2.00049 40.0001 2.00049C39.8947 2.00049 39.7918 2.03253 39.705 2.09237C39.6182 2.15221 39.5516 2.23701 39.5141 2.33555L38.1371 5.80254C38.1011 5.8955 38.0394 5.9763 37.9592 6.03552C37.879 6.09474 37.7836 6.12995 37.6841 6.13704L33.9926 6.37704C33.5156 6.40754 33.3236 7.02404 33.6951 7.33305L36.5221 9.68604C36.6008 9.75248 36.6591 9.83974 36.6904 9.93783C36.7217 10.0359 36.7247 10.1408 36.6991 10.2405L35.8551 13.563C35.7116 14.1275 36.3121 14.583 36.7951 14.2765L39.7251 12.421C39.8075 12.3687 39.903 12.3409 40.0006 12.3409C40.0982 12.3409 40.1938 12.3687 40.2761 12.421H40.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M56.2756 12.421L59.4281 14.418C59.8311 14.673 60.3311 14.2935 60.2116 13.823L59.3011 10.2405C59.2754 10.1408 59.2784 10.0357 59.3097 9.93755C59.341 9.83937 59.3994 9.75202 59.4781 9.68554L62.3051 7.33305C62.6761 7.02404 62.4851 6.40755 62.0076 6.37654L58.3161 6.13655C58.2167 6.12949 58.1214 6.09436 58.0412 6.03523C57.961 5.9761 57.8993 5.89541 57.8631 5.80254L56.4861 2.33555C56.4486 2.23701 56.3821 2.15221 56.2953 2.09237C56.2085 2.03253 56.1056 2.00049 56.0001 2.00049C55.8947 2.00049 55.7918 2.03253 55.705 2.09237C55.6182 2.15221 55.5516 2.23701 55.5141 2.33555L54.1371 5.80254C54.1011 5.8955 54.0394 5.9763 53.9592 6.03552C53.879 6.09474 53.7836 6.12995 53.6841 6.13704L49.9926 6.37704C49.5156 6.40754 49.3236 7.02404 49.6951 7.33305L52.5221 9.68604C52.6008 9.75248 52.6591 9.83974 52.6904 9.93783C52.7217 10.0359 52.7247 10.1408 52.6991 10.2405L51.8551 13.563C51.7116 14.1275 52.3121 14.583 52.7951 14.2765L55.7251 12.421C55.8075 12.3687 55.903 12.3409 56.0006 12.3409C56.0982 12.3409 56.1938 12.3687 56.2761 12.421H56.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M72.2756 12.421L75.4281 14.418C75.8311 14.673 76.3311 14.2935 76.2116 13.823L75.3011 10.2405C75.2754 10.1408 75.2784 10.0357 75.3097 9.93755C75.341 9.83937 75.3994 9.75202 75.4781 9.68554L78.3051 7.33305C78.6761 7.02404 78.4851 6.40755 78.0076 6.37654L74.3161 6.13655C74.2167 6.12949 74.1214 6.09436 74.0412 6.03523C73.961 5.9761 73.8993 5.89541 73.8631 5.80254L72.4861 2.33555C72.4486 2.23701 72.3821 2.15221 72.2953 2.09237C72.2085 2.03253 72.1056 2.00049 72.0001 2.00049C71.8947 2.00049 71.7918 2.03253 71.705 2.09237C71.6182 2.15221 71.5516 2.23701 71.5141 2.33555L70.1371 5.80254C70.1011 5.8955 70.0394 5.9763 69.9592 6.03552C69.879 6.09474 69.7836 6.12995 69.6841 6.13704L65.9926 6.37704C65.5156 6.40754 65.3236 7.02404 65.6951 7.33305L68.5221 9.68604C68.6008 9.75248 68.6591 9.83974 68.6904 9.93783C68.7217 10.0359 68.7247 10.1408 68.6991 10.2405L67.8551 13.563C67.7116 14.1275 68.3121 14.583 68.7951 14.2765L71.7251 12.421C71.8075 12.3687 71.903 12.3409 72.0006 12.3409C72.0982 12.3409 72.1938 12.3687 72.2761 12.421H72.2756Z"
                            fill="#FF8A00"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                  <div className={cx("comment_time")}>2 ngày trước</div>
                </div>
                <p>Sản phẩm tốt, đóng gói kỹ, giao hàng nhanh</p>
              </div>
              <div className={cx("comment")}>
                <div className={cx("comment_about")}>
                  <div className={cx("comment_persion")}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src="https://i.postimg.cc/CM4qxfMp/Profile.png"
                        alt="persion"
                      />
                    </div>
                    <div className={cx("comment_persion-content")}>
                      <p style={{ fontWeight: "700" }}>Nguyễn Linh</p>

                      <p>
                        <svg
                          width="80"
                          height="17"
                          viewBox="0 0 80 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.27563 12.421L11.4281 14.418C11.8311 14.673 12.3311 14.2935 12.2116 13.823L11.3011 10.2405C11.2754 10.1408 11.2784 10.0357 11.3097 9.93755C11.341 9.83937 11.3994 9.75202 11.4781 9.68555L14.3051 7.33305C14.6761 7.02405 14.4851 6.40755 14.0076 6.37655L10.3161 6.13655C10.2167 6.1295 10.1214 6.09436 10.0412 6.03523C9.961 5.9761 9.89925 5.89541 9.86313 5.80255L8.48613 2.33555C8.44864 2.23701 8.38208 2.15221 8.29528 2.09237C8.20849 2.03253 8.10555 2.00049 8.00013 2.00049C7.89471 2.00049 7.79177 2.03253 7.70498 2.09237C7.61818 2.15221 7.55163 2.23701 7.51413 2.33555L6.13713 5.80255C6.10109 5.8955 6.03937 5.9763 5.95916 6.03552C5.87896 6.09474 5.78358 6.12995 5.68413 6.13705L1.99263 6.37705C1.51563 6.40755 1.32363 7.02405 1.69513 7.33305L4.52213 9.68605C4.60079 9.75248 4.65911 9.83975 4.69042 9.93783C4.72173 10.0359 4.72475 10.1408 4.69913 10.2405L3.85513 13.563C3.71163 14.1275 4.31213 14.583 4.79513 14.2765L7.72513 12.421C7.80748 12.3687 7.90305 12.3409 8.00063 12.3409C8.09822 12.3409 8.19378 12.3687 8.27613 12.421H8.27563Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M24.2756 12.421L27.4281 14.418C27.8311 14.673 28.3311 14.2935 28.2116 13.823L27.3011 10.2405C27.2754 10.1408 27.2784 10.0357 27.3097 9.93755C27.341 9.83937 27.3994 9.75202 27.4781 9.68554L30.3051 7.33305C30.6761 7.02404 30.4851 6.40755 30.0076 6.37654L26.3161 6.13655C26.2167 6.12949 26.1214 6.09436 26.0412 6.03523C25.961 5.9761 25.8993 5.89541 25.8631 5.80254L24.4861 2.33555C24.4486 2.23701 24.3821 2.15221 24.2953 2.09237C24.2085 2.03253 24.1056 2.00049 24.0001 2.00049C23.8947 2.00049 23.7918 2.03253 23.705 2.09237C23.6182 2.15221 23.5516 2.23701 23.5141 2.33555L22.1371 5.80254C22.1011 5.8955 22.0394 5.9763 21.9592 6.03552C21.879 6.09474 21.7836 6.12995 21.6841 6.13704L17.9926 6.37704C17.5156 6.40754 17.3236 7.02404 17.6951 7.33305L20.5221 9.68604C20.6008 9.75248 20.6591 9.83974 20.6904 9.93783C20.7217 10.0359 20.7247 10.1408 20.6991 10.2405L19.8551 13.563C19.7116 14.1275 20.3121 14.583 20.7951 14.2765L23.7251 12.421C23.8075 12.3687 23.903 12.3409 24.0006 12.3409C24.0982 12.3409 24.1938 12.3687 24.2761 12.421H24.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M40.2756 12.421L43.4281 14.418C43.8311 14.673 44.3311 14.2935 44.2116 13.823L43.3011 10.2405C43.2754 10.1408 43.2784 10.0357 43.3097 9.93755C43.341 9.83937 43.3994 9.75202 43.4781 9.68554L46.3051 7.33305C46.6761 7.02404 46.4851 6.40755 46.0076 6.37654L42.3161 6.13655C42.2167 6.12949 42.1214 6.09436 42.0412 6.03523C41.961 5.9761 41.8993 5.89541 41.8631 5.80254L40.4861 2.33555C40.4486 2.23701 40.3821 2.15221 40.2953 2.09237C40.2085 2.03253 40.1056 2.00049 40.0001 2.00049C39.8947 2.00049 39.7918 2.03253 39.705 2.09237C39.6182 2.15221 39.5516 2.23701 39.5141 2.33555L38.1371 5.80254C38.1011 5.8955 38.0394 5.9763 37.9592 6.03552C37.879 6.09474 37.7836 6.12995 37.6841 6.13704L33.9926 6.37704C33.5156 6.40754 33.3236 7.02404 33.6951 7.33305L36.5221 9.68604C36.6008 9.75248 36.6591 9.83974 36.6904 9.93783C36.7217 10.0359 36.7247 10.1408 36.6991 10.2405L35.8551 13.563C35.7116 14.1275 36.3121 14.583 36.7951 14.2765L39.7251 12.421C39.8075 12.3687 39.903 12.3409 40.0006 12.3409C40.0982 12.3409 40.1938 12.3687 40.2761 12.421H40.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M56.2756 12.421L59.4281 14.418C59.8311 14.673 60.3311 14.2935 60.2116 13.823L59.3011 10.2405C59.2754 10.1408 59.2784 10.0357 59.3097 9.93755C59.341 9.83937 59.3994 9.75202 59.4781 9.68554L62.3051 7.33305C62.6761 7.02404 62.4851 6.40755 62.0076 6.37654L58.3161 6.13655C58.2167 6.12949 58.1214 6.09436 58.0412 6.03523C57.961 5.9761 57.8993 5.89541 57.8631 5.80254L56.4861 2.33555C56.4486 2.23701 56.3821 2.15221 56.2953 2.09237C56.2085 2.03253 56.1056 2.00049 56.0001 2.00049C55.8947 2.00049 55.7918 2.03253 55.705 2.09237C55.6182 2.15221 55.5516 2.23701 55.5141 2.33555L54.1371 5.80254C54.1011 5.8955 54.0394 5.9763 53.9592 6.03552C53.879 6.09474 53.7836 6.12995 53.6841 6.13704L49.9926 6.37704C49.5156 6.40754 49.3236 7.02404 49.6951 7.33305L52.5221 9.68604C52.6008 9.75248 52.6591 9.83974 52.6904 9.93783C52.7217 10.0359 52.7247 10.1408 52.6991 10.2405L51.8551 13.563C51.7116 14.1275 52.3121 14.583 52.7951 14.2765L55.7251 12.421C55.8075 12.3687 55.903 12.3409 56.0006 12.3409C56.0982 12.3409 56.1938 12.3687 56.2761 12.421H56.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M72.2756 12.421L75.4281 14.418C75.8311 14.673 76.3311 14.2935 76.2116 13.823L75.3011 10.2405C75.2754 10.1408 75.2784 10.0357 75.3097 9.93755C75.341 9.83937 75.3994 9.75202 75.4781 9.68554L78.3051 7.33305C78.6761 7.02404 78.4851 6.40755 78.0076 6.37654L74.3161 6.13655C74.2167 6.12949 74.1214 6.09436 74.0412 6.03523C73.961 5.9761 73.8993 5.89541 73.8631 5.80254L72.4861 2.33555C72.4486 2.23701 72.3821 2.15221 72.2953 2.09237C72.2085 2.03253 72.1056 2.00049 72.0001 2.00049C71.8947 2.00049 71.7918 2.03253 71.705 2.09237C71.6182 2.15221 71.5516 2.23701 71.5141 2.33555L70.1371 5.80254C70.1011 5.8955 70.0394 5.9763 69.9592 6.03552C69.879 6.09474 69.7836 6.12995 69.6841 6.13704L65.9926 6.37704C65.5156 6.40754 65.3236 7.02404 65.6951 7.33305L68.5221 9.68604C68.6008 9.75248 68.6591 9.83974 68.6904 9.93783C68.7217 10.0359 68.7247 10.1408 68.6991 10.2405L67.8551 13.563C67.7116 14.1275 68.3121 14.583 68.7951 14.2765L71.7251 12.421C71.8075 12.3687 71.903 12.3409 72.0006 12.3409C72.0982 12.3409 72.1938 12.3687 72.2761 12.421H72.2756Z"
                            fill="#FF8A00"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                  <div className={cx("comment_time")}>2 ngày trước</div>
                </div>
                <p>Shop phục vụ tốt, đóng gói sản phẩm kỹ và cẩn thận. Thời gian giao hàng nhanh hơn dự kiến.</p>
              </div>
              <div className={cx("comment")}>
                <div className={cx("comment_about")}>
                  <div className={cx("comment_persion")}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src="https://i.postimg.cc/pXfRHDPK/Profile-1.png"
                        alt="persion"
                      />
                    </div>
                    <div className={cx("comment_persion-content")}>
                      <p style={{ fontWeight: "700" }}>Hồng Hà</p>

                      <p>
                        <svg
                          width="80"
                          height="17"
                          viewBox="0 0 80 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.27563 12.421L11.4281 14.418C11.8311 14.673 12.3311 14.2935 12.2116 13.823L11.3011 10.2405C11.2754 10.1408 11.2784 10.0357 11.3097 9.93755C11.341 9.83937 11.3994 9.75202 11.4781 9.68555L14.3051 7.33305C14.6761 7.02405 14.4851 6.40755 14.0076 6.37655L10.3161 6.13655C10.2167 6.1295 10.1214 6.09436 10.0412 6.03523C9.961 5.9761 9.89925 5.89541 9.86313 5.80255L8.48613 2.33555C8.44864 2.23701 8.38208 2.15221 8.29528 2.09237C8.20849 2.03253 8.10555 2.00049 8.00013 2.00049C7.89471 2.00049 7.79177 2.03253 7.70498 2.09237C7.61818 2.15221 7.55163 2.23701 7.51413 2.33555L6.13713 5.80255C6.10109 5.8955 6.03937 5.9763 5.95916 6.03552C5.87896 6.09474 5.78358 6.12995 5.68413 6.13705L1.99263 6.37705C1.51563 6.40755 1.32363 7.02405 1.69513 7.33305L4.52213 9.68605C4.60079 9.75248 4.65911 9.83975 4.69042 9.93783C4.72173 10.0359 4.72475 10.1408 4.69913 10.2405L3.85513 13.563C3.71163 14.1275 4.31213 14.583 4.79513 14.2765L7.72513 12.421C7.80748 12.3687 7.90305 12.3409 8.00063 12.3409C8.09822 12.3409 8.19378 12.3687 8.27613 12.421H8.27563Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M24.2756 12.421L27.4281 14.418C27.8311 14.673 28.3311 14.2935 28.2116 13.823L27.3011 10.2405C27.2754 10.1408 27.2784 10.0357 27.3097 9.93755C27.341 9.83937 27.3994 9.75202 27.4781 9.68554L30.3051 7.33305C30.6761 7.02404 30.4851 6.40755 30.0076 6.37654L26.3161 6.13655C26.2167 6.12949 26.1214 6.09436 26.0412 6.03523C25.961 5.9761 25.8993 5.89541 25.8631 5.80254L24.4861 2.33555C24.4486 2.23701 24.3821 2.15221 24.2953 2.09237C24.2085 2.03253 24.1056 2.00049 24.0001 2.00049C23.8947 2.00049 23.7918 2.03253 23.705 2.09237C23.6182 2.15221 23.5516 2.23701 23.5141 2.33555L22.1371 5.80254C22.1011 5.8955 22.0394 5.9763 21.9592 6.03552C21.879 6.09474 21.7836 6.12995 21.6841 6.13704L17.9926 6.37704C17.5156 6.40754 17.3236 7.02404 17.6951 7.33305L20.5221 9.68604C20.6008 9.75248 20.6591 9.83974 20.6904 9.93783C20.7217 10.0359 20.7247 10.1408 20.6991 10.2405L19.8551 13.563C19.7116 14.1275 20.3121 14.583 20.7951 14.2765L23.7251 12.421C23.8075 12.3687 23.903 12.3409 24.0006 12.3409C24.0982 12.3409 24.1938 12.3687 24.2761 12.421H24.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M40.2756 12.421L43.4281 14.418C43.8311 14.673 44.3311 14.2935 44.2116 13.823L43.3011 10.2405C43.2754 10.1408 43.2784 10.0357 43.3097 9.93755C43.341 9.83937 43.3994 9.75202 43.4781 9.68554L46.3051 7.33305C46.6761 7.02404 46.4851 6.40755 46.0076 6.37654L42.3161 6.13655C42.2167 6.12949 42.1214 6.09436 42.0412 6.03523C41.961 5.9761 41.8993 5.89541 41.8631 5.80254L40.4861 2.33555C40.4486 2.23701 40.3821 2.15221 40.2953 2.09237C40.2085 2.03253 40.1056 2.00049 40.0001 2.00049C39.8947 2.00049 39.7918 2.03253 39.705 2.09237C39.6182 2.15221 39.5516 2.23701 39.5141 2.33555L38.1371 5.80254C38.1011 5.8955 38.0394 5.9763 37.9592 6.03552C37.879 6.09474 37.7836 6.12995 37.6841 6.13704L33.9926 6.37704C33.5156 6.40754 33.3236 7.02404 33.6951 7.33305L36.5221 9.68604C36.6008 9.75248 36.6591 9.83974 36.6904 9.93783C36.7217 10.0359 36.7247 10.1408 36.6991 10.2405L35.8551 13.563C35.7116 14.1275 36.3121 14.583 36.7951 14.2765L39.7251 12.421C39.8075 12.3687 39.903 12.3409 40.0006 12.3409C40.0982 12.3409 40.1938 12.3687 40.2761 12.421H40.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M56.2756 12.421L59.4281 14.418C59.8311 14.673 60.3311 14.2935 60.2116 13.823L59.3011 10.2405C59.2754 10.1408 59.2784 10.0357 59.3097 9.93755C59.341 9.83937 59.3994 9.75202 59.4781 9.68554L62.3051 7.33305C62.6761 7.02404 62.4851 6.40755 62.0076 6.37654L58.3161 6.13655C58.2167 6.12949 58.1214 6.09436 58.0412 6.03523C57.961 5.9761 57.8993 5.89541 57.8631 5.80254L56.4861 2.33555C56.4486 2.23701 56.3821 2.15221 56.2953 2.09237C56.2085 2.03253 56.1056 2.00049 56.0001 2.00049C55.8947 2.00049 55.7918 2.03253 55.705 2.09237C55.6182 2.15221 55.5516 2.23701 55.5141 2.33555L54.1371 5.80254C54.1011 5.8955 54.0394 5.9763 53.9592 6.03552C53.879 6.09474 53.7836 6.12995 53.6841 6.13704L49.9926 6.37704C49.5156 6.40754 49.3236 7.02404 49.6951 7.33305L52.5221 9.68604C52.6008 9.75248 52.6591 9.83974 52.6904 9.93783C52.7217 10.0359 52.7247 10.1408 52.6991 10.2405L51.8551 13.563C51.7116 14.1275 52.3121 14.583 52.7951 14.2765L55.7251 12.421C55.8075 12.3687 55.903 12.3409 56.0006 12.3409C56.0982 12.3409 56.1938 12.3687 56.2761 12.421H56.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M72.2756 12.421L75.4281 14.418C75.8311 14.673 76.3311 14.2935 76.2116 13.823L75.3011 10.2405C75.2754 10.1408 75.2784 10.0357 75.3097 9.93755C75.341 9.83937 75.3994 9.75202 75.4781 9.68554L78.3051 7.33305C78.6761 7.02404 78.4851 6.40755 78.0076 6.37654L74.3161 6.13655C74.2167 6.12949 74.1214 6.09436 74.0412 6.03523C73.961 5.9761 73.8993 5.89541 73.8631 5.80254L72.4861 2.33555C72.4486 2.23701 72.3821 2.15221 72.2953 2.09237C72.2085 2.03253 72.1056 2.00049 72.0001 2.00049C71.8947 2.00049 71.7918 2.03253 71.705 2.09237C71.6182 2.15221 71.5516 2.23701 71.5141 2.33555L70.1371 5.80254C70.1011 5.8955 70.0394 5.9763 69.9592 6.03552C69.879 6.09474 69.7836 6.12995 69.6841 6.13704L65.9926 6.37704C65.5156 6.40754 65.3236 7.02404 65.6951 7.33305L68.5221 9.68604C68.6008 9.75248 68.6591 9.83974 68.6904 9.93783C68.7217 10.0359 68.7247 10.1408 68.6991 10.2405L67.8551 13.563C67.7116 14.1275 68.3121 14.583 68.7951 14.2765L71.7251 12.421C71.8075 12.3687 71.903 12.3409 72.0006 12.3409C72.0982 12.3409 72.1938 12.3687 72.2761 12.421H72.2756Z"
                            fill="#FF8A00"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                  <div className={cx("comment_time")}>2 ngày trước</div>
                </div>
                <p>Shop giao hàng nhanh lắm, dùng siu ưng, sau vài tuần là thấy da sáng hơn hẳn, mọi người nên mua nhé.</p>
              </div>
              <div className={cx("comment")}>
                <div className={cx("comment_about")}>
                  <div className={cx("comment_persion")}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src="https://i.postimg.cc/cJVbCbmC/Profile-2.png"
                        alt="persion"
                      />
                    </div>
                    <div className={cx("comment_persion-content")}>
                      <p style={{ fontWeight: "700" }}>Ngọc Lan</p>

                      <p>
                        <svg
                          width="80"
                          height="17"
                          viewBox="0 0 80 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.27563 12.421L11.4281 14.418C11.8311 14.673 12.3311 14.2935 12.2116 13.823L11.3011 10.2405C11.2754 10.1408 11.2784 10.0357 11.3097 9.93755C11.341 9.83937 11.3994 9.75202 11.4781 9.68555L14.3051 7.33305C14.6761 7.02405 14.4851 6.40755 14.0076 6.37655L10.3161 6.13655C10.2167 6.1295 10.1214 6.09436 10.0412 6.03523C9.961 5.9761 9.89925 5.89541 9.86313 5.80255L8.48613 2.33555C8.44864 2.23701 8.38208 2.15221 8.29528 2.09237C8.20849 2.03253 8.10555 2.00049 8.00013 2.00049C7.89471 2.00049 7.79177 2.03253 7.70498 2.09237C7.61818 2.15221 7.55163 2.23701 7.51413 2.33555L6.13713 5.80255C6.10109 5.8955 6.03937 5.9763 5.95916 6.03552C5.87896 6.09474 5.78358 6.12995 5.68413 6.13705L1.99263 6.37705C1.51563 6.40755 1.32363 7.02405 1.69513 7.33305L4.52213 9.68605C4.60079 9.75248 4.65911 9.83975 4.69042 9.93783C4.72173 10.0359 4.72475 10.1408 4.69913 10.2405L3.85513 13.563C3.71163 14.1275 4.31213 14.583 4.79513 14.2765L7.72513 12.421C7.80748 12.3687 7.90305 12.3409 8.00063 12.3409C8.09822 12.3409 8.19378 12.3687 8.27613 12.421H8.27563Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M24.2756 12.421L27.4281 14.418C27.8311 14.673 28.3311 14.2935 28.2116 13.823L27.3011 10.2405C27.2754 10.1408 27.2784 10.0357 27.3097 9.93755C27.341 9.83937 27.3994 9.75202 27.4781 9.68554L30.3051 7.33305C30.6761 7.02404 30.4851 6.40755 30.0076 6.37654L26.3161 6.13655C26.2167 6.12949 26.1214 6.09436 26.0412 6.03523C25.961 5.9761 25.8993 5.89541 25.8631 5.80254L24.4861 2.33555C24.4486 2.23701 24.3821 2.15221 24.2953 2.09237C24.2085 2.03253 24.1056 2.00049 24.0001 2.00049C23.8947 2.00049 23.7918 2.03253 23.705 2.09237C23.6182 2.15221 23.5516 2.23701 23.5141 2.33555L22.1371 5.80254C22.1011 5.8955 22.0394 5.9763 21.9592 6.03552C21.879 6.09474 21.7836 6.12995 21.6841 6.13704L17.9926 6.37704C17.5156 6.40754 17.3236 7.02404 17.6951 7.33305L20.5221 9.68604C20.6008 9.75248 20.6591 9.83974 20.6904 9.93783C20.7217 10.0359 20.7247 10.1408 20.6991 10.2405L19.8551 13.563C19.7116 14.1275 20.3121 14.583 20.7951 14.2765L23.7251 12.421C23.8075 12.3687 23.903 12.3409 24.0006 12.3409C24.0982 12.3409 24.1938 12.3687 24.2761 12.421H24.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M40.2756 12.421L43.4281 14.418C43.8311 14.673 44.3311 14.2935 44.2116 13.823L43.3011 10.2405C43.2754 10.1408 43.2784 10.0357 43.3097 9.93755C43.341 9.83937 43.3994 9.75202 43.4781 9.68554L46.3051 7.33305C46.6761 7.02404 46.4851 6.40755 46.0076 6.37654L42.3161 6.13655C42.2167 6.12949 42.1214 6.09436 42.0412 6.03523C41.961 5.9761 41.8993 5.89541 41.8631 5.80254L40.4861 2.33555C40.4486 2.23701 40.3821 2.15221 40.2953 2.09237C40.2085 2.03253 40.1056 2.00049 40.0001 2.00049C39.8947 2.00049 39.7918 2.03253 39.705 2.09237C39.6182 2.15221 39.5516 2.23701 39.5141 2.33555L38.1371 5.80254C38.1011 5.8955 38.0394 5.9763 37.9592 6.03552C37.879 6.09474 37.7836 6.12995 37.6841 6.13704L33.9926 6.37704C33.5156 6.40754 33.3236 7.02404 33.6951 7.33305L36.5221 9.68604C36.6008 9.75248 36.6591 9.83974 36.6904 9.93783C36.7217 10.0359 36.7247 10.1408 36.6991 10.2405L35.8551 13.563C35.7116 14.1275 36.3121 14.583 36.7951 14.2765L39.7251 12.421C39.8075 12.3687 39.903 12.3409 40.0006 12.3409C40.0982 12.3409 40.1938 12.3687 40.2761 12.421H40.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M56.2756 12.421L59.4281 14.418C59.8311 14.673 60.3311 14.2935 60.2116 13.823L59.3011 10.2405C59.2754 10.1408 59.2784 10.0357 59.3097 9.93755C59.341 9.83937 59.3994 9.75202 59.4781 9.68554L62.3051 7.33305C62.6761 7.02404 62.4851 6.40755 62.0076 6.37654L58.3161 6.13655C58.2167 6.12949 58.1214 6.09436 58.0412 6.03523C57.961 5.9761 57.8993 5.89541 57.8631 5.80254L56.4861 2.33555C56.4486 2.23701 56.3821 2.15221 56.2953 2.09237C56.2085 2.03253 56.1056 2.00049 56.0001 2.00049C55.8947 2.00049 55.7918 2.03253 55.705 2.09237C55.6182 2.15221 55.5516 2.23701 55.5141 2.33555L54.1371 5.80254C54.1011 5.8955 54.0394 5.9763 53.9592 6.03552C53.879 6.09474 53.7836 6.12995 53.6841 6.13704L49.9926 6.37704C49.5156 6.40754 49.3236 7.02404 49.6951 7.33305L52.5221 9.68604C52.6008 9.75248 52.6591 9.83974 52.6904 9.93783C52.7217 10.0359 52.7247 10.1408 52.6991 10.2405L51.8551 13.563C51.7116 14.1275 52.3121 14.583 52.7951 14.2765L55.7251 12.421C55.8075 12.3687 55.903 12.3409 56.0006 12.3409C56.0982 12.3409 56.1938 12.3687 56.2761 12.421H56.2756Z"
                            fill="#FF8A00"
                          />
                          <path
                            d="M72.2756 12.421L75.4281 14.418C75.8311 14.673 76.3311 14.2935 76.2116 13.823L75.3011 10.2405C75.2754 10.1408 75.2784 10.0357 75.3097 9.93755C75.341 9.83937 75.3994 9.75202 75.4781 9.68554L78.3051 7.33305C78.6761 7.02404 78.4851 6.40755 78.0076 6.37654L74.3161 6.13655C74.2167 6.12949 74.1214 6.09436 74.0412 6.03523C73.961 5.9761 73.8993 5.89541 73.8631 5.80254L72.4861 2.33555C72.4486 2.23701 72.3821 2.15221 72.2953 2.09237C72.2085 2.03253 72.1056 2.00049 72.0001 2.00049C71.8947 2.00049 71.7918 2.03253 71.705 2.09237C71.6182 2.15221 71.5516 2.23701 71.5141 2.33555L70.1371 5.80254C70.1011 5.8955 70.0394 5.9763 69.9592 6.03552C69.879 6.09474 69.7836 6.12995 69.6841 6.13704L65.9926 6.37704C65.5156 6.40754 65.3236 7.02404 65.6951 7.33305L68.5221 9.68604C68.6008 9.75248 68.6591 9.83974 68.6904 9.93783C68.7217 10.0359 68.7247 10.1408 68.6991 10.2405L67.8551 13.563C67.7116 14.1275 68.3121 14.583 68.7951 14.2765L71.7251 12.421C71.8075 12.3687 71.903 12.3409 72.0006 12.3409C72.0982 12.3409 72.1938 12.3687 72.2761 12.421H72.2756Z"
                            fill="#FF8A00"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                  <div className={cx("comment_time")}>2 ngày trước</div>
                </div>
                <p>Chất lương tốt, màu sắc đúng mô tả, phù hợp với giá tiền, sản phẩm ghi đầy đủ thông tin trên bao bì.</p>
              </div>
            </Box>
            <Box
              classsName={cx("content3")}
              sx={{ marginTop: { sm: "60px", xs: "30px" } }}
            >
              <Typography
                variant="h3"
                style={{}}
                sx={{
                  borderBottom: {
                    sm: "3px solid #FA58A6",
                    xs: "1px solid #FFF",
                  },
                  fontSize: { xs: "20px", sm: "25px" },
                  width: { xs: "100%", sm: "20%" },
                  fontWeight: "600",
                  margin: { sm: "40px 0", xs: "20px 0" },
                }}
              >
                ĐÁNH GIÁ
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
              >
                <p style={{ marginRight: "5px" }}>Chất lượng sản phẩm</p>
                <Typography sx={{ display: { sm: "flex", xs: "none" } }}>
                  <svg
                    width="258"
                    height="41"
                    viewBox="0 0 258 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.4986 3.58007L23.4982 3.57931C22.9462 2.46304 21.8182 2.01776 20.8766 2.01776C19.9346 2.01776 18.8093 2.46264 18.2537 3.5731L18.2537 3.57309L18.2499 3.58071L13.8554 12.4907L4.02516 13.919L4.02487 13.919C2.93506 14.0776 2.00696 14.8391 1.6601 15.9104L1.65936 15.9127C1.32107 16.9634 1.59701 18.1315 2.40602 18.9108L9.51764 25.8445L7.83828 35.633L7.83707 35.6403C7.65669 36.7241 8.09398 37.8426 9.00741 38.502C9.90018 39.1465 11.092 39.2466 12.0864 38.7167C12.0885 38.7155 12.0907 38.7144 12.0929 38.7132L20.8774 34.0992L29.6638 38.7174C29.6646 38.7178 29.6654 38.7183 29.6662 38.7187C30.112 38.9537 30.5836 39.0531 31.0331 39.0531C31.6349 39.0531 32.2301 38.8701 32.7392 38.5077L32.7478 38.5016L32.7563 38.4954C33.6561 37.8353 34.0989 36.7305 33.9175 35.6403L33.9162 35.633L32.2369 25.8445L39.3511 18.9082C40.1574 18.1239 40.4274 16.9646 40.0906 15.9161C39.7517 14.8476 38.8221 14.0778 37.7294 13.919L37.5162 15.3858L37.7294 13.919L27.8987 12.4906L23.4986 3.58007Z"
                      fill="black"
                      stroke="white"
                      stroke-width="2.96448"
                    />
                    <path
                      d="M77.5196 3.58007L77.5192 3.57931C76.9671 2.46304 75.8392 2.01776 74.8975 2.01776C73.9556 2.01776 72.8303 2.46264 72.2747 3.5731L72.2747 3.57309L72.2709 3.58071L67.8764 12.4907L58.0462 13.919L58.0459 13.919C56.9561 14.0776 56.028 14.8391 55.6811 15.9104L55.6804 15.9127C55.3421 16.9634 55.618 18.1315 56.427 18.9108L63.5386 25.8445L61.8593 35.633L61.8581 35.6403C61.6777 36.7241 62.115 37.8426 63.0284 38.502C63.9212 39.1465 65.113 39.2466 66.1074 38.7167C66.1095 38.7155 66.1117 38.7144 66.1139 38.7132L74.8984 34.0992L83.6848 38.7174C83.6856 38.7178 83.6864 38.7183 83.6872 38.7187C84.133 38.9537 84.6045 39.0531 85.0541 39.0531C85.6559 39.0531 86.2511 38.8701 86.7602 38.5077L86.7688 38.5016L86.7773 38.4954C87.6771 37.8353 88.1199 36.7305 87.9385 35.6403L87.9372 35.633L86.2579 25.8445L93.3721 18.9082C94.1784 18.1239 94.4484 16.9646 94.1116 15.9161C93.7727 14.8476 92.8431 14.0778 91.7504 13.919L91.5372 15.3858L91.7504 13.919L81.9197 12.4906L77.5196 3.58007Z"
                      fill="black"
                      stroke="white"
                      stroke-width="2.96448"
                    />
                    <path
                      d="M131.541 3.58007L131.541 3.57931C130.989 2.46304 129.861 2.01776 128.919 2.01776C127.977 2.01776 126.852 2.46264 126.296 3.5731L126.296 3.57309L126.292 3.58071L121.898 12.4907L112.068 13.919L112.067 13.919C110.978 14.0776 110.049 14.8391 109.703 15.9104L109.702 15.9127C109.364 16.9634 109.639 18.1315 110.449 18.9108L117.56 25.8445L115.881 35.633L115.88 35.6403C115.699 36.7241 116.136 37.8426 117.05 38.502C117.943 39.1465 119.134 39.2466 120.129 38.7167C120.131 38.7155 120.133 38.7144 120.135 38.7132L128.92 34.0992L137.706 38.7174C137.707 38.7178 137.708 38.7183 137.709 38.7187C138.154 38.9537 138.626 39.0531 139.076 39.0531C139.677 39.0531 140.273 38.8701 140.782 38.5077L140.79 38.5016L140.799 38.4954C141.699 37.8353 142.141 36.7305 141.96 35.6403L141.959 35.633L140.279 25.8445L147.394 18.9082C148.2 18.1239 148.47 16.9646 148.133 15.9161C147.794 14.8476 146.865 14.0778 145.772 13.919L145.559 15.3858L145.772 13.919L135.941 12.4906L131.541 3.58007Z"
                      fill="black"
                      stroke="white"
                      stroke-width="2.96448"
                    />
                    <path
                      d="M185.562 3.58007L185.562 3.57931C185.01 2.46304 183.882 2.01776 182.94 2.01776C181.998 2.01776 180.873 2.46264 180.317 3.5731L180.317 3.57309L180.313 3.58071L175.919 12.4907L166.089 13.919L166.088 13.919C164.999 14.0776 164.07 14.8391 163.724 15.9104L163.723 15.9127C163.385 16.9634 163.66 18.1315 164.469 18.9108L171.581 25.8445L169.902 35.633L169.901 35.6403C169.72 36.7241 170.157 37.8426 171.071 38.502C171.964 39.1465 173.155 39.2466 174.15 38.7167C174.152 38.7155 174.154 38.7144 174.156 38.7132L182.941 34.0992L191.727 38.7174C191.728 38.7178 191.729 38.7183 191.73 38.7187C192.175 38.9537 192.647 39.0531 193.097 39.0531C193.698 39.0531 194.294 38.8701 194.803 38.5077L194.811 38.5016L194.82 38.4954C195.72 37.8353 196.162 36.7305 195.981 35.6403L195.98 35.633L194.3 25.8445L201.415 18.9082C202.221 18.1239 202.491 16.9646 202.154 15.9161C201.815 14.8476 200.886 14.0778 199.793 13.919L199.58 15.3858L199.793 13.919L189.962 12.4906L185.562 3.58007Z"
                      fill="black"
                      stroke="white"
                      stroke-width="2.96448"
                    />
                    <path
                      d="M239.584 3.58007L239.583 3.57931C239.031 2.46304 237.903 2.01776 236.962 2.01776C236.02 2.01776 234.894 2.46264 234.339 3.5731L234.339 3.57309L234.335 3.58071L229.94 12.4907L220.11 13.919L220.11 13.919C219.02 14.0776 218.092 14.8391 217.745 15.9104L217.744 15.9127C217.406 16.9634 217.682 18.1315 218.491 18.9108L225.603 25.8445L223.923 35.633L223.922 35.6403C223.742 36.7241 224.179 37.8426 225.092 38.502C225.985 39.1465 227.177 39.2466 228.171 38.7167C228.173 38.7155 228.176 38.7144 228.178 38.7132L236.962 34.0992L245.749 38.7174C245.75 38.7178 245.75 38.7183 245.751 38.7187C246.197 38.9537 246.669 39.0531 247.118 39.0531C247.72 39.0531 248.315 38.8701 248.824 38.5077L248.833 38.5016L248.841 38.4954C249.741 37.8353 250.184 36.7305 250.002 35.6403L250.001 35.633L248.322 25.8445L255.436 18.9082C256.242 18.1239 256.512 16.9646 256.176 15.9161C255.837 14.8476 254.907 14.0778 253.814 13.919L253.601 15.3858L253.814 13.919L243.984 12.4906L239.584 3.58007Z"
                      fill="black"
                      stroke="white"
                      stroke-width="2.96448"
                    />
                  </svg>
                </Typography>
                <Typography sx={{ display: { sm: "none", xs: "flex" } }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.345 14.9012L14.2857 17.3974C14.7894 17.7162 15.4144 17.2418 15.265 16.6537L14.1269 12.1756C14.0948 12.0508 14.0985 11.9195 14.1376 11.7968C14.1767 11.6741 14.2497 11.5649 14.3482 11.4818L17.8819 8.54119C18.3457 8.15494 18.1069 7.38431 17.51 7.34556L12.8957 7.04556C12.7714 7.03675 12.6522 6.99283 12.552 6.91891C12.4517 6.845 12.3746 6.74414 12.3294 6.62806L10.6082 2.29431C10.5613 2.17115 10.4781 2.06514 10.3696 1.99034C10.2611 1.91554 10.1324 1.87549 10.0007 1.87549C9.86887 1.87549 9.74021 1.91554 9.63171 1.99034C9.52322 2.06514 9.44002 2.17115 9.39315 2.29431L7.6719 6.62806C7.62685 6.74425 7.5497 6.84525 7.44944 6.91928C7.34919 6.99331 7.22996 7.03732 7.10565 7.04619L2.49128 7.34618C1.89503 7.38431 1.65503 8.15494 2.1194 8.54119L5.65315 11.4824C5.75147 11.5655 5.82438 11.6746 5.86352 11.7972C5.90265 11.9198 5.90642 12.0509 5.8744 12.1756L4.8194 16.3287C4.64003 17.0343 5.39065 17.6037 5.9944 17.2206L9.6569 14.9012C9.75984 14.8357 9.8793 14.801 10.0013 14.801C10.1233 14.801 10.2427 14.8357 10.3457 14.9012H10.345Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.345 14.9012L14.2857 17.3974C14.7894 17.7162 15.4144 17.2418 15.265 16.6537L14.1269 12.1756C14.0948 12.0508 14.0985 11.9195 14.1376 11.7968C14.1767 11.6741 14.2497 11.5649 14.3482 11.4818L17.8819 8.54119C18.3457 8.15494 18.1069 7.38431 17.51 7.34556L12.8957 7.04556C12.7714 7.03675 12.6522 6.99283 12.552 6.91891C12.4517 6.845 12.3746 6.74414 12.3294 6.62806L10.6082 2.29431C10.5613 2.17115 10.4781 2.06514 10.3696 1.99034C10.2611 1.91554 10.1324 1.87549 10.0007 1.87549C9.86887 1.87549 9.74021 1.91554 9.63171 1.99034C9.52322 2.06514 9.44002 2.17115 9.39315 2.29431L7.6719 6.62806C7.62685 6.74425 7.5497 6.84525 7.44944 6.91928C7.34919 6.99331 7.22996 7.03732 7.10565 7.04619L2.49128 7.34618C1.89503 7.38431 1.65503 8.15494 2.1194 8.54119L5.65315 11.4824C5.75147 11.5655 5.82438 11.6746 5.86352 11.7972C5.90265 11.9198 5.90642 12.0509 5.8744 12.1756L4.8194 16.3287C4.64003 17.0343 5.39065 17.6037 5.9944 17.2206L9.6569 14.9012C9.75984 14.8357 9.8793 14.801 10.0013 14.801C10.1233 14.801 10.2427 14.8357 10.3457 14.9012H10.345Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.345 14.9012L14.2857 17.3974C14.7894 17.7162 15.4144 17.2418 15.265 16.6537L14.1269 12.1756C14.0948 12.0508 14.0985 11.9195 14.1376 11.7968C14.1767 11.6741 14.2497 11.5649 14.3482 11.4818L17.8819 8.54119C18.3457 8.15494 18.1069 7.38431 17.51 7.34556L12.8957 7.04556C12.7714 7.03675 12.6522 6.99283 12.552 6.91891C12.4517 6.845 12.3746 6.74414 12.3294 6.62806L10.6082 2.29431C10.5613 2.17115 10.4781 2.06514 10.3696 1.99034C10.2611 1.91554 10.1324 1.87549 10.0007 1.87549C9.86887 1.87549 9.74021 1.91554 9.63171 1.99034C9.52322 2.06514 9.44002 2.17115 9.39315 2.29431L7.6719 6.62806C7.62685 6.74425 7.5497 6.84525 7.44944 6.91928C7.34919 6.99331 7.22996 7.03732 7.10565 7.04619L2.49128 7.34618C1.89503 7.38431 1.65503 8.15494 2.1194 8.54119L5.65315 11.4824C5.75147 11.5655 5.82438 11.6746 5.86352 11.7972C5.90265 11.9198 5.90642 12.0509 5.8744 12.1756L4.8194 16.3287C4.64003 17.0343 5.39065 17.6037 5.9944 17.2206L9.6569 14.9012C9.75984 14.8357 9.8793 14.801 10.0013 14.801C10.1233 14.801 10.2427 14.8357 10.3457 14.9012H10.345Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.345 14.9012L14.2857 17.3974C14.7894 17.7162 15.4144 17.2418 15.265 16.6537L14.1269 12.1756C14.0948 12.0508 14.0985 11.9195 14.1376 11.7968C14.1767 11.6741 14.2497 11.5649 14.3482 11.4818L17.8819 8.54119C18.3457 8.15494 18.1069 7.38431 17.51 7.34556L12.8957 7.04556C12.7714 7.03675 12.6522 6.99283 12.552 6.91891C12.4517 6.845 12.3746 6.74414 12.3294 6.62806L10.6082 2.29431C10.5613 2.17115 10.4781 2.06514 10.3696 1.99034C10.2611 1.91554 10.1324 1.87549 10.0007 1.87549C9.86887 1.87549 9.74021 1.91554 9.63171 1.99034C9.52322 2.06514 9.44002 2.17115 9.39315 2.29431L7.6719 6.62806C7.62685 6.74425 7.5497 6.84525 7.44944 6.91928C7.34919 6.99331 7.22996 7.03732 7.10565 7.04619L2.49128 7.34618C1.89503 7.38431 1.65503 8.15494 2.1194 8.54119L5.65315 11.4824C5.75147 11.5655 5.82438 11.6746 5.86352 11.7972C5.90265 11.9198 5.90642 12.0509 5.8744 12.1756L4.8194 16.3287C4.64003 17.0343 5.39065 17.6037 5.9944 17.2206L9.6569 14.9012C9.75984 14.8357 9.8793 14.801 10.0013 14.801C10.1233 14.801 10.2427 14.8357 10.3457 14.9012H10.345Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.345 14.9012L14.2857 17.3974C14.7894 17.7162 15.4144 17.2418 15.265 16.6537L14.1269 12.1756C14.0948 12.0508 14.0985 11.9195 14.1376 11.7968C14.1767 11.6741 14.2497 11.5649 14.3482 11.4818L17.8819 8.54119C18.3457 8.15494 18.1069 7.38431 17.51 7.34556L12.8957 7.04556C12.7714 7.03675 12.6522 6.99283 12.552 6.91891C12.4517 6.845 12.3746 6.74414 12.3294 6.62806L10.6082 2.29431C10.5613 2.17115 10.4781 2.06514 10.3696 1.99034C10.2611 1.91554 10.1324 1.87549 10.0007 1.87549C9.86887 1.87549 9.74021 1.91554 9.63171 1.99034C9.52322 2.06514 9.44002 2.17115 9.39315 2.29431L7.6719 6.62806C7.62685 6.74425 7.5497 6.84525 7.44944 6.91928C7.34919 6.99331 7.22996 7.03732 7.10565 7.04619L2.49128 7.34618C1.89503 7.38431 1.65503 8.15494 2.1194 8.54119L5.65315 11.4824C5.75147 11.5655 5.82438 11.6746 5.86352 11.7972C5.90265 11.9198 5.90642 12.0509 5.8744 12.1756L4.8194 16.3287C4.64003 17.0343 5.39065 17.6037 5.9944 17.2206L9.6569 14.9012C9.75984 14.8357 9.8793 14.801 10.0013 14.801C10.1233 14.801 10.2427 14.8357 10.3457 14.9012H10.345Z"
                      fill="black"
                    />
                  </svg>
                </Typography>
              </div>
              <p style={{ paddingBottom: "20px" }}>Ý kiến của bạn</p>
              <Box sx={{ display: { sm: "none", xs: "flex" } }}>
                <textarea
                  name="feedback"
                  id="feadback"
                  cols="46"
                  rows="10"
                  style={{ borderRadius: "10px", outline: "none" }}
                ></textarea>
              </Box>
              <Box sx={{ display: { sm: "flex", xs: "none" } }}>
                <textarea
                  name="feedback"
                  id="feadback"
                  cols="100"
                  rows="10"
                  style={{ borderRadius: "10px", outline: "none" }}
                ></textarea>
              </Box>

              <Button
                sx={{
                  padding: "10px 70px",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              >
                Gửi đánh giá
              </Button>
            </Box>
          </Grid>
          <Grid item sm={5}>
            <Typography
              variant="h3"
              style={{}}
              sx={{
                borderBottom: { sm: "3px solid #FA58A6", xs: "1px solid #FFF" },
                fontSize: { xs: "20px", sm: "25px" },
                width: { xs: "100%", sm: "68%" },
                fontWeight: "600",
                margin: { sm: "40px 0", xs: "20px 0" },
              }}
            >
              SẢN PHẨM LIÊN QUAN
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "grid" } }}>
              <div className={cx("product_connect")}>
                <Link to="">
                  <div className={cx("product_img")}>
                    <img src="https://i.postimg.cc/sxhtfRST/Rectangle-85-14.png" alt="product" />
                  </div>
                  <div className={cx("product_content")}>
                    <p className={cx("product_name")}>
                    Serum Vichy Mineral 89 Probiotic
                    </p>
                    <ul className={cx("product_content-list")}>
                      <li className={cx("product_content-item")}>730.000đ</li>
                      <li className={cx("product_content-item")}>
                        <button>
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="18.7072"
                              cy="18.7072"
                              r="18.7072"
                              fill="#F2F2F2"
                            />
                            <path
                              d="M15.1667 16.8333H12.6667L11 26H26L24.3333 16.8333H21.8333M15.1667 16.8333V14.3333C15.1667 12.4924 16.6591 11 18.5 11V11C20.3409 11 21.8333 12.4924 21.8333 14.3333V16.8333M15.1667 16.8333H21.8333M15.1667 16.8333V19.3333M21.8333 16.8333V19.3333"
                              stroke="#1A1A1A"
                              stroke-width="1.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div
                className={cx("product_connect")}
                style={{ marginTop: "20px" }}
              >
                <Link to="">
                  <div className={cx("product_img")}>
                    <img src="https://i.postimg.cc/fLBrwRJ7/Rectangle-85-16.png" alt="product" />
                  </div>
                  <div className={cx("product_content")}>
                    <p className={cx("product_name")}>
                      URIAGE Depiderm Serum Correcteur Eclat
                    </p>
                    <ul className={cx("product_content-list")}>
                      <li className={cx("product_content-item")}>730.000đ</li>
                      <li className={cx("product_content-item")}>
                        <button>
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="18.7072"
                              cy="18.7072"
                              r="18.7072"
                              fill="#F2F2F2"
                            />
                            <path
                              d="M15.1667 16.8333H12.6667L11 26H26L24.3333 16.8333H21.8333M15.1667 16.8333V14.3333C15.1667 12.4924 16.6591 11 18.5 11V11C20.3409 11 21.8333 12.4924 21.8333 14.3333V16.8333M15.1667 16.8333H21.8333M15.1667 16.8333V19.3333M21.8333 16.8333V19.3333"
                              stroke="#1A1A1A"
                              stroke-width="1.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div
                className={cx("product_connect")}
                style={{ marginTop: "20px" }}
              >
                <Link to="">
                  <div className={cx("product_img")}>
                    <img src="https://i.postimg.cc/gjtQK2pc/Rectangle-85-15.png" alt="product" />
                  </div>
                  <div
                    className={cx("product_content")}
                    style={{ marginTop: "20px" }}
                  >
                    <p className={cx("product_name")}>
                      URIAGE Depiderm Serum Correcteur Eclat
                    </p>
                    <ul className={cx("product_content-list")}>
                      <li className={cx("product_content-item")}>730.000đ</li>
                      <li className={cx("product_content-item")}>
                        <button>
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="18.7072"
                              cy="18.7072"
                              r="18.7072"
                              fill="#F2F2F2"
                            />
                            <path
                              d="M15.1667 16.8333H12.6667L11 26H26L24.3333 16.8333H21.8333M15.1667 16.8333V14.3333C15.1667 12.4924 16.6591 11 18.5 11V11C20.3409 11 21.8333 12.4924 21.8333 14.3333V16.8333M15.1667 16.8333H21.8333M15.1667 16.8333V19.3333M21.8333 16.8333V19.3333"
                              stroke="#1A1A1A"
                              stroke-width="1.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <Product />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
