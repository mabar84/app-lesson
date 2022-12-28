import React from 'react';
import {create} from 'domain';
import ProfileStatus from './ProfileStatus';


test('status from props should be in the state', () => {
   const component = create(<ProfileStatus status={'mabar'}  />)
    const instance = component.
    // const instance = component.getInstance()
    expect(instance.state.status).toBe('mabar')
});
