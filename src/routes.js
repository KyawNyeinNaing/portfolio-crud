import {
  FcDatabase,
  FcBusinessman,
  FcSurvey,
  FcSupport,
  FcSoundRecordingCopyright
} from 'react-icons/fc'

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    layout: '/admin',
    icon: FcDatabase,
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    layout: '/admin',
    icon: FcBusinessman,
  },
  {
    path: '/table-list',
    name: 'Table List',
    layout: '/admin',
    icon: FcSurvey,
  },
  {
    path: '/maps',
    name: 'Maps',
    layout: '/admin',
    icon: FcSupport,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    layout: '/admin',
    icon: FcSupport,
  },
  {
    path: 'home',
    name: 'Portfolio',
    layout: '/',
    target: '_blank',
    icon: FcSoundRecordingCopyright,
  }
]

export default dashboardRoutes;
