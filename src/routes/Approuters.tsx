import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageSuspanse } from "@feedback/PageSuspanse/PageSuspanse";
// Layout
const MainLayout = lazy(() => import("@layout/mainlayout/MainLayout"));
const ProfileLayout = lazy(() => import("@layout/ProfileLayout/ProfileLayout"));

// Error
import Error from "@pages/Error";

// Pages
const Home = lazy(() => import("@pages/Home"));
const Products = lazy(() => import("@pages/Products"));
const About = lazy(() => import("@pages/About"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Categores = lazy(() => import("@pages/Categores"));
const Cart = lazy(() => import("@pages/Cart"));
const Whislist = lazy(() => import("@pages/Whislist"));
const Account = lazy(() => import("@pages/Account"));
const Orders = lazy(() => import("@pages/Orders"));

// Commponets
import AuthProtectPage from "@componets/common/AuthProtect/AuthProtectPage";

export const Approuters = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="vh-100 d-flex flex-column align-items-center">
              <h5 style={{ marginTop: "10%" }} className="m-auto ">
                Loading Please Wait...
              </h5>
            </div>
          }
        >
          <MainLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspanse>
              <Home />
            </PageSuspanse>
          ),
        },
        {
          path: "categores",
          element: (
            <PageSuspanse>
              <Categores />
            </PageSuspanse>
          ),
        },
        {
          path: "cart",
          element: (
            <PageSuspanse>
              <Cart />
            </PageSuspanse>
          ),
        },
        {
          path: "whislist",
          element: (
            <AuthProtectPage>
              <PageSuspanse>
                <Whislist />
              </PageSuspanse>
            </AuthProtectPage>
          ),
        },
        {
          path: "/categories/products/:prefix",
          element: (
            <PageSuspanse>
              <Products />
            </PageSuspanse>
          ),
          loader: ({ params }) => {
            if (
              typeof params.prefix !== "string" ||
              !/^[a-z]+$/i.test(params.prefix)
            ) {
              throw new Response("Bad Request", {
                statusText: "Category not Found",
                status: 400,
              });
            }
            return true;
          },
        },
        {
          path: "about-us",
          element: (
            <PageSuspanse>
              <About />
            </PageSuspanse>
          ),
        },
        {
          path: "login",
          element: (
            <PageSuspanse>
              <Login />
            </PageSuspanse>
          ),
        },
        {
          path: "register",
          element: (
            <PageSuspanse>
              <Register />
            </PageSuspanse>
          ),
        },
        {
          path: "Profile",
          element: (
            <AuthProtectPage>
              <PageSuspanse>
                <ProfileLayout />
              </PageSuspanse>
            </AuthProtectPage>
          ),
          children: [
            {
              index: true,
              element: (
                <PageSuspanse>
                  <Account />
                </PageSuspanse>
              ),
            },
            {
              path: "orders",
              element: (
                <PageSuspanse>
                  <Orders />
                </PageSuspanse>
              ),
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
