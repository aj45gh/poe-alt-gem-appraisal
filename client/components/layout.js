import Navbar from './navbar';


export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className='container is-fluid'>
                <main>{children}</main>
            </div>
        </>
    )
}