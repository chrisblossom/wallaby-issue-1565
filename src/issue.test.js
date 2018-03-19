'use strict';

describe('wallaby-issue-1565', () => {
    it('example', () => {
        expect(__dirname).toMatchSnapshot();
    });
});
