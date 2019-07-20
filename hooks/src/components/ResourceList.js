import React from 'react';
import { Segment,List } from 'semantic-ui-react';

import useResources from '../hooks/resourceList'

const ResourceList = ({resource}) => {
    const resources = useResources(resource);
    return(
        <div>
            <Segment inverted>
                <List divided relaxed inverted>
                    {resources.map(record => (
                            <List.Item>
                                <List.Icon name='time' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>{record.title}</List.Header>
                                    <List.Description as='a'>{record.body}</List.Description>
                                </List.Content>
                            </List.Item>
                        )
                    )}
                </List>
            </Segment>
        </div>
    )
};

export default ResourceList;