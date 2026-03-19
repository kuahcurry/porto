import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\AuthController::redirectToGithub
 * @see app/Http/Controllers/Api/V1/AuthController.php:15
 * @route '/api/v1/auth/github/redirect'
 */
export const redirectToGithub = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToGithub.url(options),
    method: 'get',
})

redirectToGithub.definition = {
    methods: ["get","head"],
    url: '/api/v1/auth/github/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::redirectToGithub
 * @see app/Http/Controllers/Api/V1/AuthController.php:15
 * @route '/api/v1/auth/github/redirect'
 */
redirectToGithub.url = (options?: RouteQueryOptions) => {
    return redirectToGithub.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::redirectToGithub
 * @see app/Http/Controllers/Api/V1/AuthController.php:15
 * @route '/api/v1/auth/github/redirect'
 */
redirectToGithub.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToGithub.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\AuthController::redirectToGithub
 * @see app/Http/Controllers/Api/V1/AuthController.php:15
 * @route '/api/v1/auth/github/redirect'
 */
redirectToGithub.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectToGithub.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\AuthController::redirectToGithub
 * @see app/Http/Controllers/Api/V1/AuthController.php:15
 * @route '/api/v1/auth/github/redirect'
 */
    const redirectToGithubForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: redirectToGithub.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\AuthController::redirectToGithub
 * @see app/Http/Controllers/Api/V1/AuthController.php:15
 * @route '/api/v1/auth/github/redirect'
 */
        redirectToGithubForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: redirectToGithub.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\AuthController::redirectToGithub
 * @see app/Http/Controllers/Api/V1/AuthController.php:15
 * @route '/api/v1/auth/github/redirect'
 */
        redirectToGithubForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: redirectToGithub.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    redirectToGithub.form = redirectToGithubForm
/**
* @see \App\Http\Controllers\Api\V1\AuthController::handleGithubCallback
 * @see app/Http/Controllers/Api/V1/AuthController.php:20
 * @route '/api/v1/auth/github/callback'
 */
export const handleGithubCallback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleGithubCallback.url(options),
    method: 'get',
})

handleGithubCallback.definition = {
    methods: ["get","head"],
    url: '/api/v1/auth/github/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::handleGithubCallback
 * @see app/Http/Controllers/Api/V1/AuthController.php:20
 * @route '/api/v1/auth/github/callback'
 */
handleGithubCallback.url = (options?: RouteQueryOptions) => {
    return handleGithubCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::handleGithubCallback
 * @see app/Http/Controllers/Api/V1/AuthController.php:20
 * @route '/api/v1/auth/github/callback'
 */
handleGithubCallback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleGithubCallback.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\AuthController::handleGithubCallback
 * @see app/Http/Controllers/Api/V1/AuthController.php:20
 * @route '/api/v1/auth/github/callback'
 */
handleGithubCallback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handleGithubCallback.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\AuthController::handleGithubCallback
 * @see app/Http/Controllers/Api/V1/AuthController.php:20
 * @route '/api/v1/auth/github/callback'
 */
    const handleGithubCallbackForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: handleGithubCallback.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\AuthController::handleGithubCallback
 * @see app/Http/Controllers/Api/V1/AuthController.php:20
 * @route '/api/v1/auth/github/callback'
 */
        handleGithubCallbackForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: handleGithubCallback.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\AuthController::handleGithubCallback
 * @see app/Http/Controllers/Api/V1/AuthController.php:20
 * @route '/api/v1/auth/github/callback'
 */
        handleGithubCallbackForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: handleGithubCallback.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    handleGithubCallback.form = handleGithubCallbackForm
/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/me'
 */
export const me = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ["get","head"],
    url: '/api/v1/auth/me',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/me'
 */
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/me'
 */
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\AuthController::me
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/me'
 */
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\AuthController::me
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/me'
 */
    const meForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: me.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\AuthController::me
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/me'
 */
        meForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: me.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\AuthController::me
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/me'
 */
        meForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: me.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    me.form = meForm
/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:72
 * @route '/api/v1/auth/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/api/v1/auth/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:72
 * @route '/api/v1/auth/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:72
 * @route '/api/v1/auth/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:72
 * @route '/api/v1/auth/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:72
 * @route '/api/v1/auth/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
const AuthController = { redirectToGithub, handleGithubCallback, me, logout }

export default AuthController