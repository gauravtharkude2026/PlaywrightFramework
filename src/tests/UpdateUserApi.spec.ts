import { test, expect } from '@playwright/test';
import { updateUser } from '../api/UserApi';

test('Update User API', async () => {

    const response = await updateUser();

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.job)
        .toBe('Senior SDET');

});