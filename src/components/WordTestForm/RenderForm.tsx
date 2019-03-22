import * as React from 'react';

class RenderForm extends React.Component<IProps> {
    public render():JSX.Element {
        return(
            <div className='reading-trainer__card' ref={this._setRef}>
                <p className='word'>{this.props.label}</p>
                <input {...this.props.input} autoComplete="off" ref={this._setRefInp} className='wordFormInput'/>
            </div>
        );
    }
    
    private _setRef = elem => this[this.props.label] = elem;

    private _setRefInp = elem => this[`${this.props.label}_input`] = elem;
}

interface IProps {
    label: string;
    input: Object;
}

export default RenderForm;