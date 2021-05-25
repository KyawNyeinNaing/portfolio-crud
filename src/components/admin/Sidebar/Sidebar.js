/*eslint-disable*/
import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

// core components
import AdminNavbarLinks from '../../admin/Navbars/AdminNavbarLinks'
import styles from 'assets/jss/nextjs-material-dashboard/components/sidebarStyle.js'

const Logo = styled.a`
  &.portfolio_nav_logo {
    .portfolio_nav_logo_name {
      color: #ffffff;
      span {
        color: #000000
      }
    }
  }
`

const Sidebar = props => {
  const { color, logo, image, logoText, routes } = props
  const router = useRouter()
  const useStyles = makeStyles(styles)
  const classes = useStyles()

  const activeRoute = (routeName) => {
    return router.route.indexOf(routeName) > -1 ? true : false
  }

  const links = (
    <List className={classes.list}>
      {routes?.length > 0 &&
        routes.map(route => {
          var listItemClasses

          listItemClasses = classNames({
            [' ' + classes[color]]: activeRoute(route.layout + route.path),
          })

          return (
            <Link href={route?.layout + route?.path} key={route.name}>
              <a className={`${classes.item}`} target={route?.target && route.target}>
                <ListItem button className={classes.itemLink + listItemClasses}>
                  <route.icon
                    className={classNames(classes.itemIcon, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  />

                  <ListItemText
                    primary={route?.name}
                    className={classNames(classes.itemText, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </a>
            </Link>
          )
        })
      }
    </List>
  )

  const brand = (
    <div className={classes.logo}>
      {logo ?
        <Link href={logoText?.path}>
          <a
            className={classNames(classes.logoLink, {
              [classes.logoLinkRTL]: props.rtlActive,
            })}
          >
            <div className={classes.logoImage}>
              <img src={logo} alt='logo' className={classes.img} />
            </div>
            {logoText?.f_text + logoText?.s_text}
          </a>
        </Link>
        :
        <Link href={logoText?.path}>
          <Logo className='portfolio_nav_logo'>
            <div className='portfolio_nav_logo_name'>
              <span>{logoText?.f_text}</span>{logoText?.s_text}
            </div>
          </Logo>
        </Link>
      }
    </div>
  )

  return (
    <div>
      <Hidden mdUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor={props.rtlActive ? 'left' : 'right'}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <AdminNavbarLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation='css'>
        <Drawer
          anchor={props.rtlActive ? 'right' : 'left'}
          variant='permanent'
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  )
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf([
    'white',
    'purple',
    'blue',
    'green',
    'orange',
    'red',
  ]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
}

export default Sidebar