export const salaryFormatting = (minSalary, maxSalary, currencyCode) =>{
    if(!minSalary && !maxSalary) return null
    else if(!minSalary) return maxSalary + "K " + currencyCode;
    else if(!maxSalary) return minSalary + "K " + currencyCode;
    else{
        return minSalary + "K - " + maxSalary + "K " + currencyCode;
    }
}