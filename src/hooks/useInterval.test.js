import { useState, useCallback } from 'react';
import { expect } from 'chai';

import useInterval from './useInterval';
import { mountHook, wait, supressWarning } from '../../tests/utils';

const INTERVAL_TIME = 100;

function useHook() {
    const [users, setUsers] = useState([]);
    useInterval(() => {
        setUsers([...users, { id: Math.random(), name: 'leo' }]);
    }, INTERVAL_TIME);

    return { users };
}

describe('useInterval', () => {
    supressWarning();

    it('works', async () => {
        const hook = mountHook(useHook);

        expect(hook.data.users).to.have.lengthOf(0);
        await wait(INTERVAL_TIME + 1);
        expect(hook.data.users).to.have.lengthOf(1);
        await wait(INTERVAL_TIME + 1);
        expect(hook.data.users).to.have.lengthOf(2);

        hook.wrapper.unmount();
    });
});
