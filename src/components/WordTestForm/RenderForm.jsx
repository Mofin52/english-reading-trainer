import React from 'react';

class RenderForm extends React.Component {
    render(){
        return(
            <div className='reading-trainer__card'>
                <p className='word'>{this.props.label}</p>
                <input {...this.props.input} ref={this.props.label} autoComplete="off" className='wordFormInput'/>
            </div>
        );
    }
}

export default RenderForm;