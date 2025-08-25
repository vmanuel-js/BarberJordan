import LinkNav from "./LinkNav";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={{ backgroundColor: "#1a1a1aff", width: "auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="#">
          <img
            style={{ width: "120px", height: "120px", margin: "10px" }}
            src="./img/barberjordan-bgtrns2.png"
            alt="Logo de BarberJordan"
          />
        </a>
        <div>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "3.5rem",
              margin: "0px 50px",
            }}
          >
            <LinkNav nameLink={"Inicio"}></LinkNav>
            <LinkNav nameLink={"Servicios"}></LinkNav>
            <LinkNav nameLink={"Reservas"}></LinkNav>
            <LinkNav nameLink={"Barberos"}></LinkNav>
            <LinkNav nameLink={"Contacto"}></LinkNav>
          </ul>
        </div>
        <CartWidget></CartWidget>
      </div>
    </nav>
  );
}

export default NavBar;
