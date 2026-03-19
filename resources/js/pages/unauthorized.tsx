import { Head } from '@inertiajs/react';

export default function Unauthorized() {
    const reason =
        typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search).get('reason')
            : null;

    const message =
        reason === 'forbidden_user'
            ? 'Your GitHub account is not allowed to access this dashboard.'
            : 'Authentication failed. Please try again.';

    return (
        <>
            <Head title="Unauthorized" />
            <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.45),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(147,51,234,0.35),transparent_40%),linear-gradient(145deg,#250913,#1b1032_50%,#2d1038)] p-6 text-white">
                <div className="mx-auto flex min-h-[88vh] w-full max-w-3xl items-center justify-center">
                    <section className="w-full rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur-xl md:p-10">
                        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/70">
                            Access denied
                        </p>
                        <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
                            GitHub authentication rejected
                        </h1>
                        <p className="mb-8 text-base text-white/85">{message}</p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/api/v1/auth/github/redirect"
                                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#5a1222] transition hover:bg-white/90"
                            >
                                Try GitHub login again
                            </a>
                            <a
                                href="/"
                                className="rounded-xl border border-white/35 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to home
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
