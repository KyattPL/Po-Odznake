import fetchAddNewEntry from './fetchAddNewEntry';

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            test: "test"
        })
    })
});

describe('fetchAddNewEntry.js', () => {

    test('add new entry for null params', () => {
        console.error = jest.fn();
        fetch.mockImplementationOnce(() => Promise.reject("500"));

        fetchAddNewEntry(null, null, null).catch(reason => {
            expect(reason).toBe("500");
        });
    });

    test('add new entry for start_date > end_date', () => {
        console.error = jest.fn();
        fetch.mockResolvedValueOnce(new Response(new Blob(["400"], { type: 'text' })));

        fetchAddNewEntry('2022-01-10', '2022-01-08', 3).then(resp => {
            expect(resp).toBe("400");
        }).catch(err => console.error(err));
    });

    test('add new entry for correct vals', () => {
        fetch.mockResolvedValueOnce(new Response(new Blob(["correct!"], { type: 'text' })));

        fetchAddNewEntry('2022-01-05', '2022-01-12', 5).then(resp => {
            expect(resp).toBe("correct!");
        }).catch(err => console.error(err));
    });
});