import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Router, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';


const defaultPage = React.lazy(() => import('./app/pages/custommer-page/default-pages/defaultPage'));
const LoginNghiaPage = React.lazy(() => import('./app/pages/login-page/LoginPage'));
const LoginPage = React.lazy(() => import('./app/components/register/login/Login'));
const Register = React.lazy(() => import('./app/components/register/register/Register'));
const AdminRouter = React.lazy(() => import('./app/components/admin/AdminRouter'));
const Page404 = React.lazy(() => import('./app/components/Page404'));
const PayPal = React.lazy(() => import('./app/components/custommer/body/paypal/PayPal'));
const Order = React.lazy(() => import('./app/components/custommer/body/paypal/Order'));
const PageHistory = React.lazy(() => import('./app/components/custommer/body/paypal/history/History'));
const UpImages = React.lazy(() => import("./app/components/custommer/body/upload-img/UpImages"));
const Homeasd = React.lazy(() =>
  import("./app/components/custommer/body/upload-img/Homeasd")
);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
function App() {
  const [role, setRole] = useState('');
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      var decoded = jwtDecode(token);
      setRole(decoded.role);
      if (role === 'admin') {
        console.log("Đã đăng nhập");
      }
    }
  }, []);
  return (
    <HashRouter>
      <ScrollToTop>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path={"/loginNghia"} exact component={LoginNghiaPage} />
            <Route path={"/login"} exact component={LoginPage} />
            <Route path={"/register"} exact component={Register} />
            <Route
              path={"/admin"}
              component={role === "admin" ? AdminRouter : Page404}
            />
            <Route path={"/paypal"} component={PayPal} />
            <Route path={"/order"} component={Order} />
            <Route path={"/history"} component={PageHistory} />
            <Route path={"/upimg"} component={UpImages} />
            <Route path={"/test"} component={Homeasd} />
            <Route path={"/"} component={defaultPage} />
          </Switch>
        </React.Suspense>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;



