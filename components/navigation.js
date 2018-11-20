import Link from 'next/link'

export default () => (
  <div>
    <Link href='/'><a>Index</a></Link>
    <br/>
    <Link href='/home'><a>Home</a></Link>
    <br />
    <Link href='/example'><a>Example</a></Link>
    <br />
    <Link href='/example/yoyoyo'><a>Example with sub params</a></Link>
  </div>
)