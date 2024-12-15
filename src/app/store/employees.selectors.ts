import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { Employee } from "../data/types";

export const FeatureKey = 'employees'
export const selectEmployeesState = createFeatureSelector<State<Employee[]>>(FeatureKey);
export const getEmployeesSelector = createSelector(selectEmployeesState, (state): State<Employee[]> => state);