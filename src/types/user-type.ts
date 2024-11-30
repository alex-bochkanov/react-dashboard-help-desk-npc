import type { Section } from "./section-type";
export type User = {
    id: string;
    name: string;
    position: string;
    department: string;
    level: string;
    workFormat: string;
    gender: string;
    phone: string;
    email: string;
    dateOfBirth: string;
    avatar: string;
    section: Section[];
}
export type Users = User[];