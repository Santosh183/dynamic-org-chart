import { createReducer, on } from "@ngrx/store";
import { Employee } from "../data/types";
import { LocalStorageService } from "../services/local-storage.service";
import { deleteEmployee, insertEmployee, updateEmployees } from "./employees.actions";

const localStorageS = new LocalStorageService()
export const initialEmployeesState: Employee[] = localStorageS.getEmployees();


// TODO: updating employees to local host need to do using ngRx effects. 

export const getEmplpoyeesReducer = createReducer(
    initialEmployeesState,
    on(updateEmployees, (employees, { employee: employee }) => {
        const toBeEdited = employees.find(emp => emp.id === employee.id);
        if (!toBeEdited) {
            return employees;
        }
        const restEmployees = employees.filter(emp => emp.id !== employee.id);
        const newEmployess = [...restEmployees, employee]
        localStorageS.setEmployees(newEmployess)
        return (newEmployess)
    }),
    on(insertEmployee, (employees, { employee: employee }) => {
        const newEmployess = [...employees, employee]
        localStorageS.setEmployees(newEmployess)
        return newEmployess;
    }),
    on(deleteEmployee, (employees, { id }) => {
        const newEmployees = employees.filter(emp => emp.id !== id);
        localStorageS.setEmployees(newEmployees)
        return [...newEmployees];
    })
);