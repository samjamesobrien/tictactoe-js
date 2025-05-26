const assert = require('node:assert')

describe("game.js", function () {
    describe("Test the get_winner method", function () {
        it("should return x when x wins by a row", function () {
            // todo - state with x winning in a row
            // todo - call get_winner
            assert.equal('x', undefined);
        });
    
        it("should return o when o wins by a column", function () {
            // todo - state with o winning in a column
            // todo - call get_winner
            assert.equal('o', undefined);
        });
    
        it("should return x when x wins by a diagonal top left to bottom right", function () {
            // todo - state with x winning in a diagonal top left to bottom right
            // todo - call get_winner
            assert.equal('x', undefined);
        });
    
        it("should return o when o wins by a diagonal top right to bottom left", function () {
            // todo - state with x winning in a diagonal top right to bottom left
            // todo - call get_winner
            assert.equal('o', undefined);
        });
    
        it("should return 'in_progress' when there is no winner and plays remain", function () {
            // todo - state with no winner but empty spaces
            // todo - call get_winner
            assert.equal('in_progress', undefined);
        });
    
        it("should return 'draw' when there is no winner and no plays remain", function () {
            // todo - state with no winner and no empty spaces
            // todo - call get_winner
            assert.equal('draw', undefined);
        });
    });
});
