import React from 'react';
import { mount } from 'enzyme';

export const wait = time => new Promise(res => setTimeout(res, time));

export const mountHook = (hook) => {
    let data = {};
    const Comp = ({children}) => children(hook());
    const wrapper = mount(
        <Comp>
            {(result) => {
                Object.assign(data, result);
                return null;
            }}
        </Comp>
    );

    return { data, wrapper };
};

export function supressWarning() {
    const originalError = console.error;

    beforeAll(() => {
        console.error = (...args) => {
            if (/Warning.*not wrapped in act/.test(args[0])) {
                return;
            }
            originalError.call(console, ...args);
        }
    });

    afterAll(() => {
        console.error = originalError;
    });
}
