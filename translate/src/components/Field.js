import React from 'react';
import { Input } from 'semantic-ui-react'

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext;
    render(){
        const text = this.context === 'english' ? 'Name' : 'नाम';
        return(<Input label={text} placeholder='Enter to translate'/>)
    }
}

export default Field;