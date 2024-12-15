export enum DesignationEnum {
    CEO = 'Cheif Executive Officer (CEO)',
    HeadOfEngineering = 'Head of Enginerering',
    HeadOfSales = 'Head of Sales',
    HeadOfMarketing = 'Head of Marketing',
    EngineeringManager = 'Engineering Manager',
    UxEngineer = 'UX Engineer',
    SalesExecutive = 'Sales Executive',
    DevOpsEngineer = 'Devops Engineer'
}


export type Employee = {
    name: string;
    id: number;
    designation: DesignationEnum;
    email: string;
    phone: string;
    managerId?: number;
}