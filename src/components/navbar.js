import logo from '../../src/logo.svg';

export default function Navbar() {
    return (
        <nav className="header-nav">
            <img src={logo} className="App-logo" alt="logo" width="40px" />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-project-title">React Course - Project 1</h4>
        </nav>
    )
}
