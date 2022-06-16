import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { postUsersRequest } from "../../redux/Login/loginAction";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  // console.log(props);
  const navigate = useNavigate();

  const initialValues = {
    username: "kminchelle",
    password: "0lelplR",
  };

  const LoginValidation = Yup.object().shape({
    username: Yup.string().required("Please enter a valid username"),
    password: Yup.string().required("Please enter your password"),
  });
  const onSubmit = (values) => {
    // console.log(values);

    props.postUsersRequest({
      ...values,
    });
    navigate("/productList");
  };
  // console.log("loggedInUser",props.loggedInUser);
  return (
    <Grid>
      <Paper
        sx={{
          padding: "20px",
          height: "auto",
          width: 340,
          margin: "10%  auto 0 auto",
        }}
      >
        <Grid align="center">
          <Avatar sx={{ backgroundColor: "#1bbd7e" }}>
            <LockIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={LoginValidation}
        >
          {(props) => (
            <Form>
              {/* {console.log(props)} */}

              <Field
                as={TextField}
                label="Username"
                name="username"
                placeholder="Enter your user"
                fullWidth
                required
                sx={{ marginBottom: "15px" }}
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="Enter Password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ margin: "8px 0" }}
                fullWidth
                required
                // disabled={props.loginUser}
                // onClick={() =>  dispatch(postUsersRequest())}
              >
                {/* {props.loginUser ? "Loading" : "Login"}
               { console.log("button",props.loginUser ? "Loading" : "Login")} */}
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};
const mapStateToProps = ({ login }) => ({
  loggedInUser: login.loggedInUser,
  loginUser: login.loginUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      postUsersRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
