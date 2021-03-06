import React, { SelectHTMLAttributes } from 'react'

import './style.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ( {name, label, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{ label }</label>
            <select value="" id={name} { ...rest }>
                <option value="" disabled hidden >Selecione uma opção</option>

                {options.map(opition =>{
                    return <option key={opition.value} value={opition.value}>{opition.label}</option>
                })}
            </select>
        </div>

    )
}

export default Select;