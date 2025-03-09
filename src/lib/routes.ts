
export const routes = {
    "base": "/api",
    "home": "home",
    "about": "about",
    "contact": "contact",
    "products": "products",
    "services": "services",
    "careers": "careers",
    "company": "company",
    "solutions": "solutions",
    "login": "login",
    "register": "register",
    "logout": "logout",
    "profile": "profile",
    "dashboard": "dashboard",
}

// read the api base url from the environment
export const apiBaseUrl = process.env.API_BASE_URL || "http://localhost:8000";