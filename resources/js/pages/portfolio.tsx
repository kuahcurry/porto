import { Head, Link } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import { apiUrl } from '@/lib/api';

type SkillType = 'language' | 'framework' | 'tool';

type Profile = {
    full_name: string;
    headline: string;
    short_bio: string;
    long_bio: string | null;
    photo_url: string | null;
    email_public: string | null;
    location: string | null;
    website_url: string | null;
};

type Skill = {
    id: string;
    name: string;
    type: SkillType;
    level: number;
};

type Experience = {
    id: string;
    role_title: string;
    company_name: string;
    employment_type: string | null;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
    summary: string;
};

type Project = {
    id: string;
    title: string;
    description: string;
    tech_stack: string;
    repo_url: string | null;
    live_url: string | null;
    featured: boolean;
};

type OngoingProject = {
    id: string;
    title: string;
    description: string;
    status_note: string | null;
    progress_percent: number | null;
};

type PortfolioPayload = {
    profile: Profile | null;
    skills: Skill[];
    experience: Experience[];
    projects: Project[];
    ongoing_projects: OngoingProject[];
};

export default function Portfolio() {
    const [data, setData] = useState<PortfolioPayload | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadPortfolio() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(apiUrl('/api/v1/public/portfolio'));

                if (!response.ok) {
                    throw new Error(`Failed to load portfolio (${response.status}).`);
                }

                const payload = (await response.json()) as { data: PortfolioPayload };

                if (!cancelled) {
                    setData(payload.data);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : 'Failed to load portfolio data.');
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }

        void loadPortfolio();

        return () => {
            cancelled = true;
        };
    }, []);

    const groupedSkills = useMemo(() => {
        const empty: Record<SkillType, Skill[]> = {
            language: [],
            framework: [],
            tool: [],
        };

        for (const skill of data?.skills ?? []) {
            empty[skill.type].push(skill);
        }

        return empty;
    }, [data?.skills]);

    const profile = data?.profile;

    return (
        <>
            <Head title={profile?.full_name ? `${profile.full_name} | Portfolio` : 'Portfolio'} />
            <main className="min-h-screen bg-slate-950 text-slate-100">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10 lg:px-8">
                    <header className="flex items-center justify-between border-b border-slate-800 pb-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Personal Portfolio</p>
                        <Link
                            href="/admin"
                            className="rounded border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500"
                        >
                            Open admin
                        </Link>
                    </header>

                    {isLoading && (
                        <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
                            <p className="text-slate-300">Loading portfolio...</p>
                        </section>
                    )}

                    {error && (
                        <section className="rounded-2xl border border-rose-700/50 bg-rose-950/30 p-8">
                            <p className="font-medium text-rose-200">Could not load portfolio</p>
                            <p className="mt-2 text-sm text-rose-300">{error}</p>
                        </section>
                    )}

                    {!isLoading && !error && (
                        <>
                            <section className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
                                    <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
                                        {profile?.full_name ?? 'Your Name'}
                                    </h1>
                                    <p className="mt-3 text-xl text-cyan-300">
                                        {profile?.headline ?? 'Portfolio headline goes here'}
                                    </p>
                                    <p className="mt-6 max-w-2xl text-slate-300">
                                        {profile?.short_bio ?? 'Add your profile in admin to show your introduction here.'}
                                    </p>
                                    {profile?.long_bio && <p className="mt-4 text-slate-400">{profile.long_bio}</p>}
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
                                    <h2 className="text-sm uppercase tracking-[0.18em] text-slate-400">Contact</h2>
                                    <div className="mt-4 space-y-3 text-sm text-slate-200">
                                        {profile?.email_public && <p>{profile.email_public}</p>}
                                        {profile?.location && <p>{profile.location}</p>}
                                        {profile?.website_url && (
                                            <a
                                                href={profile.website_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-block text-cyan-300 hover:text-cyan-200"
                                            >
                                                {profile.website_url}
                                            </a>
                                        )}
                                        {!profile?.email_public && !profile?.location && !profile?.website_url && (
                                            <p className="text-slate-400">Add public contact details from admin.</p>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
                                <h2 className="text-2xl font-semibold">Skills</h2>
                                <div className="mt-6 grid gap-6 md:grid-cols-3">
                                    {(['language', 'framework', 'tool'] as const).map((type) => (
                                        <div key={type}>
                                            <h3 className="text-sm uppercase tracking-[0.16em] text-slate-400">{type}</h3>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {groupedSkills[type].length > 0 ? (
                                                    groupedSkills[type].map((skill) => (
                                                        <span
                                                            key={skill.id}
                                                            className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-200"
                                                        >
                                                            {skill.name}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <p className="text-sm text-slate-500">No items yet.</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
                                <h2 className="text-2xl font-semibold">Experience</h2>
                                <div className="mt-6 space-y-6">
                                    {data?.experience.length ? (
                                        data.experience.map((item) => (
                                            <article key={item.id} className="border-l border-slate-700 pl-4">
                                                <h3 className="text-lg font-medium text-slate-100">
                                                    {item.role_title} • {item.company_name}
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-400">
                                                    {item.start_date} - {item.is_current ? 'Present' : (item.end_date ?? 'N/A')}
                                                </p>
                                                <p className="mt-2 text-slate-300">{item.summary}</p>
                                            </article>
                                        ))
                                    ) : (
                                        <p className="text-slate-500">No experience entries yet.</p>
                                    )}
                                </div>
                            </section>

                            <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
                                <h2 className="text-2xl font-semibold">Projects</h2>
                                <div className="mt-6 grid gap-4 md:grid-cols-2">
                                    {data?.projects.length ? (
                                        data.projects.map((project) => (
                                            <article
                                                key={project.id}
                                                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
                                            >
                                                <h3 className="text-lg font-medium text-slate-100">{project.title}</h3>
                                                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                                                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-slate-500">
                                                    {project.tech_stack}
                                                </p>
                                                <div className="mt-4 flex gap-4 text-sm">
                                                    {project.repo_url && (
                                                        <a
                                                            href={project.repo_url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-cyan-300 hover:text-cyan-200"
                                                        >
                                                            Repo
                                                        </a>
                                                    )}
                                                    {project.live_url && (
                                                        <a
                                                            href={project.live_url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-cyan-300 hover:text-cyan-200"
                                                        >
                                                            Live
                                                        </a>
                                                    )}
                                                </div>
                                            </article>
                                        ))
                                    ) : (
                                        <p className="text-slate-500">No projects yet.</p>
                                    )}
                                </div>
                            </section>

                            <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
                                <h2 className="text-2xl font-semibold">Currently Building</h2>
                                <div className="mt-6 space-y-4">
                                    {data?.ongoing_projects.length ? (
                                        data.ongoing_projects.map((item) => (
                                            <article key={item.id} className="rounded-lg border border-slate-800 p-4">
                                                <h3 className="font-medium text-slate-100">{item.title}</h3>
                                                <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                                                {item.status_note && (
                                                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-500">
                                                        {item.status_note}
                                                    </p>
                                                )}
                                                {typeof item.progress_percent === 'number' && (
                                                    <p className="mt-2 text-sm text-cyan-300">
                                                        Progress: {item.progress_percent}%
                                                    </p>
                                                )}
                                            </article>
                                        ))
                                    ) : (
                                        <p className="text-slate-500">No ongoing projects yet.</p>
                                    )}
                                </div>
                            </section>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}
