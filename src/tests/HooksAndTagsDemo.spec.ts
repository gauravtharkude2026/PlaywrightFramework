import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Before All Tests');
});

test.afterAll(async () => {
    console.log('After All Tests');
});

test.beforeEach(async () => {
    console.log('Before Each Test');
});

test.afterEach(async () => {
    console.log('After Each Test');
});

test('@smoke Login Demo', async () => {

    console.log('Executing Smoke Test');

    expect(true).toBeTruthy();

});

test('@regression Dashboard Demo', async () => {

    console.log('Executing Regression Test');

    expect(true).toBeTruthy();

});

test('@sanity API Demo', async () => {

    console.log('Executing Sanity Test');

    expect(true).toBeTruthy();

});