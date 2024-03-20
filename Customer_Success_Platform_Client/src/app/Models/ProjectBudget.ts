export interface ProjectBudget{
    id: string,
    type:Number,
    durationInMonths:Number,
    budgetedHours:Number,
    contractDuration:Number,
    budgetedCost:Number,
    currency:string,
    projectId:string
}