import { ChangeEvent, FormEvent, useState } from 'react';
import { ProjectForm, ProjectItem } from '@/types/admin';

type ProjectsManagerProps = {
    projects: ProjectItem[];
    disabled: boolean;
    saving: boolean;
    onSave: (form: ProjectForm) => Promise<boolean>;
    onDelete: (id: string) => Promise<void>;
};

const emptyProject: ProjectForm = {
    id: null,
    title: '',
    description: '',
    tech_stack_text: '',
    repo_url: '',
    live_url: '',
    image_url: '',
    started_at: '',
    completed_at: '',
    featured: false,
    sort_order: '0',
};

export function ProjectsManager({
    projects,
    disabled,
    saving,
    onSave,
    onDelete,
}: ProjectsManagerProps) {
    const [form, setForm] = useState<ProjectForm>(emptyProject);

    const submit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        const success = await onSave(form);

        if (success) {
            setForm(emptyProject);
        }
    };

    return (
        <div className="mt-6 rounded-2xl border border-white/15 bg-black/20 p-4">
            <h3 className="mb-3 text-lg font-semibold">Projects</h3>
            <form onSubmit={(event) => void submit(event)} className="grid gap-3">
                <input
                    value={form.title}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setForm((prev) => ({ ...prev, title: event.target.value }))
                    }
                    className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    placeholder="Project title"
                    required
                />
                <textarea
                    value={form.description}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        setForm((prev) => ({
                            ...prev,
                            description: event.target.value,
                        }))
                    }
                    rows={3}
                    className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    placeholder="Project description"
                    required
                />
                <input
                    value={form.tech_stack_text}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setForm((prev) => ({
                            ...prev,
                            tech_stack_text: event.target.value,
                        }))
                    }
                    className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    placeholder="Tech stack (comma separated)"
                    required
                />
                <div className="grid gap-3 md:grid-cols-2">
                    <input
                        value={form.repo_url}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                repo_url: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        placeholder="Repo URL"
                    />
                    <input
                        value={form.live_url}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                live_url: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        placeholder="Live URL"
                    />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                    <input
                        value={form.image_url}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                image_url: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        placeholder="Image URL"
                    />
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
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                    <input
                        type="date"
                        value={form.started_at}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                started_at: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    />
                    <input
                        type="date"
                        value={form.completed_at}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                completed_at: event.target.value,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    />
                    <label className="flex items-center gap-2 rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm">
                        <input
                            type="checkbox"
                            checked={form.featured}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                setForm((prev) => ({
                                    ...prev,
                                    featured: event.target.checked,
                                }))
                            }
                        />
                        Featured
                    </label>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button
                        type="submit"
                        disabled={disabled || saving}
                        className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#641034] disabled:opacity-50"
                    >
                        {saving
                            ? 'Saving...'
                            : form.id
                              ? 'Update project'
                              : 'Add project'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setForm(emptyProject)}
                        className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold"
                    >
                        Clear
                    </button>
                </div>
            </form>

            <div className="mt-4 grid gap-2">
                {projects.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                                {item.title} · {item.tech_stack.join(', ')}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setForm({
                                            id: item.id,
                                            title: item.title,
                                            description: item.description,
                                            tech_stack_text: item.tech_stack.join(
                                                ', ',
                                            ),
                                            repo_url: item.repo_url ?? '',
                                            live_url: item.live_url ?? '',
                                            image_url: item.image_url ?? '',
                                            started_at: item.started_at ?? '',
                                            completed_at: item.completed_at ?? '',
                                            featured: item.featured,
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
