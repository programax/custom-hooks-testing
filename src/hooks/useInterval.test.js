import { useState, useCallback } from 'react';
import { expect } from 'chai';

import useInterval from './useInterval';
import { mountHook, wait, supressWarning } from '../../tests/utils';

function useHook() {
    const [arr, setArr] = useState([]);
    useInterval(useCallback(() => {
        setArr([...arr, {id: Math.random(), name: 'yo'}]);
    }, [arr]), 100);

    return {arr};
}

describe('useApi', () => {
    supressWarning();

    it('works', async () => {
        const hook = mountHook(useHook);

        await wait(101);
        expect(hook.data.arr).to.have.lengthOf(1);
        await wait(101);
        expect(hook.data.arr).to.have.lengthOf(2);

        hook.wrapper.unmount();
    });
});
