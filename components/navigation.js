import Link from 'next/link'

export default () => (
  <div className='nav__container'>
    <Link href='/'><a className='nav__link'>Index</a></Link>
    <br/>
    <Link href='/home'><a className='nav__link'>Home</a></Link>
    <br />
    <Link href='/example'><a className='nav__link'>Example</a></Link>
    <br />
    <Link href='/example/yoyoyo'><a className='nav__link'>Example with sub params</a></Link>
  </div>
)