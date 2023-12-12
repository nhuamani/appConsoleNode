let autputMessage = ''
const table = 5
const headerMessage = `
===================================
            Tabla del ${table}      
===================================
`
console.log(headerMessage)
for (let i = 0; i <= 10; i++) {
    console.log(`${table} x ${i} = ${table * i}`)
}
