import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::index
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:15
 * @route '/api/v1/public/portfolio'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/public/portfolio',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::index
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:15
 * @route '/api/v1/public/portfolio'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::index
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:15
 * @route '/api/v1/public/portfolio'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::index
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:15
 * @route '/api/v1/public/portfolio'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::index
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:15
 * @route '/api/v1/public/portfolio'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::index
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:15
 * @route '/api/v1/public/portfolio'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::index
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:15
 * @route '/api/v1/public/portfolio'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::profile
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:29
 * @route '/api/v1/public/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/api/v1/public/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::profile
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:29
 * @route '/api/v1/public/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::profile
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:29
 * @route '/api/v1/public/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::profile
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:29
 * @route '/api/v1/public/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::profile
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:29
 * @route '/api/v1/public/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::profile
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:29
 * @route '/api/v1/public/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::profile
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:29
 * @route '/api/v1/public/profile'
 */
        profileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profile.form = profileForm
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::skills
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:37
 * @route '/api/v1/public/skills'
 */
export const skills = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skills.url(options),
    method: 'get',
})

skills.definition = {
    methods: ["get","head"],
    url: '/api/v1/public/skills',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::skills
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:37
 * @route '/api/v1/public/skills'
 */
skills.url = (options?: RouteQueryOptions) => {
    return skills.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::skills
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:37
 * @route '/api/v1/public/skills'
 */
skills.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skills.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::skills
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:37
 * @route '/api/v1/public/skills'
 */
skills.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: skills.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::skills
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:37
 * @route '/api/v1/public/skills'
 */
    const skillsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: skills.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::skills
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:37
 * @route '/api/v1/public/skills'
 */
        skillsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: skills.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::skills
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:37
 * @route '/api/v1/public/skills'
 */
        skillsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: skills.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    skills.form = skillsForm
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::experience
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:45
 * @route '/api/v1/public/experience'
 */
export const experience = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: experience.url(options),
    method: 'get',
})

experience.definition = {
    methods: ["get","head"],
    url: '/api/v1/public/experience',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::experience
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:45
 * @route '/api/v1/public/experience'
 */
experience.url = (options?: RouteQueryOptions) => {
    return experience.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::experience
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:45
 * @route '/api/v1/public/experience'
 */
experience.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: experience.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::experience
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:45
 * @route '/api/v1/public/experience'
 */
experience.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: experience.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::experience
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:45
 * @route '/api/v1/public/experience'
 */
    const experienceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: experience.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::experience
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:45
 * @route '/api/v1/public/experience'
 */
        experienceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: experience.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::experience
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:45
 * @route '/api/v1/public/experience'
 */
        experienceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: experience.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    experience.form = experienceForm
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::projects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:53
 * @route '/api/v1/public/projects'
 */
export const projects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

projects.definition = {
    methods: ["get","head"],
    url: '/api/v1/public/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::projects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:53
 * @route '/api/v1/public/projects'
 */
projects.url = (options?: RouteQueryOptions) => {
    return projects.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::projects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:53
 * @route '/api/v1/public/projects'
 */
projects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::projects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:53
 * @route '/api/v1/public/projects'
 */
projects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projects.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::projects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:53
 * @route '/api/v1/public/projects'
 */
    const projectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projects.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::projects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:53
 * @route '/api/v1/public/projects'
 */
        projectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::projects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:53
 * @route '/api/v1/public/projects'
 */
        projectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projects.form = projectsForm
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::ongoingProjects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:61
 * @route '/api/v1/public/ongoing-projects'
 */
export const ongoingProjects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ongoingProjects.url(options),
    method: 'get',
})

ongoingProjects.definition = {
    methods: ["get","head"],
    url: '/api/v1/public/ongoing-projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::ongoingProjects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:61
 * @route '/api/v1/public/ongoing-projects'
 */
ongoingProjects.url = (options?: RouteQueryOptions) => {
    return ongoingProjects.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::ongoingProjects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:61
 * @route '/api/v1/public/ongoing-projects'
 */
ongoingProjects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ongoingProjects.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::ongoingProjects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:61
 * @route '/api/v1/public/ongoing-projects'
 */
ongoingProjects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ongoingProjects.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::ongoingProjects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:61
 * @route '/api/v1/public/ongoing-projects'
 */
    const ongoingProjectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ongoingProjects.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::ongoingProjects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:61
 * @route '/api/v1/public/ongoing-projects'
 */
        ongoingProjectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ongoingProjects.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\PublicPortfolioController::ongoingProjects
 * @see app/Http/Controllers/Api/V1/PublicPortfolioController.php:61
 * @route '/api/v1/public/ongoing-projects'
 */
        ongoingProjectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ongoingProjects.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ongoingProjects.form = ongoingProjectsForm
const PublicPortfolioController = { index, profile, skills, experience, projects, ongoingProjects }

export default PublicPortfolioController