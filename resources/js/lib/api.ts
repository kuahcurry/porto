const normalizedApiBase = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '');

export function apiUrl(path: string): string {
    if (/^https?:\/\//.test(path)) {
        return path;
    }

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    if (!normalizedApiBase) {
        return normalizedPath;
    }

    return `${normalizedApiBase}${normalizedPath}`;
}

export function githubRedirectUrl(): string {
    return apiUrl('/api/v1/auth/github/redirect');
}
