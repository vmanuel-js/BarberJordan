function LinkNav({ nameLink }) {
  return (
    <li style={{ listStyle: "none", fontSize: "1.2rem" }}>
      <a style={{ color: "#f5f5f5" }} href="#">
        {nameLink}
      </a>
    </li>
  );
}

export default LinkNav;
