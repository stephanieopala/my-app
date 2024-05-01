import { Suspense, lazy } from "react";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("./pages/Home")));
const SignIn = Loadable(lazy(() => import("./pages/SignIn")));
const SignUp = Loadable(lazy(() => import("./pages/SignUp")));
const CoinDetails = Loadable(lazy(() => import("./pages/CoinDetails")))

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: ':id',
    element: <CoinDetails />
  },
  {
    path: 'signup',
    element: <SignUp />
  },
  {
    path: 'signin',
    element: <SignIn />
  },
]

export default routes;