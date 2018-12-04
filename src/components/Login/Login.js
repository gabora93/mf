import React, { Component } from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
import TextBetweenLines from '../TextBetweenLines/TextBetweenLines';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { updateObject, checkValidity} from '../../shared/utility';
import Spinner from '../../Spinner/Spinner'; 



class Login extends Component{

    state={
        controls:{
            email:{
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder: 'Correo'
                },
                value:'',
                validation:{
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched:false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        isSignup: true,
        loading: false,
        isSigninup: false

    }

    componentDidMount(){
        console.log(this.props)
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        }) 
        this.setState({controls: updatedControls})
    }

    submitHandler = (event) =>{
        event.preventDefault();
        this.setState({isSigninup:true})
        console.log(this.state.controls.email.value,this.state.controls.password.value, this.state.isSignup);
        setTimeout(() => {
            this.props.history.push(`/dashboard`);
        }, 5000);
        
        
    }

    

    render(){
        console.log(this.state.controls.email.valid)
        const InputElementsOnFormArray = [];
        for(let key in this.state.controls){
            InputElementsOnFormArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = InputElementsOnFormArray.map(formElement => (
            <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event)=>this.inputChangedHandler(event, formElement.id)}
            />
        ))

        let formi = <div>
            {form}
            {/* this.state.controls.password.valid &&  */}
            {this.state.controls.email.valid && this.state.controls.password.valid ?
              <Button   btnType="Success" other='btn-primary btn-block btn-signin'>Iniciar sesión</Button> : 
              <Button disabled={true}   btnType="Success" other='btn-primary btn-block btn-signin'>Iniciar sesión</Button>
               }
            {/* <Button  btnType="Success" other='btn-primary btn-block btn-signin'>Iniciar sesión</Button> */}
        </div>

        if(this.state.loading){
            form = <Spinner/>
        }

        let errorMessage = null;

        if(this.props.error){
            errorMessage= (
                <p>{this.props.error.message}</p>
            )
        }

       
        return(
            <div className='d-flex justify-content-center loginContainer'>
                 <div className='largocard'>

                     <div className='Logo'>
                         <Logo/>
                     </div>

                    <TextBetweenLines text='Inicia sesión'/>

                    {errorMessage}
                 <form className="form-signin" onSubmit={this.submitHandler}>
                        <span id="reauth-email" className="reauth-email"></span>
                        {/* <input type="email" id="inputEmail" className="form-control inputs" placeholder="Email address" required autoFocus/>
                        <input type="password" id="inputPassword" className="form-control inputs" placeholder="Password" required/> */}
                        {/* {form} */}
                        { this.state.isSigninup ? <Spinner/> : formi  }
                       
                        
                        <div className='d-flex justify-content-between passwordOptions'>
                                <a href="/">¿Olvidaste tu contraseña?</a>
                                <a href="/">No me llegó confirmación</a>
                        </div>

                        <hr/>
                        <div>
                            <p>¿No tienes cuenta? <a href="/">Registrate Aquí</a></p>
                        </div>
                        
                        <hr/>
                        <div className='footerLogin'>
                            <h6>&copy; 2018 All Rights Reserved. Mercado de facturas.</h6>
                            <h6>Privacy Terms</h6>
                        </div>
                </form>
            </div>
            </div>
        )
    }
}


export default Login;