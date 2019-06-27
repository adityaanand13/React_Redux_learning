import React from 'react';
import { Button } from 'semantic-ui-react'

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Buttons extends React.Component {

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'जमा करें';
    }

    render() {
        return(
            <ColorContext>
                {color => (
                    <Button position='right' inverted color={color}>
                        <LanguageContext.Consumer>
                            {value => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </Button>
                )}
            </ColorContext>

        )
    }
}

export default Buttons;