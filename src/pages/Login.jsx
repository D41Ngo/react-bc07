import React, {Component} from 'react';

class Login extends Component {
    handleLogin = () =>{
        const userName = document.getElementById('username').value;
        const passWord = document.getElementById('password').value;

        console.log({userName,passWord})
        if(userName === 'cyber' && passWord === 'cyber'){
            // chuyent ve trang login

            // history.push: xử lý logic sau đó mới chuyển trang
            // this.props.history.push('/home');

            // replace: thay thế trang hiện tại
            this.props.history.replace('/home');

            localStorage.setItem('userName',userName);
        }else{
            alert('Wrong Password or UserName');
        }
    }
    render() {
        return (
            <div className={'container'}>
                <h2>Login</h2>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Name"
                        id={'username'}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Password"
                        id={'password'}/>

                </div>

                <button className={'btn btn-success'} onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

export default Login;
