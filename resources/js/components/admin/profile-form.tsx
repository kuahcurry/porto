import type { ChangeEvent, FormEvent } from 'react';
import type { ProfilePayload } from '@/types/admin';

type ProfileFormProps = {
    profile: ProfilePayload;
    disabled: boolean;
    saving: boolean;
    onSubmit: (event: FormEvent) => void;
    onChange: (field: keyof ProfilePayload, value: string) => void;
};

export function ProfileForm({
    profile,
    disabled,
    saving,
    onSubmit,
    onChange,
}: ProfileFormProps) {
    return (
        <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm">
                    <span className="text-white/85">Full name</span>
                    <input
                        value={profile.full_name}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('full_name', event.target.value)
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-white placeholder:text-white/50"
                        required
                    />
                </label>

                <label className="grid gap-2 text-sm">
                    <span className="text-white/85">Headline</span>
                    <input
                        value={profile.headline}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('headline', event.target.value)
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-white placeholder:text-white/50"
                        required
                    />
                </label>
            </div>

            <label className="grid gap-2 text-sm">
                <span className="text-white/85">Short bio</span>
                <textarea
                    value={profile.short_bio}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        onChange('short_bio', event.target.value)
                    }
                    rows={4}
                    className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-white placeholder:text-white/50"
                    required
                />
            </label>

            <label className="grid gap-2 text-sm">
                <span className="text-white/85">Long bio</span>
                <textarea
                    value={profile.long_bio}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        onChange('long_bio', event.target.value)
                    }
                    rows={3}
                    className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-white placeholder:text-white/50"
                />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm">
                    <span className="text-white/85">Photo URL</span>
                    <input
                        value={profile.photo_url}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('photo_url', event.target.value)
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-white placeholder:text-white/50"
                    />
                </label>

                <label className="grid gap-2 text-sm">
                    <span className="text-white/85">Location</span>
                    <input
                        value={profile.location}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('location', event.target.value)
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-white placeholder:text-white/50"
                    />
                </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm">
                    <span className="text-white/85">Public email</span>
                    <input
                        value={profile.email_public}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('email_public', event.target.value)
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-white placeholder:text-white/50"
                    />
                </label>

                <label className="grid gap-2 text-sm">
                    <span className="text-white/85">Website URL</span>
                    <input
                        value={profile.website_url}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('website_url', event.target.value)
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-white placeholder:text-white/50"
                    />
                </label>
            </div>

            <button
                type="submit"
                disabled={disabled || saving}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#641034] transition disabled:cursor-not-allowed disabled:opacity-50 hover:bg-white/90"
            >
                {saving ? 'Saving...' : 'Save profile'}
            </button>
        </form>
    );
}
