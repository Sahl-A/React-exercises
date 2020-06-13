import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

// We transferred the compoenent from function at bottom to class below so we can add shouldCompoenentUpdate. It will prevent the modal from re-rendering when it is not shown, which will optimize the render process for the Modal and its children such as OrderSummary

// The props.children check is added later when we added the Spinner instead of the OrderSummry as a child in the Modal

// We can use hooks to optimize with functional components but the use of class component is done to educational purposes. 

// Class Component 
class Modal extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        return this.props.showModal !== prevProps.showModal || this.props.children !== prevProps.children;
    }

    render() {
        return(
            <React.Fragment>
                <Backdrop 
                    isBackdropShown={this.props.showModal} />
                    
                <div className="Modal"
                    style={{
                        transform: this.props.showModal ? 'translateY(0)' : 'translateY(-150vh)'
                        }} >
                        {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}


// Functional Component
/* const Modal = (props) => {
    return(
        <React.Fragment>
            <Backdrop 
                isBackdropShown={props.showModal}
                backdropClick={props.summaryBackdropClick} />
            <div className={styles.Modal}
                style={{
                    transform: props.showModal ? 'translateY(0)' : 'translateY(-150vh)'
                    }} >
                    {props.children}
            </div>
        </React.Fragment>
    )
} */

export default Modal;