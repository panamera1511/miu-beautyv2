import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Grid } from "@mui/material";

import personUrl from "core/assets/images/Image (1).png";

export default function FeedBack() {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
        
          <Grid item xs={12} sm={4}>
            <div className="border_feedback" style={{ boxShadow:
                          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",padding: "12px"}}>
              <div className="feedback_img">
                <div className="feedback_img-item">
                  <img src={personUrl} alt="feedback" />
                  <div className="feedback_img-persion">
                    <h4 style={{color: "#555"}}>Hồng Hạnh</h4>
                    <p style={{ fontSize: "13px" }}>Khách hàng</p>
                  </div>
                </div>
                <p>
                  <svg
                    width="104"
                    height="21"
                    viewBox="0 0 104 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3444 15.1014L14.285 17.5976C14.7887 17.9164 15.4137 17.442 15.2644 16.8539L14.1262 12.3758C14.0941 12.251 14.0978 12.1197 14.1369 11.997C14.1761 11.8743 14.249 11.7651 14.3475 11.682L17.8812 8.74138C18.345 8.35513 18.1062 7.5845 17.5094 7.54575L12.895 7.24575C12.7707 7.23694 12.6516 7.19302 12.5513 7.11911C12.4511 7.0452 12.3739 6.94433 12.3287 6.82825L10.6075 2.4945C10.5606 2.37134 10.4774 2.26533 10.3689 2.19054C10.2604 2.11574 10.1318 2.07568 9.99998 2.07568C9.8682 2.07568 9.73953 2.11574 9.63104 2.19054C9.52254 2.26533 9.43935 2.37134 9.39248 2.4945L7.67123 6.82825C7.62617 6.94445 7.54902 7.04544 7.44877 7.11947C7.34852 7.1935 7.22929 7.23751 7.10498 7.24638L2.4906 7.54638C1.89436 7.5845 1.65436 8.35513 2.11873 8.74138L5.65248 11.6826C5.7508 11.7657 5.82371 11.8748 5.86284 11.9974C5.90198 12.12 5.90575 12.2511 5.87373 12.3758L4.81873 16.5289C4.63935 17.2345 5.38998 17.8039 5.99373 17.4208L9.65623 15.1014C9.75917 15.0359 9.87862 15.0012 10.0006 15.0012C10.1226 15.0012 10.242 15.0359 10.345 15.1014H10.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M31.3444 15.1014L35.285 17.5976C35.7887 17.9164 36.4137 17.442 36.2644 16.8539L35.1262 12.3758C35.0941 12.251 35.0978 12.1197 35.1369 11.997C35.1761 11.8743 35.249 11.7651 35.3475 11.682L38.8812 8.74138C39.345 8.35513 39.1062 7.5845 38.5094 7.54575L33.895 7.24575C33.7707 7.23694 33.6516 7.19302 33.5513 7.11911C33.4511 7.0452 33.3739 6.94433 33.3287 6.82825L31.6075 2.4945C31.5606 2.37134 31.4774 2.26533 31.3689 2.19054C31.2604 2.11574 31.1318 2.07568 31 2.07568C30.8682 2.07568 30.7395 2.11574 30.631 2.19054C30.5225 2.26533 30.4393 2.37134 30.3925 2.4945L28.6712 6.82825C28.6262 6.94445 28.549 7.04544 28.4488 7.11947C28.3485 7.1935 28.2293 7.23751 28.105 7.24638L23.4906 7.54638C22.8944 7.5845 22.6544 8.35513 23.1187 8.74138L26.6525 11.6826C26.7508 11.7657 26.8237 11.8748 26.8628 11.9974C26.902 12.12 26.9058 12.2511 26.8737 12.3758L25.8187 16.5289C25.6394 17.2345 26.39 17.8039 26.9937 17.4208L30.6562 15.1014C30.7592 15.0359 30.8786 15.0012 31.0006 15.0012C31.1226 15.0012 31.242 15.0359 31.345 15.1014H31.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M52.3444 15.1014L56.285 17.5976C56.7888 17.9164 57.4138 17.442 57.2644 16.8539L56.1263 12.3758C56.0941 12.251 56.0978 12.1197 56.137 11.997C56.1761 11.8743 56.2491 11.7651 56.3475 11.682L59.8813 8.74138C60.345 8.35513 60.1063 7.5845 59.5094 7.54575L54.895 7.24575C54.7708 7.23694 54.6516 7.19302 54.5514 7.11911C54.4511 7.0452 54.3739 6.94433 54.3288 6.82825L52.6075 2.4945C52.5607 2.37134 52.4775 2.26533 52.369 2.19054C52.2605 2.11574 52.1318 2.07568 52 2.07568C51.8683 2.07568 51.7396 2.11574 51.6311 2.19054C51.5226 2.26533 51.4394 2.37134 51.3925 2.4945L49.6713 6.82825C49.6262 6.94445 49.5491 7.04544 49.4488 7.11947C49.3486 7.1935 49.2293 7.23751 49.105 7.24638L44.4907 7.54638C43.8944 7.5845 43.6544 8.35513 44.1188 8.74138L47.6525 11.6826C47.7509 11.7657 47.8238 11.8748 47.8629 11.9974C47.902 12.12 47.9058 12.2511 47.8738 12.3758L46.8188 16.5289C46.6394 17.2345 47.39 17.8039 47.9938 17.4208L51.6563 15.1014C51.7592 15.0359 51.8787 15.0012 52.0007 15.0012C52.1226 15.0012 52.2421 15.0359 52.345 15.1014H52.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M73.3444 15.1014L77.285 17.5976C77.7888 17.9164 78.4138 17.442 78.2644 16.8539L77.1263 12.3758C77.0941 12.251 77.0978 12.1197 77.137 11.997C77.1761 11.8743 77.2491 11.7651 77.3475 11.682L80.8813 8.74138C81.345 8.35513 81.1063 7.5845 80.5094 7.54575L75.895 7.24575C75.7708 7.23694 75.6516 7.19302 75.5514 7.11911C75.4511 7.0452 75.3739 6.94433 75.3288 6.82825L73.6075 2.4945C73.5607 2.37134 73.4775 2.26533 73.369 2.19054C73.2605 2.11574 73.1318 2.07568 73 2.07568C72.8683 2.07568 72.7396 2.11574 72.6311 2.19054C72.5226 2.26533 72.4394 2.37134 72.3925 2.4945L70.6713 6.82825C70.6262 6.94445 70.5491 7.04544 70.4488 7.11947C70.3486 7.1935 70.2293 7.23751 70.105 7.24638L65.4907 7.54638C64.8944 7.5845 64.6544 8.35513 65.1188 8.74138L68.6525 11.6826C68.7509 11.7657 68.8238 11.8748 68.8629 11.9974C68.902 12.12 68.9058 12.2511 68.8738 12.3758L67.8188 16.5289C67.6394 17.2345 68.39 17.8039 68.9938 17.4208L72.6563 15.1014C72.7592 15.0359 72.8787 15.0012 73.0007 15.0012C73.1226 15.0012 73.2421 15.0359 73.345 15.1014H73.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M94.3444 15.1014L98.285 17.5976C98.7888 17.9164 99.4138 17.442 99.2644 16.8539L98.1263 12.3758C98.0941 12.251 98.0978 12.1197 98.137 11.997C98.1761 11.8743 98.2491 11.7651 98.3475 11.682L101.881 8.74138C102.345 8.35513 102.106 7.5845 101.509 7.54575L96.895 7.24575C96.7708 7.23694 96.6516 7.19302 96.5514 7.11911C96.4511 7.0452 96.3739 6.94433 96.3288 6.82825L94.6075 2.4945C94.5607 2.37134 94.4775 2.26533 94.369 2.19054C94.2605 2.11574 94.1318 2.07568 94 2.07568C93.8683 2.07568 93.7396 2.11574 93.6311 2.19054C93.5226 2.26533 93.4394 2.37134 93.3925 2.4945L91.6713 6.82825C91.6262 6.94445 91.5491 7.04544 91.4488 7.11947C91.3486 7.1935 91.2293 7.23751 91.105 7.24638L86.4907 7.54638C85.8944 7.5845 85.6544 8.35513 86.1188 8.74138L89.6525 11.6826C89.7509 11.7657 89.8238 11.8748 89.8629 11.9974C89.902 12.12 89.9058 12.2511 89.8738 12.3758L88.8188 16.5289C88.6394 17.2345 89.39 17.8039 89.9938 17.4208L93.6563 15.1014C93.7592 15.0359 93.8787 15.0012 94.0007 15.0012C94.1226 15.0012 94.2421 15.0359 94.345 15.1014H94.3444Z"
                      fill="#FF8A00"
                    />
                  </svg>
                </p>
              </div>
              <div className="feedback_content">
                Các sản phẩm của MiBeauty uy tín, chính hãng, mình đã mua và sử
                dụng rất nhiều, giao hàng cũng nhanh nữa.
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="border_feedback" style={{ boxShadow:
                          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",padding: "12px"}}>
              <div className="feedback_img">
                <div className="feedback_img-item">
                  <img src="https://i.postimg.cc/250yn0Lk/Image-12.png" alt="feedback" />
                  <div className="feedback_img-persion">
                    <h4 style={{color: "#555"}}>Văn Hải</h4>
                    <p style={{ fontSize: "13px" }}>Khách hàng</p>
                  </div>
                </div>
                <p>
                  <svg
                    width="104"
                    height="21"
                    viewBox="0 0 104 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3444 15.1014L14.285 17.5976C14.7887 17.9164 15.4137 17.442 15.2644 16.8539L14.1262 12.3758C14.0941 12.251 14.0978 12.1197 14.1369 11.997C14.1761 11.8743 14.249 11.7651 14.3475 11.682L17.8812 8.74138C18.345 8.35513 18.1062 7.5845 17.5094 7.54575L12.895 7.24575C12.7707 7.23694 12.6516 7.19302 12.5513 7.11911C12.4511 7.0452 12.3739 6.94433 12.3287 6.82825L10.6075 2.4945C10.5606 2.37134 10.4774 2.26533 10.3689 2.19054C10.2604 2.11574 10.1318 2.07568 9.99998 2.07568C9.8682 2.07568 9.73953 2.11574 9.63104 2.19054C9.52254 2.26533 9.43935 2.37134 9.39248 2.4945L7.67123 6.82825C7.62617 6.94445 7.54902 7.04544 7.44877 7.11947C7.34852 7.1935 7.22929 7.23751 7.10498 7.24638L2.4906 7.54638C1.89436 7.5845 1.65436 8.35513 2.11873 8.74138L5.65248 11.6826C5.7508 11.7657 5.82371 11.8748 5.86284 11.9974C5.90198 12.12 5.90575 12.2511 5.87373 12.3758L4.81873 16.5289C4.63935 17.2345 5.38998 17.8039 5.99373 17.4208L9.65623 15.1014C9.75917 15.0359 9.87862 15.0012 10.0006 15.0012C10.1226 15.0012 10.242 15.0359 10.345 15.1014H10.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M31.3444 15.1014L35.285 17.5976C35.7887 17.9164 36.4137 17.442 36.2644 16.8539L35.1262 12.3758C35.0941 12.251 35.0978 12.1197 35.1369 11.997C35.1761 11.8743 35.249 11.7651 35.3475 11.682L38.8812 8.74138C39.345 8.35513 39.1062 7.5845 38.5094 7.54575L33.895 7.24575C33.7707 7.23694 33.6516 7.19302 33.5513 7.11911C33.4511 7.0452 33.3739 6.94433 33.3287 6.82825L31.6075 2.4945C31.5606 2.37134 31.4774 2.26533 31.3689 2.19054C31.2604 2.11574 31.1318 2.07568 31 2.07568C30.8682 2.07568 30.7395 2.11574 30.631 2.19054C30.5225 2.26533 30.4393 2.37134 30.3925 2.4945L28.6712 6.82825C28.6262 6.94445 28.549 7.04544 28.4488 7.11947C28.3485 7.1935 28.2293 7.23751 28.105 7.24638L23.4906 7.54638C22.8944 7.5845 22.6544 8.35513 23.1187 8.74138L26.6525 11.6826C26.7508 11.7657 26.8237 11.8748 26.8628 11.9974C26.902 12.12 26.9058 12.2511 26.8737 12.3758L25.8187 16.5289C25.6394 17.2345 26.39 17.8039 26.9937 17.4208L30.6562 15.1014C30.7592 15.0359 30.8786 15.0012 31.0006 15.0012C31.1226 15.0012 31.242 15.0359 31.345 15.1014H31.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M52.3444 15.1014L56.285 17.5976C56.7888 17.9164 57.4138 17.442 57.2644 16.8539L56.1263 12.3758C56.0941 12.251 56.0978 12.1197 56.137 11.997C56.1761 11.8743 56.2491 11.7651 56.3475 11.682L59.8813 8.74138C60.345 8.35513 60.1063 7.5845 59.5094 7.54575L54.895 7.24575C54.7708 7.23694 54.6516 7.19302 54.5514 7.11911C54.4511 7.0452 54.3739 6.94433 54.3288 6.82825L52.6075 2.4945C52.5607 2.37134 52.4775 2.26533 52.369 2.19054C52.2605 2.11574 52.1318 2.07568 52 2.07568C51.8683 2.07568 51.7396 2.11574 51.6311 2.19054C51.5226 2.26533 51.4394 2.37134 51.3925 2.4945L49.6713 6.82825C49.6262 6.94445 49.5491 7.04544 49.4488 7.11947C49.3486 7.1935 49.2293 7.23751 49.105 7.24638L44.4907 7.54638C43.8944 7.5845 43.6544 8.35513 44.1188 8.74138L47.6525 11.6826C47.7509 11.7657 47.8238 11.8748 47.8629 11.9974C47.902 12.12 47.9058 12.2511 47.8738 12.3758L46.8188 16.5289C46.6394 17.2345 47.39 17.8039 47.9938 17.4208L51.6563 15.1014C51.7592 15.0359 51.8787 15.0012 52.0007 15.0012C52.1226 15.0012 52.2421 15.0359 52.345 15.1014H52.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M73.3444 15.1014L77.285 17.5976C77.7888 17.9164 78.4138 17.442 78.2644 16.8539L77.1263 12.3758C77.0941 12.251 77.0978 12.1197 77.137 11.997C77.1761 11.8743 77.2491 11.7651 77.3475 11.682L80.8813 8.74138C81.345 8.35513 81.1063 7.5845 80.5094 7.54575L75.895 7.24575C75.7708 7.23694 75.6516 7.19302 75.5514 7.11911C75.4511 7.0452 75.3739 6.94433 75.3288 6.82825L73.6075 2.4945C73.5607 2.37134 73.4775 2.26533 73.369 2.19054C73.2605 2.11574 73.1318 2.07568 73 2.07568C72.8683 2.07568 72.7396 2.11574 72.6311 2.19054C72.5226 2.26533 72.4394 2.37134 72.3925 2.4945L70.6713 6.82825C70.6262 6.94445 70.5491 7.04544 70.4488 7.11947C70.3486 7.1935 70.2293 7.23751 70.105 7.24638L65.4907 7.54638C64.8944 7.5845 64.6544 8.35513 65.1188 8.74138L68.6525 11.6826C68.7509 11.7657 68.8238 11.8748 68.8629 11.9974C68.902 12.12 68.9058 12.2511 68.8738 12.3758L67.8188 16.5289C67.6394 17.2345 68.39 17.8039 68.9938 17.4208L72.6563 15.1014C72.7592 15.0359 72.8787 15.0012 73.0007 15.0012C73.1226 15.0012 73.2421 15.0359 73.345 15.1014H73.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M94.3444 15.1014L98.285 17.5976C98.7888 17.9164 99.4138 17.442 99.2644 16.8539L98.1263 12.3758C98.0941 12.251 98.0978 12.1197 98.137 11.997C98.1761 11.8743 98.2491 11.7651 98.3475 11.682L101.881 8.74138C102.345 8.35513 102.106 7.5845 101.509 7.54575L96.895 7.24575C96.7708 7.23694 96.6516 7.19302 96.5514 7.11911C96.4511 7.0452 96.3739 6.94433 96.3288 6.82825L94.6075 2.4945C94.5607 2.37134 94.4775 2.26533 94.369 2.19054C94.2605 2.11574 94.1318 2.07568 94 2.07568C93.8683 2.07568 93.7396 2.11574 93.6311 2.19054C93.5226 2.26533 93.4394 2.37134 93.3925 2.4945L91.6713 6.82825C91.6262 6.94445 91.5491 7.04544 91.4488 7.11947C91.3486 7.1935 91.2293 7.23751 91.105 7.24638L86.4907 7.54638C85.8944 7.5845 85.6544 8.35513 86.1188 8.74138L89.6525 11.6826C89.7509 11.7657 89.8238 11.8748 89.8629 11.9974C89.902 12.12 89.9058 12.2511 89.8738 12.3758L88.8188 16.5289C88.6394 17.2345 89.39 17.8039 89.9938 17.4208L93.6563 15.1014C93.7592 15.0359 93.8787 15.0012 94.0007 15.0012C94.1226 15.0012 94.2421 15.0359 94.345 15.1014H94.3444Z"
                      fill="#FF8A00"
                    />
                  </svg>
                </p>
              </div>
              <div className="feedback_content">
              MiBeauty rất đa dạng sản phẩm và giá cả hợp lý, chất lượng sản phẩm tốt, thanh toán nhanh chóng.
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="border_feedback" style={{ boxShadow:
                          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",padding: "12px"}}>
              <div className="feedback_img">
                <div className="feedback_img-item">
                  <img src="https://i.postimg.cc/SsKVmQMy/Image-13.png" alt="feedback" />
                  <div className="feedback_img-persion">
                    <h4 style={{color: "#555"}}>Ngọc Anh</h4>
                    <p style={{ fontSize: "13px" }}>Khách hàng</p>
                  </div>
                </div>
                <p>
                  <svg
                    width="104"
                    height="21"
                    viewBox="0 0 104 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3444 15.1014L14.285 17.5976C14.7887 17.9164 15.4137 17.442 15.2644 16.8539L14.1262 12.3758C14.0941 12.251 14.0978 12.1197 14.1369 11.997C14.1761 11.8743 14.249 11.7651 14.3475 11.682L17.8812 8.74138C18.345 8.35513 18.1062 7.5845 17.5094 7.54575L12.895 7.24575C12.7707 7.23694 12.6516 7.19302 12.5513 7.11911C12.4511 7.0452 12.3739 6.94433 12.3287 6.82825L10.6075 2.4945C10.5606 2.37134 10.4774 2.26533 10.3689 2.19054C10.2604 2.11574 10.1318 2.07568 9.99998 2.07568C9.8682 2.07568 9.73953 2.11574 9.63104 2.19054C9.52254 2.26533 9.43935 2.37134 9.39248 2.4945L7.67123 6.82825C7.62617 6.94445 7.54902 7.04544 7.44877 7.11947C7.34852 7.1935 7.22929 7.23751 7.10498 7.24638L2.4906 7.54638C1.89436 7.5845 1.65436 8.35513 2.11873 8.74138L5.65248 11.6826C5.7508 11.7657 5.82371 11.8748 5.86284 11.9974C5.90198 12.12 5.90575 12.2511 5.87373 12.3758L4.81873 16.5289C4.63935 17.2345 5.38998 17.8039 5.99373 17.4208L9.65623 15.1014C9.75917 15.0359 9.87862 15.0012 10.0006 15.0012C10.1226 15.0012 10.242 15.0359 10.345 15.1014H10.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M31.3444 15.1014L35.285 17.5976C35.7887 17.9164 36.4137 17.442 36.2644 16.8539L35.1262 12.3758C35.0941 12.251 35.0978 12.1197 35.1369 11.997C35.1761 11.8743 35.249 11.7651 35.3475 11.682L38.8812 8.74138C39.345 8.35513 39.1062 7.5845 38.5094 7.54575L33.895 7.24575C33.7707 7.23694 33.6516 7.19302 33.5513 7.11911C33.4511 7.0452 33.3739 6.94433 33.3287 6.82825L31.6075 2.4945C31.5606 2.37134 31.4774 2.26533 31.3689 2.19054C31.2604 2.11574 31.1318 2.07568 31 2.07568C30.8682 2.07568 30.7395 2.11574 30.631 2.19054C30.5225 2.26533 30.4393 2.37134 30.3925 2.4945L28.6712 6.82825C28.6262 6.94445 28.549 7.04544 28.4488 7.11947C28.3485 7.1935 28.2293 7.23751 28.105 7.24638L23.4906 7.54638C22.8944 7.5845 22.6544 8.35513 23.1187 8.74138L26.6525 11.6826C26.7508 11.7657 26.8237 11.8748 26.8628 11.9974C26.902 12.12 26.9058 12.2511 26.8737 12.3758L25.8187 16.5289C25.6394 17.2345 26.39 17.8039 26.9937 17.4208L30.6562 15.1014C30.7592 15.0359 30.8786 15.0012 31.0006 15.0012C31.1226 15.0012 31.242 15.0359 31.345 15.1014H31.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M52.3444 15.1014L56.285 17.5976C56.7888 17.9164 57.4138 17.442 57.2644 16.8539L56.1263 12.3758C56.0941 12.251 56.0978 12.1197 56.137 11.997C56.1761 11.8743 56.2491 11.7651 56.3475 11.682L59.8813 8.74138C60.345 8.35513 60.1063 7.5845 59.5094 7.54575L54.895 7.24575C54.7708 7.23694 54.6516 7.19302 54.5514 7.11911C54.4511 7.0452 54.3739 6.94433 54.3288 6.82825L52.6075 2.4945C52.5607 2.37134 52.4775 2.26533 52.369 2.19054C52.2605 2.11574 52.1318 2.07568 52 2.07568C51.8683 2.07568 51.7396 2.11574 51.6311 2.19054C51.5226 2.26533 51.4394 2.37134 51.3925 2.4945L49.6713 6.82825C49.6262 6.94445 49.5491 7.04544 49.4488 7.11947C49.3486 7.1935 49.2293 7.23751 49.105 7.24638L44.4907 7.54638C43.8944 7.5845 43.6544 8.35513 44.1188 8.74138L47.6525 11.6826C47.7509 11.7657 47.8238 11.8748 47.8629 11.9974C47.902 12.12 47.9058 12.2511 47.8738 12.3758L46.8188 16.5289C46.6394 17.2345 47.39 17.8039 47.9938 17.4208L51.6563 15.1014C51.7592 15.0359 51.8787 15.0012 52.0007 15.0012C52.1226 15.0012 52.2421 15.0359 52.345 15.1014H52.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M73.3444 15.1014L77.285 17.5976C77.7888 17.9164 78.4138 17.442 78.2644 16.8539L77.1263 12.3758C77.0941 12.251 77.0978 12.1197 77.137 11.997C77.1761 11.8743 77.2491 11.7651 77.3475 11.682L80.8813 8.74138C81.345 8.35513 81.1063 7.5845 80.5094 7.54575L75.895 7.24575C75.7708 7.23694 75.6516 7.19302 75.5514 7.11911C75.4511 7.0452 75.3739 6.94433 75.3288 6.82825L73.6075 2.4945C73.5607 2.37134 73.4775 2.26533 73.369 2.19054C73.2605 2.11574 73.1318 2.07568 73 2.07568C72.8683 2.07568 72.7396 2.11574 72.6311 2.19054C72.5226 2.26533 72.4394 2.37134 72.3925 2.4945L70.6713 6.82825C70.6262 6.94445 70.5491 7.04544 70.4488 7.11947C70.3486 7.1935 70.2293 7.23751 70.105 7.24638L65.4907 7.54638C64.8944 7.5845 64.6544 8.35513 65.1188 8.74138L68.6525 11.6826C68.7509 11.7657 68.8238 11.8748 68.8629 11.9974C68.902 12.12 68.9058 12.2511 68.8738 12.3758L67.8188 16.5289C67.6394 17.2345 68.39 17.8039 68.9938 17.4208L72.6563 15.1014C72.7592 15.0359 72.8787 15.0012 73.0007 15.0012C73.1226 15.0012 73.2421 15.0359 73.345 15.1014H73.3444Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M94.3444 15.1014L98.285 17.5976C98.7888 17.9164 99.4138 17.442 99.2644 16.8539L98.1263 12.3758C98.0941 12.251 98.0978 12.1197 98.137 11.997C98.1761 11.8743 98.2491 11.7651 98.3475 11.682L101.881 8.74138C102.345 8.35513 102.106 7.5845 101.509 7.54575L96.895 7.24575C96.7708 7.23694 96.6516 7.19302 96.5514 7.11911C96.4511 7.0452 96.3739 6.94433 96.3288 6.82825L94.6075 2.4945C94.5607 2.37134 94.4775 2.26533 94.369 2.19054C94.2605 2.11574 94.1318 2.07568 94 2.07568C93.8683 2.07568 93.7396 2.11574 93.6311 2.19054C93.5226 2.26533 93.4394 2.37134 93.3925 2.4945L91.6713 6.82825C91.6262 6.94445 91.5491 7.04544 91.4488 7.11947C91.3486 7.1935 91.2293 7.23751 91.105 7.24638L86.4907 7.54638C85.8944 7.5845 85.6544 8.35513 86.1188 8.74138L89.6525 11.6826C89.7509 11.7657 89.8238 11.8748 89.8629 11.9974C89.902 12.12 89.9058 12.2511 89.8738 12.3758L88.8188 16.5289C88.6394 17.2345 89.39 17.8039 89.9938 17.4208L93.6563 15.1014C93.7592 15.0359 93.8787 15.0012 94.0007 15.0012C94.1226 15.0012 94.2421 15.0359 94.345 15.1014H94.3444Z"
                      fill="#FF8A00"
                    />
                  </svg>
                </p>
              </div>
              <div className="feedback_content">
              Shop đóng gói hàng cẩn thận, giao hàng nhanh, giá cả rất phải chăng, sản phẩm tốt, lần sau sẽ tiếp tục ủng hộ.
              </div>
            </div>
          </Grid>
        </Grid>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          <svg
            width="80"
            height="9"
            viewBox="0 0 80 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4.2002C8 6.40933 6.20914 8.2002 4 8.2002C1.79086 8.2002 0 6.40933 0 4.2002C0 1.99106 1.79086 0.200195 4 0.200195C6.20914 0.200195 8 1.99106 8 4.2002Z"
              fill="#FDABD2"
            />
            <path
              d="M24 4.2002C24 6.40933 22.2091 8.2002 20 8.2002C17.7909 8.2002 16 6.40933 16 4.2002C16 1.99106 17.7909 0.200195 20 0.200195C22.2091 0.200195 24 1.99106 24 4.2002Z"
              fill="#FDABD2"
            />
            <path
              d="M32 4.2002C32 1.99106 33.7909 0.200195 36 0.200195H44C46.2091 0.200195 48 1.99106 48 4.2002C48 6.40933 46.2091 8.2002 44 8.2002H36C33.7909 8.2002 32 6.40933 32 4.2002Z"
              fill="#FA58A6"
            />
            <path
              d="M64 4.2002C64 6.40933 62.2091 8.2002 60 8.2002C57.7909 8.2002 56 6.40933 56 4.2002C56 1.99106 57.7909 0.200195 60 0.200195C62.2091 0.200195 64 1.99106 64 4.2002Z"
              fill="#FDABD2"
            />
            <path
              d="M80 4.2002C80 6.40933 78.2091 8.2002 76 8.2002C73.7909 8.2002 72 6.40933 72 4.2002C72 1.99106 73.7909 0.200195 76 0.200195C78.2091 0.200195 80 1.99106 80 4.2002Z"
              fill="#FDABD2"
            />
          </svg>
        </p>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    max-width: 100%;
  }
  .feedback_content {
    padding: 20px;
    color: #4d4d4d;
    font-size: 14px;
  }
  .feedback_name {
    font-size: 14px;
    margin-left: 2px;
  }
  .feedback_content-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .feedback_content-item {
    list-style: none;
    font-weight: 600;
    margin: 0 5px;
  }
  button {
    border: none;
    border-radius: 100px;
  }
  button:hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
  .border_feedback {
  }
  .border_feedback:hover {
  }
  .feedback_like {
    position: absolute;
    top: 3%;
    right: 3%;
  }
  .feedback_img {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .feedback_img-item {
    display: flex;
  }
  .feedback_img-persion {
    margin-left: 12px;
  }
`;
