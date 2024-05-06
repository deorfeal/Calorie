interface Gender {
    female: boolean | null;
    male: boolean | null;
}

interface Goal {
    weightLoss: boolean | null;
    keepWeight: boolean | null;
    gainWeight: boolean | null;
}

export const calc = (
    gender: Gender,
    age: number | null,
    height: number | null,
    weight: number | null,
    fat: number | null,
    goal: Goal,
    everydayActivity: number,
    sportActivity: number
) => {
    // Расчет BMR (базовый метаболизм)
    let BMR;
    if (gender.female) {
        BMR = 655 + (9.6 * (weight !== null ? weight : 0)) + (1.8 * (height !== null ? height : 0)) - (4.7 * (age !== null ? age : 0));
    } else {
        BMR = 66 + (13.7 * (weight !== null ? weight : 0)) + (5 * (height !== null ? height : 0)) - (6.8 * (age !== null ? age : 0));
    }

    // Учет уровня активности
    const activityLevels = [1.2, 1.375, 1.55, 1.725]; // Факторы активности
    const activityFactor = activityLevels[everydayActivity];
    let totalCalories = BMR * activityFactor;

    // Учет уровня спортивной активности
    totalCalories += sportActivity * 200; // Предположим, что каждый час спортивной активности добавляет 200 калорий

    // Учет цели
    if (goal.weightLoss) {
        totalCalories -= 500; // Уменьшаем калорийность для похудения
    } else if (goal.gainWeight) {
        totalCalories += 500; // Увеличиваем калорийность для набора веса
    }

    // Рассчет макронутриентов
    const proteins = (weight !== null ? weight : 0) * 2.2; // Протеины (г)
    const fats = (weight !== null ? weight : 0) * 0.4; // Жиры (г)
    const carbs = (totalCalories - (proteins * 4 + fats * 9)) / 4; // Углеводы (г)

    return {
        "calories": Math.round(totalCalories),
        "proteins": proteins.toFixed(1),
        "carbs": carbs.toFixed(1),
        "fat": fats.toFixed(1)
    };
}