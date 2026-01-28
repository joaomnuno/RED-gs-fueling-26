export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-left">
            <img
                src="/redlogo.png"
                alt="Rocket Team Logo"
                className="navbar-logo"
            />
            <div className="navbar-title">
                RED Ground Station - Fueling Interface
            </div>    
        </div>

        <div className="navbar-right">
            <button className="navbar-button">save preset</button>
            <button className="navbar-button">menu</button>
        </div>
    </div>
  );
}