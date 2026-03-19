import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::store
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:12
 * @route '/api/v1/admin/ongoing-projects'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/admin/ongoing-projects',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::store
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:12
 * @route '/api/v1/admin/ongoing-projects'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::store
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:12
 * @route '/api/v1/admin/ongoing-projects'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::store
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:12
 * @route '/api/v1/admin/ongoing-projects'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::store
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:12
 * @route '/api/v1/admin/ongoing-projects'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::update
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:31
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/v1/admin/ongoing-projects/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::update
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:31
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::update
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:31
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::update
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:31
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
    const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::update
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:31
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
        updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::destroy
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:51
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/admin/ongoing-projects/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::destroy
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:51
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::destroy
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:51
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::destroy
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:51
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
    const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Admin\OngoingProjectController::destroy
 * @see app/Http/Controllers/Api/V1/Admin/OngoingProjectController.php:51
 * @route '/api/v1/admin/ongoing-projects/{id}'
 */
        destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const OngoingProjectController = { store, update, destroy }

export default OngoingProjectController