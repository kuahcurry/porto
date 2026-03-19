import { Head } from '@inertiajs/react';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { ExperienceManager } from '@/components/admin/experience-manager';
import { OngoingManager } from '@/components/admin/ongoing-manager';
import { ProfileForm } from '@/components/admin/profile-form';
import { ProjectsManager } from '@/components/admin/projects-manager';
import { SkillsManager } from '@/components/admin/skills-manager';
import {
    AdminMe,
    ExperienceForm,
    ExperienceItem,
    OngoingProjectForm,
    OngoingProjectItem,
    PortfolioResponse,
    ProfilePayload,
    ProjectForm,
    ProjectItem,
    SkillForm,
    SkillItem,
} from '@/types/admin';

const emptyProfile: ProfilePayload = {
    full_name: '',
    headline: '',
    short_bio: '',
    long_bio: '',
    photo_url: '',
    email_public: '',
    location: '',
    website_url: '',
};

function csrfToken(): string {
    const token = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content');

    return token ?? '';
}

export default function AdminPage() {
    const [loading, setLoading] = useState(true);
    const [savingProfile, setSavingProfile] = useState(false);
    const [savingSkill, setSavingSkill] = useState(false);
    const [savingExperience, setSavingExperience] = useState(false);
    const [savingProject, setSavingProject] = useState(false);
    const [savingOngoing, setSavingOngoing] = useState(false);
    const [admin, setAdmin] = useState<AdminMe | null>(null);
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [profile, setProfile] = useState<ProfilePayload>(emptyProfile);
    const [skills, setSkills] = useState<SkillItem[]>([]);
    const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
    const [projects, setProjects] = useState<ProjectItem[]>([]);
    const [ongoingProjects, setOngoingProjects] = useState<OngoingProjectItem[]>([]);

    const loggedIn = useMemo(() => admin !== null, [admin]);

    const parseCsv = (value: string): string[] =>
        value
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean);

    const parseLines = (value: string): string[] =>
        value
            .split('\n')
            .map((item) => item.trim())
            .filter(Boolean);

    const toNullable = (value: string): string | null =>
        value.trim() === '' ? null : value.trim();

    const toNumber = (value: string, fallback = 0): number => {
        const parsed = Number.parseInt(value, 10);
        return Number.isNaN(parsed) ? fallback : parsed;
    };

    const handleForbiddenOrUnauthorized = (status: number): boolean => {
        if (status === 401) {
            setError('Session expired. Login again with GitHub.');
            setAdmin(null);
            return true;
        }

        if (status === 403) {
            setError('This GitHub account is not allowed.');
            return true;
        }

        return false;
    };

    const applyErrorResponse = async (
        response: Response,
        fallback: string,
    ): Promise<void> => {
        const payload = (await response.json()) as { message?: string } | null;
        setError(payload?.message ?? fallback);
    };

    const loadPortfolio = async (): Promise<void> => {
        const portfolioRes = await fetch('/api/v1/public/portfolio', {
            headers: { Accept: 'application/json' },
        });

        if (!portfolioRes.ok) {
            return;
        }

        const portfolioJson = (await portfolioRes.json()) as PortfolioResponse;
        const current = portfolioJson.data?.profile;

        setProfile({
            full_name: current?.full_name ?? '',
            headline: current?.headline ?? '',
            short_bio: current?.short_bio ?? '',
            long_bio: current?.long_bio ?? '',
            photo_url: current?.photo_url ?? '',
            email_public: current?.email_public ?? '',
            location: current?.location ?? '',
            website_url: current?.website_url ?? '',
        });

        setSkills(portfolioJson.data?.skills ?? []);
        setExperiences(portfolioJson.data?.experience ?? []);
        setProjects(portfolioJson.data?.projects ?? []);
        setOngoingProjects(portfolioJson.data?.ongoing_projects ?? []);
    };

    useEffect(() => {
        const init = async (): Promise<void> => {
            try {
                const [meRes, portfolioRes] = await Promise.all([
                    fetch('/api/v1/auth/me', {
                        credentials: 'include',
                        headers: { Accept: 'application/json' },
                    }),
                    fetch('/api/v1/public/portfolio', {
                        headers: { Accept: 'application/json' },
                    }),
                ]);

                if (meRes.ok) {
                    const meJson = (await meRes.json()) as { data?: AdminMe };
                    setAdmin(meJson.data ?? null);
                }

                if (portfolioRes.ok) {
                    const portfolioJson =
                        (await portfolioRes.json()) as PortfolioResponse;
                    const current = portfolioJson.data?.profile;

                    setProfile({
                        full_name: current?.full_name ?? '',
                        headline: current?.headline ?? '',
                        short_bio: current?.short_bio ?? '',
                        long_bio: current?.long_bio ?? '',
                        photo_url: current?.photo_url ?? '',
                        email_public: current?.email_public ?? '',
                        location: current?.location ?? '',
                        website_url: current?.website_url ?? '',
                    });

                    setSkills(portfolioJson.data?.skills ?? []);
                    setExperiences(portfolioJson.data?.experience ?? []);
                    setProjects(portfolioJson.data?.projects ?? []);
                    setOngoingProjects(portfolioJson.data?.ongoing_projects ?? []);
                }
            } catch (_e) {
                setError('Unable to initialize dashboard state.');
            } finally {
                setLoading(false);
            }
        };

        void init();
    }, []);

    const handleSave = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        setMessage('');
        setError('');
        setSavingProfile(true);

        try {
            const response = await fetch('/api/v1/admin/profile', {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
                body: JSON.stringify(profile),
            });

            if (response.status === 401) {
                handleForbiddenOrUnauthorized(response.status);
                return;
            }

            if (response.status === 403) {
                handleForbiddenOrUnauthorized(response.status);
                return;
            }

            if (!response.ok) {
                const payload =
                    (await response.json()) as { message?: string } | null;
                setError(payload?.message ?? 'Failed to save profile.');
                return;
            }

            setMessage('Profile updated and immediately available on public API.');
            await loadPortfolio();
        } catch (_e) {
            setError('Network error while saving profile.');
        } finally {
            setSavingProfile(false);
        }
    };

    const handleSaveSkill = async (form: SkillForm): Promise<boolean> => {
        setMessage('');
        setError('');
        setSavingSkill(true);

        try {
            const isEdit = form.id !== null;
            const endpoint = isEdit
                ? `/api/v1/admin/skills/${form.id}`
                : '/api/v1/admin/skills';
            const method = isEdit ? 'PUT' : 'POST';

            const response = await fetch(endpoint, {
                method,
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
                body: JSON.stringify({
                    name: form.name,
                    type: form.type,
                    level: toNumber(form.level, 3),
                    sort_order: toNumber(form.sort_order, 0),
                }),
            });

            if (handleForbiddenOrUnauthorized(response.status)) {
                return false;
            }

            if (!response.ok) {
                await applyErrorResponse(response, 'Failed to save skill.');
                return false;
            }

            await loadPortfolio();
            setMessage(isEdit ? 'Skill updated.' : 'Skill created.');
            return true;
        } catch (_e) {
            setError('Network error while saving skill.');
            return false;
        } finally {
            setSavingSkill(false);
        }
    };

    const handleDeleteSkill = async (id: string): Promise<void> => {
        setMessage('');
        setError('');

        try {
            const response = await fetch(`/api/v1/admin/skills/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
            });

            if (handleForbiddenOrUnauthorized(response.status)) {
                return;
            }

            if (!response.ok) {
                setError('Failed to delete skill.');
                return;
            }

            await loadPortfolio();
            setMessage('Skill deleted.');
        } catch (_e) {
            setError('Network error while deleting skill.');
        }
    };

    const handleSaveExperience = async (
        form: ExperienceForm,
    ): Promise<boolean> => {
        setMessage('');
        setError('');
        setSavingExperience(true);

        try {
            const isEdit = form.id !== null;
            const endpoint = isEdit
                ? `/api/v1/admin/experience/${form.id}`
                : '/api/v1/admin/experience';
            const method = isEdit ? 'PUT' : 'POST';

            const response = await fetch(endpoint, {
                method,
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
                body: JSON.stringify({
                    role_title: form.role_title,
                    company_name: form.company_name,
                    employment_type: toNullable(form.employment_type),
                    start_date: form.start_date,
                    end_date: form.is_current
                        ? null
                        : toNullable(form.end_date),
                    is_current: form.is_current,
                    summary: form.summary,
                    achievements: parseLines(form.achievements_text),
                    sort_order: toNumber(form.sort_order, 0),
                }),
            });

            if (handleForbiddenOrUnauthorized(response.status)) {
                return false;
            }

            if (!response.ok) {
                await applyErrorResponse(response, 'Failed to save experience.');
                return false;
            }

            await loadPortfolio();
            setMessage(isEdit ? 'Experience updated.' : 'Experience created.');
            return true;
        } catch (_e) {
            setError('Network error while saving experience.');
            return false;
        } finally {
            setSavingExperience(false);
        }
    };

    const handleDeleteExperience = async (id: string): Promise<void> => {
        setMessage('');
        setError('');

        try {
            const response = await fetch(`/api/v1/admin/experience/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
            });

            if (handleForbiddenOrUnauthorized(response.status)) {
                return;
            }

            if (!response.ok) {
                setError('Failed to delete experience.');
                return;
            }

            await loadPortfolio();
            setMessage('Experience deleted.');
        } catch (_e) {
            setError('Network error while deleting experience.');
        }
    };

    const handleSaveProject = async (form: ProjectForm): Promise<boolean> => {
        setMessage('');
        setError('');
        setSavingProject(true);

        try {
            const isEdit = form.id !== null;
            const endpoint = isEdit
                ? `/api/v1/admin/projects/${form.id}`
                : '/api/v1/admin/projects';
            const method = isEdit ? 'PUT' : 'POST';

            const response = await fetch(endpoint, {
                method,
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
                body: JSON.stringify({
                    title: form.title,
                    description: form.description,
                    tech_stack: parseCsv(form.tech_stack_text),
                    repo_url: toNullable(form.repo_url),
                    live_url: toNullable(form.live_url),
                    image_url: toNullable(form.image_url),
                    started_at: toNullable(form.started_at),
                    completed_at: toNullable(form.completed_at),
                    featured: form.featured,
                    sort_order: toNumber(form.sort_order, 0),
                }),
            });

            if (handleForbiddenOrUnauthorized(response.status)) {
                return false;
            }

            if (!response.ok) {
                await applyErrorResponse(response, 'Failed to save project.');
                return false;
            }

            await loadPortfolio();
            setMessage(isEdit ? 'Project updated.' : 'Project created.');
            return true;
        } catch (_e) {
            setError('Network error while saving project.');
            return false;
        } finally {
            setSavingProject(false);
        }
    };

    const handleDeleteProject = async (id: string): Promise<void> => {
        setMessage('');
        setError('');

        try {
            const response = await fetch(`/api/v1/admin/projects/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
            });

            if (handleForbiddenOrUnauthorized(response.status)) {
                return;
            }

            if (!response.ok) {
                setError('Failed to delete project.');
                return;
            }

            await loadPortfolio();
            setMessage('Project deleted.');
        } catch (_e) {
            setError('Network error while deleting project.');
        }
    };

    const handleSaveOngoingProject = async (
        form: OngoingProjectForm,
    ): Promise<boolean> => {
        setMessage('');
        setError('');
        setSavingOngoing(true);

        try {
            const isEdit = form.id !== null;
            const endpoint = isEdit
                ? `/api/v1/admin/ongoing-projects/${form.id}`
                : '/api/v1/admin/ongoing-projects';
            const method = isEdit ? 'PUT' : 'POST';

            const response = await fetch(endpoint, {
                method,
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
                body: JSON.stringify({
                    title: form.title,
                    description: form.description,
                    tech_stack: parseCsv(form.tech_stack_text),
                    status_note: toNullable(form.status_note),
                    progress_percent:
                        form.progress_percent.trim() === ''
                            ? null
                            : toNumber(form.progress_percent, 0),
                    target_date: toNullable(form.target_date),
                    repo_url: toNullable(form.repo_url),
                    live_url: toNullable(form.live_url),
                    sort_order: toNumber(form.sort_order, 0),
                }),
            });

            if (handleForbiddenOrUnauthorized(response.status)) {
                return false;
            }

            if (!response.ok) {
                await applyErrorResponse(
                    response,
                    'Failed to save ongoing project.',
                );
                return false;
            }

            await loadPortfolio();
            setMessage(isEdit ? 'Ongoing project updated.' : 'Ongoing project created.');
            return true;
        } catch (_e) {
            setError('Network error while saving ongoing project.');
            return false;
        } finally {
            setSavingOngoing(false);
        }
    };

    const handleDeleteOngoingProject = async (id: string): Promise<void> => {
        setMessage('');
        setError('');

        try {
            const response = await fetch(`/api/v1/admin/ongoing-projects/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
            });

            if (handleForbiddenOrUnauthorized(response.status)) {
                return;
            }

            if (!response.ok) {
                setError('Failed to delete ongoing project.');
                return;
            }

            await loadPortfolio();
            setMessage('Ongoing project deleted.');
        } catch (_e) {
            setError('Network error while deleting ongoing project.');
        }
    };

    const handleLogout = async (): Promise<void> => {
        setMessage('');
        setError('');

        try {
            const response = await fetch('/api/v1/auth/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'X-CSRF-TOKEN': csrfToken(),
                },
            });

            if (response.ok) {
                setAdmin(null);
                setMessage('Logged out.');
            } else {
                setError('Logout failed.');
            }
        } catch (_e) {
            setError('Network error while logging out.');
        }
    };

    return (
        <>
            <Head title="Admin" />
            <main className="min-h-screen bg-[radial-gradient(circle_at_10%_15%,rgba(239,68,68,0.55),transparent_42%),radial-gradient(circle_at_88%_8%,rgba(168,85,247,0.38),transparent_45%),linear-gradient(155deg,#2b0f1b,#1d1038_58%,#38133b)] p-5 text-white md:p-8">
                <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-[280px_1fr]">
                    <aside className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/65">
                            Portfolio admin
                        </p>
                        <h1 className="mb-6 text-2xl font-semibold">
                            Control panel
                        </h1>

                        {loading ? (
                            <p className="text-sm text-white/75">Checking session...</p>
                        ) : loggedIn && admin ? (
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3">
                                    {admin.avatar_url ? (
                                        <img
                                            src={admin.avatar_url}
                                            alt="GitHub avatar"
                                            className="h-10 w-10 rounded-full border border-white/40"
                                        />
                                    ) : (
                                        <div className="h-10 w-10 rounded-full bg-white/30" />
                                    )}
                                    <div>
                                        <p className="text-sm font-semibold">
                                            {admin.name ?? admin.github_username}
                                        </p>
                                        <p className="text-xs text-white/75">
                                            @{admin.github_username}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => void handleLogout()}
                                    className="w-full rounded-xl border border-white/30 bg-white/5 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/15"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <a
                                href="/api/v1/auth/github/redirect"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#5f1227] transition hover:bg-white/90"
                            >
                                Login with GitHub
                            </a>
                        )}

                        <p className="mt-6 text-xs text-white/70">
                            Only username kuahcurri can pass server validation.
                        </p>
                    </aside>

                    <section className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl md:p-7">
                        <h2 className="mb-1 text-xl font-semibold">Quick profile editor</h2>
                        <p className="mb-5 text-sm text-white/75">
                            This form writes to /api/v1/admin/profile.
                        </p>

                        {message ? (
                            <div className="mb-4 rounded-xl border border-emerald-300/40 bg-emerald-300/20 px-4 py-3 text-sm">
                                {message}
                            </div>
                        ) : null}

                        {error ? (
                            <div className="mb-4 rounded-xl border border-rose-300/45 bg-rose-300/20 px-4 py-3 text-sm">
                                {error}
                            </div>
                        ) : null}

                        <ProfileForm
                            profile={profile}
                            disabled={!loggedIn}
                            saving={savingProfile}
                            onSubmit={(event) => void handleSave(event)}
                            onChange={(field, value) =>
                                setProfile((prev) => ({
                                    ...prev,
                                    [field]: value,
                                }))
                            }
                        />

                        <SkillsManager
                            skills={skills}
                            disabled={!loggedIn}
                            saving={savingSkill}
                            onSave={handleSaveSkill}
                            onDelete={handleDeleteSkill}
                        />

                        <ExperienceManager
                            experiences={experiences}
                            disabled={!loggedIn}
                            saving={savingExperience}
                            onSave={handleSaveExperience}
                            onDelete={handleDeleteExperience}
                        />

                        <ProjectsManager
                            projects={projects}
                            disabled={!loggedIn}
                            saving={savingProject}
                            onSave={handleSaveProject}
                            onDelete={handleDeleteProject}
                        />

                        <OngoingManager
                            ongoingProjects={ongoingProjects}
                            disabled={!loggedIn}
                            saving={savingOngoing}
                            onSave={handleSaveOngoingProject}
                            onDelete={handleDeleteOngoingProject}
                        />
                    </section>
                </div>
            </main>
        </>
    );
}
