import React ,{Component} from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default class SignInOrSignUP extends Component{
    constructor(props){
        super(props)
        this.state={
            selected: 'signIn'
        }
    }
    switch(e) {
        this.setState({
            selected: e.target.value
        })
    }
    render(){
        return (
            <div className="signInOrSignUp">
                <nav>
                    <label>
                        <input type="radio" value="signIn"
                            checked={this.state.selected === 'signIn'}
                            onChange={this.switch.bind(this)} />SignIn
                    </label>
                    <label>
                        <input type="radio" value="signUp"
                            checked={this.state.selected === 'signUp'}
                            onChange={this.switch.bind(this)} />SignUp
                    </label>
                </nav>
                <div className="panes">
                    {this.state.selected === 'signUp' ? <SignUpForm formData={this.props.formData} 
                        onSubmit={this.props.onSignUp}
                        onChange={this.props.onChange}/>:null}
                    {this.state.selected === 'signIn' ? <SignInForm formData={this.props.formData}
                        onSubmit={this.props.onSignIn}
                        onChange={this.props.onChange}
                        onForgotPassword={this.props.onForgotPassword.bind(this)}/>: null}
                </div>
            </div>
        )
    }
}