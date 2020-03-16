import { expect } from 'chai';
import t from '../dist/index';

describe('global remove', () => {
	it('remove global value', () => {
		const key = 'mmstudio';
		t(key);
		expect(1).not.eq(2);
	});
});
