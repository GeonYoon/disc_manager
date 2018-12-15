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
                return (
                    <li><Link to={'/'} onClick={this.handleSubmit.bind(this)}>Logout</Link></li>
                );
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

// function mapStateToProps( { auth } ) {
//     return { auth };
// }
export default Header;
