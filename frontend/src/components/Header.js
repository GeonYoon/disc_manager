import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
    handleSubmit = (e) => {
      this.props.handleLogout(this.props.history);
    };

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                 return [
                   <li key='1'><Link to={'/login'}>Login</Link></li>,
                   <li key='2'><Link to={'/register'}>Register</Link></li>
                 ];
            default:
                return [
                    <li key='3'><Link to={'/output'}>Home</Link></li>,
                    <li key='4'><Link to={'/friends'}>Friends</Link></li>,
                    <li key='5'><Link to={'/form'}>Update</Link></li>,
                    <li key='6'><Link to={'/'} onClick={this.handleSubmit.bind(this)}>Logout</Link></li>
                ];
        }
    };

    render() {
        return (
                <nav>
                    <div className="nav-wrapper">
                        <Link
                            to={this.props.auth ? '/form' : '/'}
                            className="left brand-logo"
                        >
                            DISC
                        </Link>
                        <ul className = "right">
                            { this.renderContent() }
                        </ul>
                    </div>
                </nav>
            );
    }
}

export default Header;
