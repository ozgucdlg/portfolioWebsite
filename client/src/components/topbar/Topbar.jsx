import { Person, Mail } from '@material-ui/icons';
import './topbar.scss';


export default function Topbar( { menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div  className="left">

                    <a href="#intro" className="logo" > 0dlg. </a> 
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span> +1 (647)9153052</span>
                    </div>  

                      
                    <div className="itemContainer">
                    <Mail className="icon"/>
                    <span> ozgucdalga@gmail.com</span>
                    </div>   

                    
                    
                </div>

                <h1>hello</h1>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>


            </div>
            
        </div>
    )
}
