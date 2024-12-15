import { createReducer, on } from "@ngrx/store";
import { Employee } from "../data/types";
import { LocalStorageService } from "../services/local-storage.service";
import { deleteEmployee, insertEmployee, updateEmployee } from "./employees.actions";

const localStorageS = new LocalStorageService()
export const initialEmployeesState: Employee[] = localStorageS.getEmployees();


// TODO: updating employees to local host need to do using ngRx effects. 

export const getEmplpoyeesReducer = createReducer(
    initialEmployeesState,
    on(updateEmployee, (employees, { employee: employee }) => {
        const newEmployees = employees.map((emp) => emp.id === employee.id ? employee : emp);
        localStorageS.setEmployees(newEmployees)
        return newEmployees;
    }),
    on(insertEmployee, (employees, { employee: employee }) => {
        const newEmployess = [...employees, employee]
        localStorageS.setEmployees(newEmployess)
        return newEmployess;
    }),
    on(deleteEmployee, (employees, { employee: employee }) => {
        // meed to nbe cautious not mutating original state. 
        // TODO: this logic can be outsourced
        let newEmployees = employees.filter(emp => emp.id !== employee.id).map((filtEmp) => {
            if (filtEmp.managerId === employee.id) {
                return {
                    ...filtEmp,
                    managerId: employee.managerId
                }
            }
            return filtEmp;
        })
        localStorageS.setEmployees(newEmployees)
        return [...newEmployees];
    })
); 