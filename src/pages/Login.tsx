import Heading from "@componets/common/heading/Heading";
import { Col, Row, Form, Button, Alert, Spinner } from "react-bootstrap";
import { Input } from "@componets/Form";
import { Navigate } from "react-router-dom";
import { useLogin } from "@hooks/useLogin";
export const Login = () => {
  const {
    error,
    loading,
    accessToken,
    register,
    handleSubmit,
    errors,
    submitForm,
    searchParams,
  } = useLogin();
  if (accessToken) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login-required" && (
            <Alert variant="success">
              You need to login to view this content
            </Alert>
          )}
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your Account Successfully Created ,Please Login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              register={register}
              error={errors.email?.message}
              label="Email"
              name="email"
            />
            <Input
              register={register}
              error={errors.password?.message}
              label="Password"
              name="password"
              type="password"
            />
            <Button variant="primary" type="submit" className="mb-2">
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

export default Login;
