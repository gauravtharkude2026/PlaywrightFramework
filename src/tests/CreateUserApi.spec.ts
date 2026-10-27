import { test, expect } from '@playwright/test';
import { createUser } from '../api/UserApi';

test('Create User API', async () => {

    const response = await createUser();

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.name)
        .toBe('Gaurav');

});
