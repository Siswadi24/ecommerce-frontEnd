export default defineNuxtRouteMiddleware(() => {
    const session = useSession()
    if (!session.token) {
        return navigateTo('/login')
    }
})