import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Data Analysis & Software Development - Start your Career in Tech!</span>
            <span className="headerTitleLg">The Developer Bootcamp Blog</span>
        </div>
        <img className="headerImg" src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2016/11/FOTO2_verificacion-1-1920x1280.jpg" width={1904} height={300} alt="Computer Display showing Code"></img>
    </div>
  )
}
