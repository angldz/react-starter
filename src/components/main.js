import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <main>
            <h1 className="main-title">Fun fact about React:</h1>
            <ul className="main-ul-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousand of enterprise apps, including mobile apps</li>
            </ul>

            <h2 className="sub-title">More experiments:</h2>
            <ul className="main-ul-list">
                <li>
                    <Link className="AppLink" to="about">About me</Link>
                </li>
                <li>
                    <Link className="AppLink" to="airbnb">Airbnb</Link>
                </li>
                <li>
                    <Link className="AppLink" to="travel">Travel Journal</Link>
                </li>
                <li>
                    <Link className="AppLink" to="cats">Cat Contacts</Link>
                </li>
            </ul>
        </main>
    )
}
