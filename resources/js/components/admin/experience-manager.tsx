import { ChangeEvent, FormEvent, useState } from 'react';
import { ExperienceForm, ExperienceItem } from '@/types/admin';

type ExperienceManagerProps = {
    experiences: ExperienceItem[];
    disabled: boolean;
    saving: boolean;
    onSave: (form: ExperienceForm) => Promise<boolean>;
    onDelete: (id: string) => Promise<void>;
};

const emptyExperience: ExperienceForm = {
    id: null,
    role_title: '',
    company_name: '',
    employment_type: '',
    start_date: '',
    end_date: '',
    is_current: false,
    summary: '',
    achievements_text: '',
    sort_order: '0',
};

export function ExperienceManager({
    experiences,
    disabled,
    saving,
    onSave,
    onDelete,
}: ExperienceManagerProps) {
    const [form, setForm] = useState<ExperienceForm>(emptyExperience);

    const submit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        const success = await onSave(form);

        if (success) {
            setForm(emptyExperience);
        }
    };

    return (
        <div className="mt-6 rounded-2xl border border-white/15 bg-black/20 p-4">
            <h3 className="mb-3 text-lg font-semibold">Experience</h3>
            <form onSubmit={(event) => void submit(event)} className="grid gap-3">
                <div className="grid gap-3 md:grid-cols-2">
                    <input
                        value={form.role_title}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                role_title: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        placeholder="Role title"
                        required
                    />
                    <input
                        value={form.company_name}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                company_name: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        placeholder="Company"
                        required
                    />
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                    <input
                        value={form.employment_type}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                employment_type: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        placeholder="Employment type"
                    />
                    <input
                        value={form.start_date}
                        type="date"
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                start_date: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        required
                    />
                    <input
                        value={form.end_date}
                        type="date"
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                end_date: event.target.value,
                            }))
                        }
                        disabled={form.is_current}
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm disabled:opacity-50"
                    />
                </div>
                <label className="flex items-center gap-2 rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm">
                    <input
                        type="checkbox"
                        checked={form.is_current}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                is_current: event.target.checked,
                            }))
                        }
                    />
                    Current role
                </label>
                <input
                    type="number"
                    min={0}
                    value={form.sort_order}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setForm((prev) => ({
                            ...prev,
                            sort_order: event.target.value,
                        }))
                    }
                    className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    placeholder="Sort order"
                />
                <textarea
                    value={form.summary}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        setForm((prev) => ({ ...prev, summary: event.target.value }))
                    }
                    rows={3}
                    className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    placeholder="Summary"
                    required
                />
                <textarea
                    value={form.achievements_text}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        setForm((prev) => ({
                            ...prev,
                            achievements_text: event.target.value,
                        }))
                    }
                    rows={3}
                    className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    placeholder="Achievements, one line each"
                />
                <div className="flex flex-wrap gap-2">
                    <button
                        type="submit"
                        disabled={disabled || saving}
                        className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#641034] disabled:opacity-50"
                    >
                        {saving
                            ? 'Saving...'
                            : form.id
                              ? 'Update experience'
                              : 'Add experience'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setForm(emptyExperience)}
                        className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold"
                    >
                        Clear
                    </button>
                </div>
            </form>

            <div className="mt-4 grid gap-2">
                {experiences.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                                {item.role_title} @ {item.company_name}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setForm({
                                            id: item.id,
                                            role_title: item.role_title,
                                            company_name: item.company_name,
                                            employment_type: item.employment_type ?? '',
                                            start_date: item.start_date ?? '',
                                            end_date: item.end_date ?? '',
                                            is_current: item.is_current,
                                            summary: item.summary,
                                            achievements_text: (
                                                item.achievements ?? []
                                            ).join('\n'),
                                            sort_order: String(item.sort_order),
                                        })
                                    }
                                    className="rounded-lg border border-white/30 px-3 py-1"
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    onClick={() => void onDelete(item.id)}
                                    className="rounded-lg border border-rose-300/45 bg-rose-300/15 px-3 py-1"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
