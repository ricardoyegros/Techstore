import React from 'react';
import Layout from "../components/Layout/Layout"
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