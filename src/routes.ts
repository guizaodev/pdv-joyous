/*
    This file is used to define the routes that are available in the application.
    It is used to define the routes that are available to the public and the routes that are available to the private.
    @type {string[]}
*/

export const publicRoutes = [
    "/",
];

export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";