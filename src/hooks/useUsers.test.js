import { expect } from 'chai';

import useUsers from './useUsers';
import { mountHook, supressWarning } from '../../tests/utils';

describe('useUsers', () => {
    supressWarning();

    it('works', async () => {
        const hook = mountHook(useUsers);

        hook.data.addUser({id: 111, name: 'leo'});
        expect(hook.data.users).to.have.lengthOf(1);
        hook.data.addUser({id: 222, name: 'juan'});
        expect(hook.data.users).to.have.lengthOf(2);

        hook.wrapper.unmount();
    });
});
