import type { ChangeEvent, FormEvent} from 'react';
import { useState } from 'react';
import type { SkillForm, SkillItem, SkillType } from '@/types/admin';

type SkillsManagerProps = {
    skills: SkillItem[];
    disabled: boolean;
    saving: boolean;
    onSave: (form: SkillForm) => Promise<boolean>;
    onDelete: (id: string) => Promise<void>;
};

const emptySkill: SkillForm = {
    id: null,
    name: '',
    type: 'framework',
    level: '3',
    sort_order: '0',
};

export function SkillsManager({
    skills,
    disabled,
    saving,
    onSave,
    onDelete,
}: SkillsManagerProps) {
    const [form, setForm] = useState<SkillForm>(emptySkill);

    const submit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        const success = await onSave(form);

        if (success) {
            setForm(emptySkill);
        }
    };

    return (
        <div className="mt-10 rounded-2xl border border-white/15 bg-black/20 p-4">
            <h3 className="mb-3 text-lg font-semibold">Skills</h3>
            <form onSubmit={(event) => void submit(event)} className="grid gap-3">
                <div className="grid gap-3 md:grid-cols-2">
                    <input
                        value={form.name}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({ ...prev, name: event.target.value }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        placeholder="Skill name"
                        required
                    />
                    <select
                        value={form.type}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                            setForm((prev) => ({
                                ...prev,
                                type: event.target.value as SkillType,
                            }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                    >
                        <option value="language">Language</option>
                        <option value="framework">Framework</option>
                        <option value="tool">Tool</option>
                    </select>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                    <input
                        type="number"
                        min={1}
                        max={5}
                        value={form.level}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setForm((prev) => ({ ...prev, level: event.target.value }))
                        }
                        className="rounded-xl border border-white/30 bg-black/25 px-3 py-2 text-sm"
                        placeholder="Level 1-5"
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
                <div className="flex flex-wrap gap-2">
                    <button
                        type="submit"
                        disabled={disabled || saving}
                        className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#641034] disabled:opacity-50"
                    >
                        {saving ? 'Saving...' : form.id ? 'Update skill' : 'Add skill'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setForm(emptySkill)}
                        className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold"
                    >
                        Clear
                    </button>
                </div>
            </form>

            <div className="mt-4 grid gap-2">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
                    >
                        <div>
                            {skill.name} ({skill.type}) level {skill.level}
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() =>
                                    setForm({
                                        id: skill.id,
                                        name: skill.name,
                                        type: skill.type,
                                        level: String(skill.level),
                                        sort_order: String(skill.sort_order),
                                    })
                                }
                                className="rounded-lg border border-white/30 px-3 py-1"
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() => void onDelete(skill.id)}
                                className="rounded-lg border border-rose-300/45 bg-rose-300/15 px-3 py-1"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
