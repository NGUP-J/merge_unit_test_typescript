import { merge } from '../src/index';

describe('testing integer array: int[]', () => {
    test('not integer in collection_1', () => {
        expect(() => merge([1.5, 2, 3], [3, 4, 5])).toThrow(Error);
    });
});

describe('testing collection length ', () => {
    test('collection_1.length < collection_2.length ', () => {
        expect(merge([1, 2, 3], [3, 4, 5, 6])).toEqual([1, 2, 3, 3, 4, 5, 6]);
    });

    test('collection_1.length > collection_2.length ', () => {
        expect(merge([1, 2, 3, 4, 5], [3, 4, 5])).toEqual([1, 2, 3, 3, 4, 4, 5, 5]);
    });

    test('collection_1.length = collection_2.length ', () => {
        expect(merge([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 3, 4, 5]);
    });

    test('collection_1.length = collection_2.length = 0 ', () => {
        expect(merge([], [])).toEqual([]);
    });
});