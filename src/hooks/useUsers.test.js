import { expect } from 'chai';

import useUsers from './useUsers';
import { supressWarning, mountHook } from '../../tests/utils';

describe('useUsers', () => {
    supressWarning();

    it('works', () => {
        const hook = mountHook(useUsers);

        expect(hook.data.users).to.have.lengthOf(0);
        hook.data.addUser({ id: 1111, name: 'leo' });
        expect(hook.data.users).to.have.lengthOf(1);
        hook.data.addUser({ id: 2222, name: 'leo2' });
        expect(hook.data.users).to.have.lengthOf(2);

        hook.wrapper.unmount();
    });
});
