import fs from 'fs'

let outputMessage = ''
const table = 5
const headerMessage = `
===================================
            Tabla del ${table}      
===================================\n
`

for (let i = 0; i <= 10; i++) {
    outputMessage += `${table} x ${i} = ${table * i}\n`
}

outputMessage = headerMessage + outputMessage

console.log(outputMessage)

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/table-${table}.txt`, outputMessage)
