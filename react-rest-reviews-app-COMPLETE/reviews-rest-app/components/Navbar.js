import { AppBar } from "@mui/material"
import Toolbar from "@mui/material"
import Typography from "@mui/material"

export default function Navbar() {
    return <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Adaptations Reviews
            </Typography>
            </Toolbar>
        </AppBar>
}