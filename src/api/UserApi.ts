import { request } from '@playwright/test';

export async function getUsers() {

    const apiContext =
        await request.newContext();

    const response =
        await apiContext.get(
            'https://reqres.in/api/users?page=2'
        );

    return await response.json();
}

export async function createUser() {

    const apiContext = await request.newContext();

    return await apiContext.post(
        'https://reqres.in/api/users',
        {
            data: {
                name: 'Gaurav',
                job: 'SDET'
            }
        }
    );
}

export async function updateUser() {

    const apiContext = await request.newContext();

    return await apiContext.put(
        'https://reqres.in/api/users/2',
        {
            data: {
                name: 'Gaurav',
                job: 'Senior SDET'
            }
        }
    );
}

export async function deleteUser() {

    const apiContext = await request.newContext();

    return await apiContext.delete(
        'https://reqres.in/api/users/2'
    );
}