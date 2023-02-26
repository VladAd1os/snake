"use strict"

import {Bonus, DEFAULT_LIFETIME} from '../../bonus.js'

export function BonusTests() {
    return {
        testIfRegeneratUpdatesLifetime: function() {
            let bonus = new Bonus([1, 1]);
            bonus.update();

            if (bonus.lifeTime !== DEFAULT_LIFETIME - 1) {
                throw new Error('Bonus lifetime should decrement on update');
            }

            bonus.regenerate(0, 11, 12);

            if (bonus.lifeTime !== DEFAULT_LIFETIME) {
                throw new Error('Bonus lifetime on regenerate should be equals to default one');
            }
        }
    }
}