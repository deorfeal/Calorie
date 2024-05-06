
interface Goal {
    weightLoss: boolean | null;
    keepWeight: boolean | null;
    gainWeight: boolean | null;
}

export function checkGoal(value: Goal) {
    return Object.values(value).some(val => val !== null);
}