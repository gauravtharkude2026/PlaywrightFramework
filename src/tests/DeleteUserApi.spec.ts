import { test, expect } from '@playwright/test';
import { deleteUser } from '../api/UserApi';

test('@api Delete User API', async () => {

    const response = await deleteUser();

    expect(response.status()).toBe(204);

});