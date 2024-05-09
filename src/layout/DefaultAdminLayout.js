import React from 'react'

import AdminSidebar from 'src/components/defaultadmin/AdminSidebar'
import AdminToolSidebar from 'src/components/defaultadmin/AdminToolSidebar'
import AdminHeader from 'src/components/defaultadmin/AdminHeader'

const DefaultLayout = () => {
  return (
    <div>
      <AdminSidebar />
      <AdminToolSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AdminHeader />
      </div>
    </div>
  )
}

export default DefaultLayout
