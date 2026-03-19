import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
    const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller980bb49ee7ae63891f1d891d2fbcf1c9.form = Controller980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/admin'
 */
const Controller35f58437d9250c39f332f5e8e70440b7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

Controller35f58437d9250c39f332f5e8e70440b7.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/admin'
 */
Controller35f58437d9250c39f332f5e8e70440b7.url = (options?: RouteQueryOptions) => {
    return Controller35f58437d9250c39f332f5e8e70440b7.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/admin'
 */
Controller35f58437d9250c39f332f5e8e70440b7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/admin'
 */
Controller35f58437d9250c39f332f5e8e70440b7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/admin'
 */
    const Controller35f58437d9250c39f332f5e8e70440b7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller35f58437d9250c39f332f5e8e70440b7.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/admin'
 */
        Controller35f58437d9250c39f332f5e8e70440b7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller35f58437d9250c39f332f5e8e70440b7.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/admin'
 */
        Controller35f58437d9250c39f332f5e8e70440b7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller35f58437d9250c39f332f5e8e70440b7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller35f58437d9250c39f332f5e8e70440b7.form = Controller35f58437d9250c39f332f5e8e70440b7Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/unauthorized'
 */
const Controller0068cb1e23aa9c2eeed018870f18e48a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0068cb1e23aa9c2eeed018870f18e48a.url(options),
    method: 'get',
})

Controller0068cb1e23aa9c2eeed018870f18e48a.definition = {
    methods: ["get","head"],
    url: '/unauthorized',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/unauthorized'
 */
Controller0068cb1e23aa9c2eeed018870f18e48a.url = (options?: RouteQueryOptions) => {
    return Controller0068cb1e23aa9c2eeed018870f18e48a.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/unauthorized'
 */
Controller0068cb1e23aa9c2eeed018870f18e48a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0068cb1e23aa9c2eeed018870f18e48a.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/unauthorized'
 */
Controller0068cb1e23aa9c2eeed018870f18e48a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller0068cb1e23aa9c2eeed018870f18e48a.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/unauthorized'
 */
    const Controller0068cb1e23aa9c2eeed018870f18e48aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller0068cb1e23aa9c2eeed018870f18e48a.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/unauthorized'
 */
        Controller0068cb1e23aa9c2eeed018870f18e48aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0068cb1e23aa9c2eeed018870f18e48a.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/unauthorized'
 */
        Controller0068cb1e23aa9c2eeed018870f18e48aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0068cb1e23aa9c2eeed018870f18e48a.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller0068cb1e23aa9c2eeed018870f18e48a.form = Controller0068cb1e23aa9c2eeed018870f18e48aForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
const Controller42a740574ecbfbac32f8cc353fc32db9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

Controller42a740574ecbfbac32f8cc353fc32db9.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.url = (options?: RouteQueryOptions) => {
    return Controller42a740574ecbfbac32f8cc353fc32db9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
    const Controller42a740574ecbfbac32f8cc353fc32db9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
        Controller42a740574ecbfbac32f8cc353fc32db9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
        Controller42a740574ecbfbac32f8cc353fc32db9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller42a740574ecbfbac32f8cc353fc32db9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller42a740574ecbfbac32f8cc353fc32db9.form = Controller42a740574ecbfbac32f8cc353fc32db9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
    const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/admin': Controller35f58437d9250c39f332f5e8e70440b7,
    '/unauthorized': Controller0068cb1e23aa9c2eeed018870f18e48a,
    '/dashboard': Controller42a740574ecbfbac32f8cc353fc32db9,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller