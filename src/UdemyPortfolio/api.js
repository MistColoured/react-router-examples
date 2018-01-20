// A simple data API that will be used to get the data for our
// UdemyPortfolio. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
    players: [
        { number: 1, name: 'Mike Allen', job: 'Coder' },
        { number: 2, name: 'Sandy Spaid', job: 'Pizza Cook' },
        { number: 3, name: 'Tina Harding', job: 'Cake Maker' },
        { number: 4, name: 'Matt Chandler', job: 'Powerlifter' },
        { number: 5, name: 'Terry Atkinson', job: 'Coffee Drinker' },
        { number: 6, name: 'Lorella Palmer', job: 'Student' },
        { number: 7, name: 'Marcos Roig', job: 'Slow Cyclist' },
    ],
    all() { // shorthand use of all: function()
        return this.players;
    },
    get(id) {
        const isPlayer = p => p.number === id;
        return this.players.find(isPlayer);
    },
};

export default PlayerAPI;
