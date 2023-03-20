import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';


const Navbar = () => (
  <Stack direction="row" 
  alignItems="center" 
  p={2}
   sx={{ position:  "sticky",
        background: 'linear-gradient(31deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', 
        top: 0, 
        zIndex: 999,
        justifyContent: "space-between" }}>

    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
