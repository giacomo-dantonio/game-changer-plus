import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 64,
        height: 32
    }
})
export class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('male012')
    }
    // async onAction(player: RpgPlayer) {
    //     if (player.getVariable('GOLD')) {
    //         player.showText('I already gave you gold!')
    //         return
    //     }
    //     await player.showText('I give you 10 gold')
    //     player.gold += 10
    //     player.setVariable('GOLD', true)
    // }

    onPlayerTouch(player: RpgPlayer) {
        if(!player.getVariable('FIGHT')){
            player.showText('What are you wearing? Given all that time you were in the closet!');
            player.setVariable('FIGHT', true)
            
        }


    }
} 