const { api } = require('../../config/services/api.services');

describe('groups integration tests end-points resource [root]', () => {
  it('should return http status code 200 in root endpoint api', async () => {
    await api.get('/').then((resp) => {
      expect(resp.status).toEqual(200);
    });
  });

  it('should return object with endpoint and details api', async () => {
    await api.get('/').then((resp) => {
      expect(resp.data).toHaveProperty('version');
      expect(resp.data).toHaveProperty('origin');
      expect(resp.data).toHaveProperty('respositorie');

      expect(resp.data).toHaveProperty(['resources', 'pokemon', 'get']);
      expect(resp.data).toHaveProperty(['resources', 'pokemon', 'post']);
      expect(resp.data).toHaveProperty(['resources', 'pokemon', 'put']);
      expect(resp.data).toHaveProperty(['resources', 'pokemon', 'delete']);

      expect(resp.data).toHaveProperty(['resources', 'battle']);
      expect(resp.data).toHaveProperty(['resources', 'battle', 'post']);
    });
  });
});
