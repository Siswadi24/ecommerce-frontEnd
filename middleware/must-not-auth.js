export default defineNuxtRouteMiddleware(() => {
    const session = useSession()
    if (session.token) {
        return navigateTo('/my-account/profile')
    }
})