import {
  PrivateRoutes, PrivateRoutesDash,
} from "../../routes/privates-routes/private-user-routes";
import {MdManageAccounts} from "react-icons/md"
import {BiPurchaseTag} from "react-icons/bi"
const classForIcons = "text-2xl block mr-2 float-left"
export const MenuOptions = [
    {
      buttonName: "Cuenta",
      Links: `/${PrivateRoutes.USER}/${PrivateRoutes.DASHBOARD}`,
      icon: <MdManageAccounts className={classForIcons}/>
    },
    {
      buttonName: "Ordenes",
      Links: `/${PrivateRoutes.USER}/${PrivateRoutesDash.ORDERS}`,
      icon: <BiPurchaseTag className={classForIcons}/>
    },
  ];