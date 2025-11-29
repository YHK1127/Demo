import { Routes } from '@angular/router';
import { ServiceUser } from '../service-user/service-user';
import { PromotionCode } from '../promotion-code/promotion-code';
import { RebateCode } from '../rebate-code/rebate-code';
import { Logout } from '../logout/logout';
import { Login } from '../login/login';
import { AuthService } from '../auth-service';


export const routes: Routes = [
    {
        path:'',component:Login
    },
    {
        path:'ServiceUser',component:ServiceUser,canActivate:[AuthService]
    },
    {
        path:'PromotionCode',component:PromotionCode,canActivate:[AuthService]
    },
    {
        path:'RebateCode',component:RebateCode,canActivate:[AuthService]
    },
    {
        path:'Logout',component:Logout,canActivate:[AuthService]
    }
];
