enum AppRoute {
    defaultWildcard = '*',
    defaultRoot = '/',
    defaultEmpty = '',

    projects = "projects",
    appKeys = 'keys',
    appCircuit = 'circuit'
}

namespace AppRoute {
    export function routerLink(path: AppRoute) {
        return `/${path}`
    }

    export function fromString(pathString: string): AppRoute | undefined {
        return (<any>Object).values(AppRoute).find((path: AppRoute) => { return path === pathString })
	}
}

export default AppRoute
