import ProfileController from './ProfileController'
import SkillController from './SkillController'
import ExperienceController from './ExperienceController'
import ProjectController from './ProjectController'
import OngoingProjectController from './OngoingProjectController'
const Admin = {
    ProfileController: Object.assign(ProfileController, ProfileController),
SkillController: Object.assign(SkillController, SkillController),
ExperienceController: Object.assign(ExperienceController, ExperienceController),
ProjectController: Object.assign(ProjectController, ProjectController),
OngoingProjectController: Object.assign(OngoingProjectController, OngoingProjectController),
}

export default Admin