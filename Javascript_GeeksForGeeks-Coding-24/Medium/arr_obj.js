let employees_data = [
    {
        employee_id: 1,
        employee_name: "Aman",
    },
    {
        employee_id: 2,
        employee_name: "Bhargava",
    },
    {
        employee_id: 3,
        employee_name: "Chaitanya",
    },
];

let findIndex = 2


for (let object of employees_data) {
    if (object.employee_id === findIndex) {
        object.employee_name = "Santosh";
    }
}
console.log(employees_data);



const modifyObj = employees_data.map((item)=>{
    if(item.employee_id == findIndex){
        return {... item, employee_name:'Sani'}
    }
    return item;
})
console.log(modifyObj)



const modifyProperty = (arr, targetId, newProperty) => {
const targetObj = arr.find(obj => obj.employee_id === targetId);
console.log(targetObj)
    arr.forEach(obj => {
        if (obj.employee_id === targetId) {
            obj.employee_name = newProperty;
        }
    });
};
modifyProperty(employees_data, findIndex, "Ankit");
console.log(employees_data);




