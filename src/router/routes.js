// @ts-ignore
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
// @ts-ignore
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
// @ts-ignore
import Dashboard from "@/pages/Dashboard.vue";
// @ts-ignore
// @ts-ignore

// @ts-ignore
import Icons from "@/pages/Icons.vue";
// @ts-ignore
import TableList from "@/pages/TableList.vue";
import Createstaff from "../pages/Staff/CreateStaff.vue";
import EditStaff from "../pages/Staff/Editstaff.vue";
import Liststaff from "../pages/Staff/liststaff.vue";
import Detailstaff from "../pages/Staff/DetailStaff.vue";
import Addlandlord from "../pages/Landlords/Addlandlord.vue";
import Editlandlord from "../pages/Landlords/Editlandlord.vue";
import DetailLandlord from "../pages/Landlords/detaillandlord.vue";
import Listlanlord  from "../pages/Landlords/listLandlords.vue";
import landlordLeases from "../pages/Landlords/landlordLeases.vue";
import landlordproperties from "../pages/Landlords/Landlordproperties.vue";
//import AddTenant from "../pages/Tenant/addTenant.vue";
import ListTenant from "../pages/Tenant/listTenant.vue";
import EditTenant from "../pages/Tenant/EditTenant.vue";
import DetailTenant from "../pages/Tenant/TenantDetail.vue";
import TenantLeases from "../pages/Tenant/TenanntLeases.vue";
import CreateProperty from "../pages/property/Addproperty.vue";
import DetailProperty from "../pages/property/DetailProperty.vue";
import EditProperty from "../pages/property/EditProperty.vue";
import ListProperty from "../pages/property/ListProperty.vue";
import ListLeases from "../pages/Leases/ListLeases.vue";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },

      {
         path:'createstaff',
         name:'createstaff',
         component:Createstaff
      },
      {
        path:'Editstaff',
        name:'Editstaff',
        component:EditStaff
      },
      {
        path:'Detailstaff',
        name:'Detailstaff',
        component:Detailstaff

      },
      {
        path:'ListLeases',
        name:'ListLeases',
        component:ListLeases

      },
      {
        path:'Liststaff',
        name:'Liststaff',
        component:Liststaff
      },{
        path:'Addlandloard',
        name:"Addlandlord",
        component:Addlandlord

      },
      {
        path:'Editlandlord',
        name:'Editlandlord',
        component:Editlandlord

      },
      {
        path:'ListLandlord',
        name:'ListLandlord',
        componet:Listlanlord
      },
      {
        path:'DetailLandlord',
        name:"DetailLandlord",
        component:DetailLandlord

      },
      {
        path:'landlordleases',
        name:'landlordleases',
        component:landlordLeases
      },
      {
        path:'landlordproperties',
        name:'landlordproperties',
        component:landlordproperties
      },


      {
        path:'EditTenant',
        name:'EditTenant',
        component:EditTenant
      },
      {
        path:'ListTenant',
        name:'ListTenant',
        component:ListTenant
      },
      {
        path:'TenantDetail',
        name:'TenantDetail',
        component:DetailTenant
      },
      {
        path:'TenantLeases',
        name:'TenantLeases',
        component:TenantLeases
      },
      {
        path:'CreateProperty',
        name:'CreateProperty',
        component:CreateProperty
      },
      {
        path:'Editproperty',
        name:'EditProperty',
        component:EditProperty
      },
      {
        path:'DetailProperty',
        name:'Detailproperty',
        component:DetailProperty
      },
      {
        path:'ListProperty',
        name:'Listproperty',
        component:ListProperty
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },




      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
