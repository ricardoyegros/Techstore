import React from 'react';
import Layout from "../components/Layout/Layout"
import Pagina_1 from '../components/UserDashboard/HomeUserDash';
import UserDashoardMenu from '../components/UserDashboard/UserDashoardMenu';

function UserDashboard({children}) {
  return (
    <>
    <Layout>
    <UserDashoardMenu>
      {children}
    </UserDashoardMenu>
    </Layout>
      </>
  )
}

export default UserDashboard;