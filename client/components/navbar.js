export default function Navbar() {
    return (
        <nav className='navbar is-black' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a className='navbar-item' href='/'>
                    <span className='tag is-black'>
                        <img src='/images/currency-icons/chaos-orb.png' alt='chaos orb icon'></img>
                        <span className='ml-2 is-size-5 has-text-weight-semibold pb-1'>
                            PoE Trade Tools
                        </span>
                    </span>
                </a>

                <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='site-navbar'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>

            <div id='site-navbar' className='navbar-menu'>
                <div className='navbar-start'>
                    <a className='navbar-item' href='/'>
                        Home
                    </a>
                    <a className='navbar-item' href='/alt-gems'>
                        Alt Gem Pricing
                    </a>
                </div>
            </div>
        </nav>
    );
}