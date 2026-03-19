import AuthController from './AuthController'
import PublicPortfolioController from './PublicPortfolioController'
import Admin from './Admin'
const V1 = {
    AuthController: Object.assign(AuthController, AuthController),
PublicPortfolioController: Object.assign(PublicPortfolioController, PublicPortfolioController),
Admin: Object.assign(Admin, Admin),
}

export default V1