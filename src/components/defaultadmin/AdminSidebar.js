import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logo } from 'src/assets/brand/logo'
import 'src/scss/defaultadmin/_sidebar.scss'

const AdminSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position={'fixed'}
      placement={'start'}
      visible={sidebarShow}
      size={'lg'}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <CIcon
            customClassName={'sidebar-brand-full'}
            icon={logo}
            size={'custom'}
            height={32}
          ></CIcon>
        </CSidebarBrand>
        <CCloseButton
          className="d-table-cell"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        />
      </CSidebarHeader>
      <CSidebarFooter></CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AdminSidebar)
