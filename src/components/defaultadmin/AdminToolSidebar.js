import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CCol,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import 'src/scss/defaultadmin/_theme.scss'
import 'src/scss/defaultadmin/_toolsidebar.scss'

const AdminSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarToolUnfoldable)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position={'fixed'}
      placement={'end'}
      visible={true}
      size={'sm'}
      unfoldable={unfoldable}
      prefix={'default-admin-tool'}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <CCol className={'sidebar-brand-full'}>Tools</CCol>
          {/*<CCol className={'sidebar-brand-narrow'}>T</CCol>*/}
        </CSidebarBrand>
        <CSidebarToggler
          className={'tool-sidebar-toggler'}
          onClick={() => {
            dispatch({ type: 'set', sidebarToolUnfoldable: !unfoldable })
          }}
        />
      </CSidebarHeader>
    </CSidebar>
  )
}

export default React.memo(AdminSidebar)
