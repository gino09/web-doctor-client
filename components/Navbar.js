import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Contact from '../public/svg/contact.svg'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import appText from '../components/appText'

const NavBar = ({classes,setTop}) => (
    <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>setTop(true)}>
            <MenuIcon/>
        </IconButton>
        <Typography variant="h6">
          {appText.en.title}
          </Typography>
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
        >
            <Contact />
        </IconButton>
    </Toolbar>
)

export default NavBar