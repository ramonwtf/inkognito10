import DarkMode from './DarkMode.css'

const ModeDark = () => {
 let clichedClass ='cliked'
 const body = document.body
 const lightTheme = 'light'
 const darkTheme = 'dark'
 let theme

 if (localStorage) {
  theme = localStorage.getItem('theme')
  
 }
 if (theme === lightTheme || theme === darkTheme) {
  body.classList.add(theme)
 } else {
  body.classList.add(lightTheme)
 }

 const switchTheme = (e) => {
  if (theme === darkTheme) {
    body.classList.replace(darkTheme, lightTheme)
    e.target.classList.remove(clichedClass)
    localStorage.setItem('theme', 'light')
    theme = lightTheme
  }else {
    body.classList.replace(lightTheme,darkTheme)
    e.target.classList.add(clichedClass)
    localStorage.setItem('theme', 'dark')
    theme = darkTheme
  }
 }


  return (

    <div>
      <button className={theme === 'dark' ? clichedClass : ''} id='darkmode' onClick={(e) => switchTheme(e)}>

      </button>
    </div>
  )
}

export default ModeDark