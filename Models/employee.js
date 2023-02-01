const mongoose = require('mongoose');
const EmployeeSchema = mongoose.Schema(
    {
        name: String,
        position: String,
        location: String,
        salary: String
    }
);
var EmployeeModel = mongoose.model('employees', EmployeeSchema);
module.exports = { EmployeeModel }
