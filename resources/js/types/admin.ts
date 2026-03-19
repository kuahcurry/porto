export type AdminMe = {
    id: string;
    github_username: string;
    name: string | null;
    avatar_url: string | null;
};

export type SkillType = 'language' | 'framework' | 'tool';

export type ProfilePayload = {
    full_name: string;
    headline: string;
    short_bio: string;
    long_bio: string;
    photo_url: string;
    email_public: string;
    location: string;
    website_url: string;
};

export type SkillItem = {
    id: string;
    name: string;
    type: SkillType;
    level: number;
    sort_order: number;
};

export type ExperienceItem = {
    id: string;
    role_title: string;
    company_name: string;
    employment_type: string | null;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
    summary: string;
    achievements: string[] | null;
    sort_order: number;
};

export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    tech_stack: string[];
    repo_url: string | null;
    live_url: string | null;
    image_url: string | null;
    started_at: string | null;
    completed_at: string | null;
    featured: boolean;
    sort_order: number;
};

export type OngoingProjectItem = {
    id: string;
    title: string;
    description: string;
    tech_stack: string[];
    status_note: string | null;
    progress_percent: number | null;
    target_date: string | null;
    repo_url: string | null;
    live_url: string | null;
    sort_order: number;
};

export type SkillForm = {
    id: string | null;
    name: string;
    type: SkillType;
    level: string;
    sort_order: string;
};

export type ExperienceForm = {
    id: string | null;
    role_title: string;
    company_name: string;
    employment_type: string;
    start_date: string;
    end_date: string;
    is_current: boolean;
    summary: string;
    achievements_text: string;
    sort_order: string;
};

export type ProjectForm = {
    id: string | null;
    title: string;
    description: string;
    tech_stack_text: string;
    repo_url: string;
    live_url: string;
    image_url: string;
    started_at: string;
    completed_at: string;
    featured: boolean;
    sort_order: string;
};

export type OngoingProjectForm = {
    id: string | null;
    title: string;
    description: string;
    tech_stack_text: string;
    status_note: string;
    progress_percent: string;
    target_date: string;
    repo_url: string;
    live_url: string;
    sort_order: string;
};

export type PortfolioResponse = {
    data?: {
        profile?: Partial<ProfilePayload> | null;
        skills?: SkillItem[];
        experience?: ExperienceItem[];
        projects?: ProjectItem[];
        ongoing_projects?: OngoingProjectItem[];
    };
};
