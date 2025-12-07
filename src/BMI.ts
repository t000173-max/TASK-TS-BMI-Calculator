/**
 * Calculate BMI
 */
function calculateBMI(weight: number, height: number): number {
    const heightMeter = height / 100;
    const BMI = weight / (heightMeter * heightMeter);
    return BMI;
}

/**
 * Get BMI State
 */
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
    let BMIState: BMIStatus = "obese";

    if (BMI < 18.5) {
        BMIState = "underweight";
    } else if (BMI < 25) {
        BMIState = "healthy";
    } else if (BMI < 30) {
        BMIState = "overweight";
    } else {
        BMIState = "obese";
    }

    return BMIState;
}

/**
 * Get BMI State By Age
 */
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
    const ageRanges = [
        { minAge: 19, maxAge: 24, minBMI: 19, maxBMI: 24 },
        { minAge: 25, maxAge: 34, minBMI: 20, maxBMI: 25 },
        { minAge: 35, maxAge: 44, minBMI: 21, maxBMI: 26 },
        { minAge: 45, maxAge: 54, minBMI: 22, maxBMI: 27 },
        { minAge: 55, maxAge: 64, minBMI: 23, maxBMI: 28 },
        { minAge: 65, maxAge: Infinity, minBMI: 24, maxBMI: 29 },
    ];

    const healthyRange = ageRanges.find(
        ({ minAge, maxAge }) => age >= minAge && age <= maxAge
    );

    if (!healthyRange) {
        return "not healthy";
    }

    if (BMI <= healthyRange.minBMI || BMI >= healthyRange.maxBMI) {
        return "not healthy";
    } else {
        return "healthy";
    }
}

export { calculateBMI, getBMIState, getBMIStateByAge };

