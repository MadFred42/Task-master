import React, { Component } from 'react';

import './modal-login.css';

export default class ModalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textName: '',
            textLastName: ''
        }
        this.onUpdateName = this.onUpdateName.bind(this);
        this.onUpdateLastName = this.onUpdateLastName.bind(this);
        this.onAddName = this.onAddName.bind(this);
        this.closeModalEsc = this.closeModalEsc.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onUpdateName(e) {
        const textName = e.target.value;
        this.setState({textName});
    }

    onUpdateLastName(e) {
        const textLastName = e.target.value;
        this.setState({textLastName});
    }

    onAddName(e) {
        e.preventDefault();
        const {textName, textLastName} = this.state;

        if (textName !== '' && textLastName !== '') {
            this.props.onSignIn(textName, textLastName);
            this.setState({
                textName: '',
                textLastName: ''
            })
            this.props.closeModal();
        } else {
            alert('Tell me what is your name');
        }
    }

    closeModalEsc(e) {
        if (e.keyCode === 27) {
            this.props.closeModal();
        }
    }

    closeModal = e => {
        if (e.target.className === 'modal') {
            this.props.closeModal();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.closeModalEsc, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.closeModalEsc, false);
    }

    render() {
        const {modal, closeModal} = this.props;
        
        if (modal) {
            return (
                <div 
                className="modal"
                onClick={this.closeModal}
                onKeyDown={this.closeModalEsc}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form
                            action="#"
                            onSubmit={this.onAddName}>
                                <button 
                                className="modal-close"
                                type="button"
                                onClick={closeModal}>
                                    &times;</button>
                                <input 
                                placeholder="What is your name"
                                type="text" 
                                className="form-control modal-input"
                                onChange={this.onUpdateName}
                                value={this.state.textName} />
                                <input 
                                placeholder="Your last name" 
                                type="text" 
                                className="form-control modal-input"
                                onChange={this.onUpdateLastName}
                                value={this.state.textLastName} />
                                <button 
                                className="btn btn-dark"
                                type="submit">
                                    Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}