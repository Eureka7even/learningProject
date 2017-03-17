var obj = {};
obj.name = "eureka"
obj.data = "this is some data"

var privateVariable = 5;
obj.getPrivate = function() {
    return privateVariable;
}

export default obj;