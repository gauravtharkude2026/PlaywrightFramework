import { test, expect } from '@playwright/test';
import { getUsers } from '../api/UserApi';

test('Get Users API', async () => {

    const response = await getUsers();

    expect(response.data.length)
        .toBeGreaterThan(0);

});