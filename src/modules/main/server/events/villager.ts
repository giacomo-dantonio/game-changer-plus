import { RpgEvent, EventData, RpgPlayer, Move } from '@rpgjs/server'


@EventData({
    name: 'EV-1',
    hitbox: {
        width: 64,
        height: 32
    }
})
export class VillagerEvent extends RpgEvent {
    onInit(player: RpgPlayer) {
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

    async onPlayerTouch(player: RpgPlayer) {
        if (!player.getVariable('CONFRONTED')) {
            while (true) {
                await player.showText('MR. MISERABLE: *UGH* Disgusting tranny, hate to see those unmanly persones! You’re not a real girl! How people like you even dare to show up in public?');

                const choice = await player.showChoices('*GASP* What are you gonna do?', [
                    { text: 'Attack with kung fu', value: 'kungFu' },
                    { text: 'Ask for help to bouncer', value: 'bouncer' },
                    { text: 'Kill with kindness', value: 'kind' },
                    { text: '* Side-eye *', value: 'nonViolent' },
                ])

                if (choice?.value == 'kungFu') {
                    await player.showText('Kung Fu and violence in general is only an option when you can’t communicate and have no other choice. Maybe you can try another option?')

                } else if (choice?.value == 'bouncer') {
                    await player.showText('NIKKI: You want me to get the bouncer and get you a life-time Hausverbot?');
                    await player.showText('MR. MISERABLE: Yike! Pls chill! sorry');
                    await player.showText('Appropriate in this situation, especially if the person looks aggressive and not ready to communicate');
                    player.setVariable('CONFRONTED', true)
                    break;

                } else if (choice?.value == 'kind') {
                    await player.showText('NIKKI: Hallo? When you talk to me with this tone, I feel angry and sad, because my need for respect is not fulfilled.');
                    await player.showText('NIKKI: I would greatly appreciate it if you could acknowledge this and offer an apology.');
                    player.setVariable('CONFRONTED', true)
                    break;

                } else if (choice?.value == 'nonViolent') {
                    await player.showText('Could work but maybe not the best solution here, because as you know, people do not disappear with one look :) On top of that, the harasser could become aggressive and your reaction will not prevent him to keep on harassing other people')

                }
            }

        }




        // switch (choice) {
        //     case choice.value == 'kungFu':
        //         player.showNotification('kung fu and violence in general is only an option when you can’t communicate and have no other choice. Maybe you can try another option?', { time: 5000 })
        //         break;

        //     default:
        //         break;
        // }

        // player.showNotification('kung fu and violence in general is only an option when you can’t communicate and have no other choice. Maybe you can try another option?')






    }
} 