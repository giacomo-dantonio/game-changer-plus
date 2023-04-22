import { RpgPlayer, RpgPlayerHooks, Control, Components } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'NIKKI'
        player.setGraphic('female132')
        player.setHitbox(16, 16)
        player.setComponentsTop(Components.text('{name}'))
        player.changeMap('simplemap')
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('NIKKI: Berghain woohoo, gotta get in queue asap!');
        player.setVariable('AFTER_INTRO', true)
    }
}