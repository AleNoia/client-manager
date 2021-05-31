function creator() {
    // ======================================== [ABBREVIATION OF NAMES]
    function createName(name) {
        let arrayName = name.split(' ')

        if (arrayName.length > 3) {

            let smallerName2 = arrayName[2].split("").slice(0, 1).join() + '.';
            arrayName[2] = smallerName2
            if (arrayName.length > 4) {
                let smallerName3 = arrayName[3].split("").slice(0, 1).join() + '.';
                arrayName[3] = smallerName3
            }
            var newName = arrayName.join(" ")
            return newName
        }

        // else 
        return name
    }

    // ======================================== [GENERATE AGE ACCORDING TO DATE OF BIRTH]
    function createAge(date){

        const now = new Date()
        let thisYear = now.getFullYear()
        let arrayDate = date.toString().split("/");
        let yearBirthday = arrayDate[2]
        let birthday = thisYear - yearBirthday
        return birthday

    }
    
    // ======================================== [RETURNING FUNCTIONS]
    return {

        createName,
        createAge

    }
}

export default creator;