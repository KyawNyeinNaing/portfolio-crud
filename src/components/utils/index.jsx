const selectElement = ele => (
  document.querySelector(ele) &&
  document.querySelector(ele).addEventListener('click', () => {
    console.log('click')
    document.querySelector('body')?.classList.toggle('open-drawer')
    document.querySelector('.burger-wrap')?.classList.toggle('open-wrap')
  })
)

const navSticky = () => {
  let target = document.querySelector('header nav')
  let sticky = target?.offsetTop
  if (window.pageYOffset > sticky) {
    target?.classList.add('sticky')
  } else {
    target?.classList.remove('sticky')
  }
}

const openDrawer = () => {
  let sp_btn = document.querySelectorAll('.sp-drawer')
  selectElement('.menu-btn')
  selectElement('.burger-wrap')

  if (sp_btn) {
    for (let i = 0; i < sp_btn.length; i++) {
      sp_btn[i]?.addEventListener('click', () => {
        document.querySelector('body')?.classList.remove('open-drawer')
      })
    }
  }
}

const closeDrawer = () => {
  if (document.querySelector('.open-drawer')) {
    document.querySelector('body').classList.remove('open-drawer')
    document.querySelector('.burger-wrap')?.classList.remove('open-wrap')
  }
}

export {
  navSticky,
  openDrawer,
  closeDrawer
}