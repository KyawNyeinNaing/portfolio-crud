import { useState, useEffect, createRef } from "react"
import { useRouter } from "next/router"
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar"
import "perfect-scrollbar/css/perfect-scrollbar.css"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"

// core components
import Navbar from "../components/admin/Navbars/Navbar"
import Sidebar from "../components/admin/Sidebar/Sidebar"
import ChangeTheme from "../components/admin/FixedPlugin/FixedPlugin"

import routes from "../routes"

import styles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle"
import footerStyles from "assets/jss/nextjs-material-dashboard/components/footerStyle.js"

import bgImage from "assets/img/sidebar-2.jpg"
import { Copyright } from "@/components"

let ps

const Admin = ({ children, ...rest }) => {
  // used for checking current route
  const router = useRouter()
  // styles
  const useStyles = makeStyles(styles)
  const useFooterStyles = makeStyles(footerStyles)
  const classes = useStyles()
  const footerClasses = useFooterStyles()

  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef()
  // states and functions
  const [image, setImage] = useState(bgImage)
  const [color, setColor] = useState("white")
  const [fixedClasses, setFixedClasses] = useState("dropdown show")
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleImageClick = (image) => {
    setImage(image)
  }
  const handleColorClick = (color) => {
    setColor(color)
  }
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show")
    } else {
      setFixedClasses("dropdown")
    }
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const getRoute = () => {
    return router.pathname !== "/admin/maps"
  }
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false)
    }
  }
  // initialize and destroy the PerfectScrollbar plugin
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      })
      document.body.style.overflow = "hidden"
    }
    window.addEventListener("resize", resizeFunction)
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy()
      }
      window.removeEventListener("resize", resizeFunction)
    }
  }, [mainPanel])
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={
          {
            f_text: 'T',
            s_text: 'hetPai',
            path: '/admin/dashboard'
          }
        }
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />

        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{children}</div>
          </div>
        ) : (
          <div className={classes.map}>{children}</div>
        )}

        {getRoute() ?
          <footer>
            <Copyright data='Thet Pai' bgColor='white' />
          </footer>
          :
          null
        }

        <ChangeTheme
          bgColor={color}
          bgImages={image}
          fixedClasses={fixedClasses}
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          handleFixedClick={handleFixedClick}
        />
      </div>
    </div>
  )
}

export default Admin
