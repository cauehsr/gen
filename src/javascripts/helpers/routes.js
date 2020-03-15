import Home from 'javascripts/pages/home';
import ManageCoupon from 'javascripts/pages/manageCoupon';
import EditCoupon from 'javascripts/pages/editCoupon';
import ApplyCoupons from 'javascripts/pages/applyCoupons';
import CreatedCoupon from 'javascripts/pages/createdCoupon';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/gerenciar-cupons',
    component: ManageCoupon,
    exact: true
  },
  {
    path: '/novo-cupon',
    component: CreatedCoupon,
    exact: true
  },
  {
    path: '/show/:id',
    component: EditCoupon,
    exact: true
  },
  {
    path: '/aplicar-cupons',
    component: ApplyCoupons,
    exact: true
  }
];

export default Routes;
