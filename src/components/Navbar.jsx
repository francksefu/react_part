import './nav.css';
import LogoutButton from './logout_button/LogoutButton';

function Navbar() {
  return (
    <div className="" id="nav">
      <ul className="nav flex-column border-end border-1">
        <h1 className="marge pt-3 pb-3 ">Logo</h1>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">MODELS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/reservation">RESERVE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/myreservations">MY RESERVATIONS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/newboat">ADD NEW BOAT</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-dark" href="/deleteboat">DELETE BOAT</a>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
