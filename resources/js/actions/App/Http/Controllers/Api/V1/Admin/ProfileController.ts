import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Admin\ProfileController::upsert
 * @see app/Http/Controllers/Api/V1/Admin/ProfileController.php:12
 * @route '/api/v1/admin/profile'
 */
export const upsert = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: upsert.url(options),
    method: 'put',
})

upsert.definition = {
    methods: ["put"],
    url: '/api/v1/admin/profile',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\V1\Admin\ProfileController::upsert
 * @see app/Http/Controllers/Api/V1/Admin/ProfileController.php:12
 * @route '/api/v1/admin/profile'
 */
upsert.url = (options?: RouteQueryOptions) => {
    return upsert.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Admin\ProfileController::upsert
 * @see app/Http/Controllers/Api/V1/Admin/ProfileController.php:12
 * @route '/api/v1/admin/profile'
 */
upsert.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: upsert.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Api\V1\Admin\ProfileController::upsert
 * @see app/Http/Controllers/Api/V1/Admin/ProfileController.php:12
 * @route '/api/v1/admin/profile'
 */
    const upsertForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: upsert.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Admin\ProfileController::upsert
 * @see app/Http/Controllers/Api/V1/Admin/ProfileController.php:12
 * @route '/api/v1/admin/profile'
 */
        upsertForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upsert.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    upsert.form = upsertForm
const ProfileController = { upsert }

export default ProfileController