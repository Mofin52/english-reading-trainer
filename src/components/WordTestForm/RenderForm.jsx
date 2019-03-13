import React from 'react';

class RenderForm extends React.Component {
    render(){
        return(
            <div className='reading-trainer__card' ref={this.props.label}>
                <p className='word'>{this.props.label}</p>
                <input {...this.props.input} autoComplete="off" ref={`${this.props.label}_input`} className='wordFormInput'/>
            </div>
        );
    }
}

export default RenderForm;