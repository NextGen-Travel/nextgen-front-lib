import { execSync } from 'child_process'
import { flow } from 'power-helper'

flow.run(async() => {
    execSync('vue-tsc --declaration --emitDeclarationOnly --outDir types', {
        stdio: 'inherit'
    })
    execSync('vite build --config ./deploy/config.ts', {
        stdio: 'inherit'
    })
})
