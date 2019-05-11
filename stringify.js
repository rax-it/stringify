function stringify(obj) {
    const keys = Object.keys(obj);
    let result = '{ ';
    
    let handleArray = (arr) => {
        let array_string = '[ ';
        let value = [];
            for(let v of arr) {
                if(typeof(v) === 'boolean') {
                    v ? value.push('true'): value.push('false');
                }
                else if(typeof(v) === 'number') {
                    value.push(v);
                }
                else if(typeof(val) === 'object' && val.length >=0) {
                    value.push(handleArray(v));
                }
                else if(typeof(v) === 'object') {
                    value.push(stringify(v));
                }
				else value.push(v);
            }
            return array_string.concat(value.join(', ')).concat(' ]');
    }
    
    for (let key of keys) {
        let val = obj[key];
        if(typeof val === 'boolean'){
			val = val ? 'true': 'false';
        }
        else if(typeof(val) === 'object' && val === null) {
            val = 'null';
        }
        // array
        else if(typeof(val) === 'object' && val.length >=0) {
            val = handleArray(val);
        }
        //nested object
        else if(typeof(val) === 'object') {
            val = stringify(val);
        }
        result = result.concat(`"${key}": "${val}"`);
    }
    return result.concat(' }');
    // return JSON string
}

console.log(stringify({ foo: ["foo", 10, false, { bar: "foo" }] }));

// stringify({ foo: 'bar' }) // { "foo": "bar" }
// stringify({ foo: true }) // { "foo": true }
// stringify({ foo: 10 }) // { "foo": 10 }
// stringify({ foo: null }) // { "foo": null }
// stringify({ foo: ["foo", 10, false, { bar: "foo" }] }) // { "foo": ["foo", 10, false, { "bar": "foo" }] }
