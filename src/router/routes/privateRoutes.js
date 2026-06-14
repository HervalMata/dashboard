import {sellerRoutes} from "./sellerRoutes";
import {adminRoutes} from "./AdminRoutes";

export const privateRoutes = [
    ...adminRoutes,
    ...sellerRoutes
]
