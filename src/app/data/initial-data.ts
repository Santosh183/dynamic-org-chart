import { DesignationEnum, Employee } from "./types";

export const initialData: Employee[] = [
    {
        id: 1,
        name: 'John Doe',
        designation: DesignationEnum.CEO,
        email: 'john.doe@company.com',
        phone: '+91-8343334344',
    },
    {
        id: 2,
        name: 'Sarah Lee',
        designation: DesignationEnum.HeadOfEngineering,
        email: 'Sarah.Lee@company.com',
        phone: '+9148343334354',
        managerId: 1,
    },
    {
        id: 3,
        name: 'Micheal Brown',
        designation: DesignationEnum.HeadOfSales,
        email: 'Micheal.Brown@company.com',
        phone: '+91-8343334344',
        managerId: 1,
    },
    {
        id: 4,
        name: 'James Carter',
        designation: DesignationEnum.EngineeringManager,
        email: 'James.Carter@company.com',
        phone: '+91-6342674344',
        managerId: 2,
    },
    {
        id: 5,
        name: 'Esther Lukmia',
        designation: DesignationEnum.UxEngineer,
        email: 'Esther.Lukmia@company.com',
        phone: '+91-7843334345',
        managerId: 2,
    }
]