export interface Equation {
    data: string
}

export const NEW_EQUATION = "NEW_EQUATION";

interface SolveEquationAction {
    type: typeof NEW_EQUATION;
    payload: Equation;
  }
  
  export type EquationActionTypes = SolveEquationAction;
  