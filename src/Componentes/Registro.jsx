import Socialbutton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = ({alert, setAlert}) => {
    return(
        <div className="registro">  
        <h1>Crea una cuenta</h1>
        <div className="row">
            <div className="col">
        <Socialbutton icon="fa-brands fa-facebook fa-2x"/>
        </div>
        <div className="col">
        <Socialbutton icon="fa-solid fa-envelope fa-2x" />
        </div>
        <div className="col">
        <Socialbutton icon="fa-brands fa-linkedin fa-2x" />
        </div>
        </div>
        <p>O regístrate aquí</p>
        <Formulario setAlert={setAlert}/>
        {alert.msg && <Alert msg={alert.msg} color= {alert.color}  />}
        </div>
    );
}

export default Registro;