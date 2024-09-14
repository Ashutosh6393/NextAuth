export const publicRoutes = [
    "/",
    "/auth/new-verification",

]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 * 
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
]

/**
 * The prefix for the API authentication routes
 * routes that start with this prefix are used for API 
 * authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth"

/**
 * the default dredirect path after logging in
 */

export const DEFAULT_LOGIN_REDIRECT =  "/settings";