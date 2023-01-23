import { test, expect } from '@playwright/test'

var homePage = 'http://localhost3000';
var aboutPage = 'http://localhost3000/about';
var gardespage = 'http://localhost3000/grades';

test.beforeAll(async () => {
    console.log("Before tests")
})

test.beforeAll(async () => {
    console.log('After tests')
})