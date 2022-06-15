function checkObj(obj, checkProp){
    if(obj.hasOwnProperty(checkProp)){
        return onj[checkProp]
    }else {
        return "Not Found"
    }
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))