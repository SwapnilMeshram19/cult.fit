import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Loginmodal } from "./LoginModal";
import { Signupmodal } from "./Signupmodal";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { CartModel } from "./CartModal";
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

export const Navbar = () => {
  const { token } = useSelector((state) => state.login);
  const [open,setOpen]=useState(false);
  let tok = window.localStorage.getItem("culttoken");
  const { test} = useSelector((state) => state.tests);
  
  return (
    <div style={{position:"relative"}}>
      <div
        style={{
          height: "30px",
          backgroundColor: "#15171C",
          width: "98%",
          display: "flex",
          overflow: "auto",
          paddingTop: "15px",
          paddingBottom: "15px",
          paddingRight: "30px",
          paddingLeft: "30px",
          justifyContent: "space-between",
          position: "fixed",
          zIndex:"2",
        }}
      >
        <NavLink to="/">
        <img
          style={{ height: "30px", width: "120px" }}
          alt=""
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
        />
        </NavLink>
        <div
          style={{
            width: "fitContent",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <NavLink to="/fitness" style={{ textDecoration: "none" }}>
            <Button
              variant="solid"
              sx={{
                color: "lightgrey",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "transparent",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                marginRight: "2vw",
                "&:hover": {
                  color: "#f9f9f9",
                  backgroundColor: "transparent",
                },
              }}
              disableRipple={true}
            >
              Fitness
            </Button>
          </NavLink>
          <NavLink
            to="/care/diagnostic-tests"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="solid"
              sx={{
                color: "lightgrey",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "transparent",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                marginLeft: "2vw",
                marginRight: "2vw",
                "&:hover": {
                  color: "#f9f9f9",
                  backgroundColor: "transparent",
                },
              }}
              disableRipple={true}
            >
              Care
            </Button>
          </NavLink>
          <Button
            variant="solid"
            sx={{
              color: "lightgrey",
              fontSize: "18px",
              fontWeight: "600",
              backgroundColor: "transparent",
              padding: "0px",
              marginTop: "0px",
              marginBottom: "0px",
              marginLeft: "2vw",
              marginRight: "2vw",

              "&:hover": {
                color: "#f9f9f9",
                backgroundColor: "transparent",
              },
            }}
            disableRipple={true}
          >
            Mind
          </Button>
          <Button
            variant="solid"
            sx={{
              color: "lightgrey",
              fontSize: "18px",
              fontWeight: "600",
              backgroundColor: "transparent",
              padding: "0px",
              marginTop: "0px",
              marginBottom: "0px",
              marginLeft: "2vw",
              "&:hover": {
                color: "#f9f9f9",
                backgroundColor: "transparent",
              },
            }}
            disableRipple={true}
          >
            Store
          </Button>
        </div>
        <div style={{ marginRight: "1vw", display: "flex" }}>
          {!token && !tok ? (
            <>
              <Signupmodal />
              <Loginmodal />
            </>
          ) : (
            <>
              <NavLink to="/profile">
                <AccountCircleOutlinedIcon
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    marginRight: "20px",
                  }}
                />
              </NavLink>

              <Box variant="div" sx={{position:"relative"}}>
                <AddShoppingCartIcon
                   sx={{
                  color: "white",
                  fontSize: "30px",
                  cursor:"pointer"
                  }}
                  onClick={()=>setOpen(!open)}

                />
            
              </Box>
           

              
            </>
          )}
        </div>
        
        
      </div>
      {open?
          <CartModel open={open} setOpen={setOpen}/>:""}
    </div>
  );
};
