let Generator = {
    getTotalSavings: (data) => {
        let totalSavings = 0;

        for(let year in data){
            for(let month in data[year]){
                for(let day in data[year][month]){
                    for(let transaction in data[year][month][day]){
                        transaction = data[year][month][day][transaction]
                        if(transaction.type === "Savings"){
                            totalSavings += parseInt(transaction.amount);
                        }
                    }
                }
            }
        }

        return totalSavings;
    }
};
module.exports = Generator;