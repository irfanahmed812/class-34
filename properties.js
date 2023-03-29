const boll = {
    color: 'black',
    shape: 'circle',
    price: 150,
    isCleaned: true
}

/* keys */
// const keys = Object.keys(boll);
// console.log(keys);

/* values */
// const values = Object.values(boll);
// console.log(values);

/* keys and values */
// const keysAndValues = Object.entries(boll);
// console.log(keysAndValues);

/* change object values and delete object */

// Object.seal(boll);
// delete boll.isCleaned;
// boll.price = 500;
// delete boll.shape;
// console.log(boll);

const bolls = {
    color: 'black',
    shape: 'circle',
    price: 150,
    isClean: true
}

for (const boll of bolls) {
    // console.log(boll, bolls[boll]);
}

const keys = Object.keys(bolls);
// console.log(keys);
for (const key of keys) {
    // console.log(key, bolls[key]);
}

const entries = Object.entries(bolls);
// console.log(entries);
// const [key, value] = ['color', 'yellow']

for (const [key, value] of Object.entries(bolls)) {
    // console.log(key, value);
}