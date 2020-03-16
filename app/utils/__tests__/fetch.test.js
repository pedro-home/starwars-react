import fetchData from '../fetch';

describe('Given utils', () => {
  describe('When fetchData is called', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    describe('And handles a successful response', () => {
      let data;
      let textData;

      beforeEach(() => {
        data = { hello: 'world' };
        textData = JSON.stringify(data);
      });

      it('Then should receive the response', done => {
        fetch.mockResponseOnce(textData);
        fetchData('/thisurliscorrect')
          .then(newData => {
            expect(newData).toEqual(textData);
            done();
          })
          .catch(done);
      });

      it('And should format the response correcty', done => {
        fetch.mockResponseOnce(textData, {
          headers: { 'content-type': 'application/json' },
        });
        fetchData('/thisurliscorrect')
          .then(newData => {
            expect(newData).toEqual(data);
            done();
          })
          .catch(done);
      });
    });

    describe('And handles a 204 response', () => {
      beforeEach(() => {
        fetch.mockResponseOnce(undefined, {
          status: 204,
          statusText: 'No Content',
        });
      });

      it('Then should return with the default value', done => {
        fetchData('/thisurliscorrect')
          .then(data => {
            expect(data).toEqual('');
            done();
          })
          .catch(done);
      });
    });

    describe('And handles an error response', () => {
      let errorResponse;
      beforeEach(() => {
        const headers = {
          status: 404,
          statusText: 'Not Found',
          headers: {
            'Content-type': 'application/json',
          },
        };

        fetch.mockResponseOnce(undefined, headers);

        errorResponse = new Error(`${headers.status}: ${headers.statusText}`);
      });

      it('Then should handle the error appropriatly', done => {
        fetchData('/thisdoesntexist').catch(err => {
          expect(err).toEqual(errorResponse);
          done();
        });
      });
    });
  });
});
