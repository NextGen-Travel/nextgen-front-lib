import { getLibEnv } from '../../index'
import { Interaction } from 'power-helper'
import { parseMessage } from '../../utils/message'

export class NextgenInteraction extends Interaction {
    constructor() {
        super({
            name: 'root',
            interceptorMessage(data: any) {
                return parseMessage(data, 'Error!')
            }
        })
        const print = () => {
            let env = getLibEnv()
            if (env.stage !== 'prod') {
                console.log('interaction fail:')
                console.log(this)
                this.each(e => {
                    const time = (new Date(e.createdAt)).toISOString()
                    console.log(`[${time}]${e.checkoutAt} => ${e.type}: ${e.message}`)
                })
            }
        }
        this.on('action', step => {
            if (step.type === 'wrong') {
                print()
            }
            if (step.type === 'notify' && step.level === 'danger') {
                print()
            }
        })
    }
}
