import AuthLayout from "../../layouts/AuthLayout";
import { AuthForm, LoadingSpinner } from "../../components/shared";
import { Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { apiProtected } from "../../utils/api";
import { notify } from "../../utils/notify";
import { useNavigate } from "react-router-dom";
import React from "react";

interface FormData {
  email: string;
  seed: number;
  password: string;
  confirmPassword: string;
}
const ResetPassPage = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      setBtnLoading(true);
      const response = await apiProtected.post("/Users/Reset", data);
      console.log(response);
      notify({
        type: "success",
        message: "Password has been successfully changed",
      });
      navigate("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      notify({
        type: "error",
        message: error.response.data.message,
      });
    } finally {
      setBtnLoading(false);
    }
  };
  return (
    <AuthLayout bg="1">
      <AuthForm>
        <h1>Reset Password</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <span className="field-name d-inline-block mt-3">E-mail</span>
          <InputGroup className="mb-2 position-relative">
            <Form.Control
              placeholder="Enter your E-mail"
              className="w-100 px-0 pb-3 border-0 border-bottom border-bottom-primary rounded-0 bg-transparent"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%=-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid E-mail !",
                },
              })}
            />
            <InputGroup.Text
              className="bg-transparent text-white border-0 position-absolute top-50 end-0 translate-middle-y cursor-pointer"
              style={{ zIndex: 10 }}
            ></InputGroup.Text>
          </InputGroup>
          {errors.email && (
            <div className="alert alert-danger py-1 border-0">
              {errors.email.message}
            </div>
          )}

          <span className="field-name d-inline-block mt-3">
            Otp Verfication
          </span>
          <InputGroup className="mb-2 position-relative">
            <Form.Control
              placeholder="Enter Your New Password"
              aria-label="Password"
              className="w-100 px-0 pb-3 border-0 border-bottom border-bottom-primary rounded-0 bg-transparent"
              {...register("seed", {
                required: "OTP is required",
              })}
            />
            <InputGroup.Text
              className="bg-transparent text-white border-0 position-absolute top-50 end-0 translate-middle-y cursor-pointer"
              style={{ zIndex: 10 }}
            ></InputGroup.Text>
          </InputGroup>
          {errors.seed && (
            <div className="alert alert-danger py-1 border-0">
              {errors.seed.message}
            </div>
          )}

          <span className="field-name d-inline-block mt-3">New Password</span>
          <InputGroup className="mb-2 position-relative">
            <Form.Control
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter Your Confirm Password"
              aria-label="Password"
              className="w-100 px-0 pb-3 border-0 border-bottom border-bottom-primary rounded-0 bg-transparent"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <InputGroup.Text
              className="bg-transparent text-white border-0 position-absolute top-50 end-0 translate-middle-y cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
              style={{ zIndex: 10 }}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </InputGroup.Text>
          </InputGroup>
          {errors.password && (
            <div className="alert alert-danger py-1 border-0">
              {errors.password.message}
            </div>
          )}
          <span className="field-name d-inline-block mt-3">
            Confirm New Password
          </span>
          <InputGroup className="mb-2 position-relative">
            <Form.Control
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter Your Confirm Password"
              aria-label="Password"
              className="w-100 px-0 pb-3 border-0 border-bottom border-bottom-primary rounded-0 bg-transparent"
              {...register("confirmPassword", {
                required: "confirmPassword is required",
                validate: (value: string) => {
                  if (watch("password") != value) {
                    return "Password do not match";
                  }
                },
              })}
            />
            <InputGroup.Text
              className="bg-transparent text-white border-0 position-absolute top-50 end-0 translate-middle-y cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ zIndex: 10 }}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </InputGroup.Text>
          </InputGroup>
          {errors.confirmPassword && (
            <div className="alert alert-danger py-1 border-0">
              {errors.confirmPassword.message}
            </div>
          )}
          <button
            type="submit"
            className="d-block btn submit-btn w-75 mt-5 mx-auto rounded-5 py-2 text-white"
          >
            {btnLoading ? <LoadingSpinner loadingTxt="Save" /> : "Save"}
          </button>
        </form>
      </AuthForm>
    </AuthLayout>
  );
};

export default ResetPassPage;
