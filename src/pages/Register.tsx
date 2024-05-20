import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import Heading from "@componets/common/heading/Heading";
import { useRegister } from "@hooks/useRegister";
import { Input } from "@componets/Form";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const {
    error,
    accessToken,
    loading,
    register,
    handleSubmit,
    emailAvailble,
    submitForm,
    onBlurHandler,
    errors,
  } = useRegister();
  if (accessToken) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Heading title="User Registrtion" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              register={register}
              label="FirstName"
              name="firstName"
              error={errors.firstName?.message}
            />
            <Input
              register={register}
              label="LastName"
              name="lastName"
              error={errors.lastName?.message}
            />
            <Input
              register={register}
              label="Email Address"
              name="email"
              error={
                errors.email?.message
                  ? errors.email?.message
                  : emailAvailble === "NotAvailable"
                  ? "This email is already in use"
                  : emailAvailble === "Faild "
                  ? "Error From The Server"
                  : ""
              }
              onBlur={onBlurHandler}
              formText={
                emailAvailble === "Checking"
                  ? "We're Currently Checking the availability of this email address.Please Wait A moment"
                  : ""
              }
              success={
                emailAvailble === "Available"
                  ? "This email is avaliable for use."
                  : ""
              }
              disapled={emailAvailble === "Checking" ? true : false}
            />
            <Input
              register={register}
              label="Password"
              type="password"
              name="password"
              error={errors.password?.message}
            />
            <Input
              register={register}
              label="ConfirmPassword"
              type="password"
              name="confirmPassword"
              error={errors.confirmPassword?.message}
            />
            <Button
              disabled={
                emailAvailble === "Checking"
                  ? true
                  : false || emailAvailble === "NotAvailable"
                  ? true
                  : false
              }
              variant="primary"
              type="submit"
              className="mb-2"
            >
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner>
                  Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>
            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
