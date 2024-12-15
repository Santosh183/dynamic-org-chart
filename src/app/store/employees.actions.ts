import { createAction, props } from "@ngrx/store";
import { Employee } from "../data/types";

export enum ActionTypes {
    INSERT_EMPLOYEE = 'INSERT_EMPLOYEE',
    UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE',
    DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
    RESET_DATA = 'RESET_DATA'
}

export const updateEmployee = createAction(
    ActionTypes.UPDATE_EMPLOYEE,
    props<{ employee: Employee }>()
);

export const deleteEmployee = createAction(
    ActionTypes.DELETE_EMPLOYEE,
    props<{ employee: Employee }>()
);

export const insertEmployee = createAction(
    ActionTypes.INSERT_EMPLOYEE,
    props<{ employee: Employee }>()
);
export const resetData = createAction(
    ActionTypes.RESET_DATA,
    props<{ newEmployees: Employee[] | undefined }>()
);