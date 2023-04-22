import { RpgEvent, EventData, RpgPlayer, Move } from '@rpgjs/server'
import { EmotionBubble } from '@rpgjs/plugin-emotion-bubbles'


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

    async onPlayerTouch(player: RpgPlayer) {
        if (!player.getVariable('CONFRONTED')) {
            let wait: boolean = false
            while (!wait) {
                await player.showText('MR. MISERABLE: *UGH* Disgusting tranny, hate to see those unmanly persones! You’re not a real girl! How people like you even dare to show up in public?');
                player.showEmotionBubble(EmotionBubble.ThreeDot)

                const choice = await player.showChoices('*GASP* What are you gonna do?', [
                    { text: 'Attack with kung fu', value: 'kungFu' },
                    { text: 'Ask for help to bouncer', value: 'bouncer' },
                    { text: 'Kill with kindness', value: 'kind' },
                    { text: '* Side-eye *', value: 'nonViolent' },
                ])

                if (choice?.value == 'kungFu') {
                    await player.showText('NIKKI: Have you ever tried dancing with a broken ribs?')
                    player.showEmotionBubble(EmotionBubble.Hangry2)


                    player.showNotification('Kung Fu and violence in general is only an option when you can’t communicate and have no other choice. Maybe you can try another option?', {
                        time: 5000
                    })

                    wait = true;
                    setTimeout(() => { wait = false }, 5000)


                } else if (choice?.value == 'bouncer') {
                    await player.showText('NIKKI went to the bouncer and MR. MISERABLE gets a life-time Hausverbot.');
                    player.showEmotionBubble(EmotionBubble.Happy)


                    player.showNotification('Appropriate in this situation, especially if the person looks aggressive and not ready to communicate', {
                        time: 5000
                    })

                    player.setVariable('CONFRONTED', true)
                    break;

                } else if (choice?.value == 'kind') {
                    await player.showText('NIKKI: Hallo? When you talk to me with this tone, I feel angry and sad, because my need for respect is not fulfilled.');
                    await player.showText('NIKKI: I would greatly appreciate it if you could acknowledge this and offer an apology.');

                    await player.showText('MR. MISERABLE: Oh I’m sorry I’m not feeling good today and didn’t mean what I said. On top of that, I didn’t realize that you were Nikki de Jagger!');
                    await player.showText('MR. MISERABLE: Could I please have an autograph?');

                    await player.showText('NIKKI: No');

                    player.showEmotionBubble(EmotionBubble.Star)



                    player.showNotification('Note: To know more about non violent communication: https://en.wikipedia.org/wiki/Nonviolent_Communication', {
                        time: 5000
                    })

                    player.setVariable('CONFRONTED', true)
                    break;

                } else if (choice?.value == 'nonViolent') {
                    player.showEmotionBubble(EmotionBubble.Cloud)
                    player.showNotification('Could work but maybe not the best solution here, because as you know, people do not disappear with one look :) On top of that, the harasser could become aggressive and your reaction will not prevent him to keep on harassing other people', { time: 7000 })

                    wait = true;
                    setTimeout(() => { wait = false }, 7000)

                }
            }

        }

    }
} 