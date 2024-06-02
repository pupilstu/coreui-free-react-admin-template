import React from 'react'
import AdminSidebar from 'src/components/defaultadmin/AdminSidebar'
import AdminHeader from 'src/components/defaultadmin/AdminHeader'

const DefaultAdminLayout = () => {
  return (
    <div>
      <AdminSidebar />
      <div className="wrapper">
        <AdminHeader />
      </div>
    </div>
  )
}

export default DefaultAdminLayout
