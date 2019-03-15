import React from 'react';

class RenderForm extends React.Component {
    
    setRef = elem => {
        this[this.props.label] = elem
    };
    setRefInp = elem => this[`${this.props.label}_input`] = elem;
    render(){
        return(
            <div className='reading-trainer__card' ref={this.setRef}>
                <p className='word'>{this.props.label}</p>
                <input {...this.props.input} autoComplete="off" ref={this.setRefInp} className='wordFormInput'/>
            </div>
        );
    }
}

export default RenderForm;