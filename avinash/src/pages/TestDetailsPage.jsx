import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import testSvg from "../components/logo/tests.svg";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { LabTestBar } from "../components/LabTestBar";
import { useEffect } from "react";
import axios from "axios";

export const TestDetailsPage = () => {
    const testData = JSON.parse(localStorage.getItem("labTest"));
    const testids=(testData.test).map((ele => ele.replace(/'/g,'"')))
    let arrayIds=[];
    console.log(testids)
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8058/test/?ids=${testids}`
    })
      .then((res) =>console.log(res))
      .catch((error) => console.log(error));
  }, [testids]);

  
  return (
    <Box variant="div">
      <LabTestBar />
      <Box
        variant="div"
        sx={{
          width: "90%",
          display: "flex",
          gap: "30px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <Box variant="div" sx={{ width: "40%", marginLeft: "40px" }}>
          <Card sx={{ maxWidth: "500px", boxShadow: "0 3px 5px #d3d3d3" }}>
            <CardMedia
              component="img"
              height="auto"
              image={testData.coverImage}
              alt={testData.title}
              sx={{ objectFit: "fill" }}
            />
          </Card>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              textAlign: "left",
              color: "rgb(136,142,158)",
              display: "flex",
              justifyItems: "center",
            }}
          >
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                cursor: "pointer",
                fontWeight: "100",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Home
            </Typography>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "23px", justifyItems: "center" }}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                cursor: "pointer",
                fontWeight: "100",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Care
            </Typography>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "23px", justifyItems: "center" }}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                cursor: "pointer",
                fontWeight: "100",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
             Diagnostic Tests
            </Typography>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "23px", justifyItems: "center" }}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                color: "rgb(0,0,82)",
                fontWeight: "100",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              {testData.title}
            </Typography>
          </Box>
          <Box variant="div" sx={{ marginTop: "20px" }}>
            <Card
              sx={{
                minWidth: 275,
                textAlign: "left",
                boxShadow: "0px 3px 6px 2px #d3d3d3",
              }}
            >
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "700", letterSpacing: "1px" }}
                >
                  {testData.title}
                </Typography>
                <Box variant="div" sx={{ display: "flex" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "400",
                      color: "#6f737d",
                      letterSpacing: "1.2px",
                      textDecoration: "line-through",
                    }}
                  >
                    {"\u20B9"}
                    {testData.price}
                  </Typography>
                  &nbsp;
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "700" }}
                  >
                    {"\u20B9"} {testData.offerPrice}
                  </Typography>
                </Box>
              </CardContent>
              <CardContent sx={{ marginTop: "-8px" }}>
                <Typography sx={{}} color="text.secondary">
                  {testData.Details}
                </Typography>
              </CardContent>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box sx={{}}>
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <img src={testSvg} width="16px"  alt="testsvg"/>

                    <Typography sx={{}}>2 Tests</Typography>
                  </Box>
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: "16px" }} />

                    <Typography>Report ready in {testData.report}</Typography>
                  </Box>
                </Box>
                <CardActions>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "rgb(251,58,89)",
                      borderRadius: "30px",
                      fontSize: "16px",
                      fontWeigth: "800",
                      padding: "5px 30px",
                      "&:hover": {
                        backgroundColor: "rgb(251,58,89)",
                      },
                    }}
                  >
                    ADD
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Box>
          <Box
            variant="div"
            sx={{
              backgroundColor: "rgb(235,243,255)",
              border: "1px solid rgb(201,221,255)",
              display: "flex",
              alignItems:"center",
              gap:"10px",
              padding: "10px",
              borderRadius:"10px",
              marginTop: "50px",
            }}
          >
            <LocalOfferIcon />
            <Typography sx={{}} color="text.secondary">
              Get extra 10% instant discount using card during payment
            </Typography>
            <Typography variant="div" sx={{textDecoration:"underline", cursor:"pointer"}}>
            T&C
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
