import fetchGetPoints from "./fetchGetPoints";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            test: "test"
        })
    })
});

describe('fetchGetPoints.js', () => {

    test('internal server error (500)', () => {
        console.error = jest.fn();
        fetch.mockRejectedValueOnce("500");

        fetchGetPoints().catch(err => expect(err).toBe("500"));
    });

    test('receive points (200)', () => {
        fetch.mockResolvedValueOnce(new Response(new Blob(["points"], { type: 'text' })));

        fetchGetPoints().then(resp => expect(resp).toBe("points"))
            .catch(err => console.error(err));
    });
});