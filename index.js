const apiKey = 'e31311e1e6f042499e82d50d3c516288';
    

    fetch(`https://api.rawg.io/api/games?genres=sports&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const sportsGamesContainer = document.getElementById('sports-games-container');

            data.results.forEach(game => {
                const gameCard = createGameCard(game);
                sportsGamesContainer.appendChild(gameCard);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });

    fetch(`https://api.rawg.io/api/games?genres=action&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const actionGamesContainer = document.getElementById('action-games-container');

            data.results.forEach(game => {
                const gameCard = createGameCard(game);
                actionGamesContainer.appendChild(gameCard);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });

    fetch(`https://api.rawg.io/api/games?genres=platformer&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const platformGamesContainer = document.getElementById('platform-games-container');

            data.results.forEach(game => {
                const gameCard = createGameCard(game);
                platformGamesContainer.appendChild(gameCard);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });

    function createGameCard(game) {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        const gameTitle = document.createElement('h3');
        gameTitle.textContent = game.name;

        const gameCover = document.createElement('img');
        gameCover.src = game.background_image;
        gameCover.alt = game.name;

        let gamePrice = game.metacritic ? `$${game.metacritic}` : 'Precio no disponible';

        // Agregar precios adicionales manualmente según el nombre del juego
        if (game.name === 'Rocket League') {
            gamePrice = '9,99€';
        } else if (game.name === 'Fall Guys: Ultimate Knockout') {
            gamePrice = 'Gratis';
        } else if (game.name === 'DiRT Rally') {
            gamePrice = '9,99€';
        } else if (game.name === 'Jet Set Radio') {
            gamePrice = '19,99€';
        } else if (game.name === 'VRChat') {
            gamePrice = 'Gratis';
        } else if (game.name === 'Forza Horizon 5') {
            gamePrice = '34,99€';
        } else if (game.name === 'Steep') {
            gamePrice = '6,99€';
        } else if (game.name === 'F1 2015') {
            gamePrice = '4,99€';
        } else if (game.name === 'TEKKEN 7') {
            gamePrice = '9,99€';
        } else if (game.name === 'SpeedRunners') {
            gamePrice = '1,99€';
        } else if (game.name === 'DiRT Rally 2.0') {
            gamePrice = '21,99€';
        } else if (game.name === 'Golf With Your Friends') {
            gamePrice = '2,99€';
        } else if (game.name === 'Headsnatchers') {
            gamePrice = '2,65€';
        } else if (game.name === 'Sonic & All-Stars Racing Transformed') {
            gamePrice = '11,73€';
        } else if (game.name === 'F1 2018') {
            gamePrice = '18,99€';
        } else if (game.name === 'FIFA 18') {
            gamePrice = '8,69€';
        } else if (game.name === 'RaceRoom Racing Experience') {
            gamePrice = 'Gratis';
        } else if (game.name === 'Pyre') {
            gamePrice = '14,99€';
        } else if (game.name === 'DiRT 3') {
            gamePrice = '2,20€';
        } else if (game.name === 'FIFA 17') {
            gamePrice = '5,95€';
        } else if (game.name === 'Grand Theft Auto V') {
            gamePrice = '39,99€';
        } else if (game.name === 'The Witcher 3: Wild Hunt') {
            gamePrice = '31,99€';
        } else if (game.name === 'Tomb Raider (2013)') {
            gamePrice = '7,50€';
        } else if (game.name === 'Counter-Strike: Global Offensive') {
            gamePrice = '14,79€';
        } else if (game.name === 'Left 4 Dead 2') {
            gamePrice = '3,61€';
        } else if (game.name === 'The Elder Scrolls V: Skyrim') {
            gamePrice = '8,33€';
        } else if (game.name === 'BioShock Infinite') {
            gamePrice = '2,34€';
        } else if (game.name === 'Red Dead Redemption 2') {
            gamePrice = '20,61€';
        } else if (game.name === 'God of War (2018)') {
            gamePrice = '23,46€';
        } else if (game.name === 'Borderlands 2') {
            gamePrice = '12,30€';
        } else if (game.name === 'Half-Life 2') {
            gamePrice = '2,21€';
        } else if (game.name === 'BioShock') {
            gamePrice = '12,30€';
        } else if (game.name === 'Destiny 2') {
            gamePrice = '49,99€';
        } else if (game.name === 'Fallout 4') {
            gamePrice = '5,12€';
        } else if (game.name === 'DOOM (2016)') {
            gamePrice = '3,69€';
        } else if (game.name === 'PAYDAY 2') {
            gamePrice = '1,93€';
        } else if (game.name === 'Horizon Zero Dawn') {
            gamePrice = '11,90€';
        } else if (game.name === 'Grand Theft Auto IV') {
            gamePrice = '19,99€';
        } else if (game.name === 'Cyberpunk 2077') {
            gamePrice = '22,89€';
        } else if (game.name === 'Limbo') {
            gamePrice = '9,99€';
        } else if (game.name === 'Terraria') {
            gamePrice = '9,99€';
        } else if (game.name === 'Hollow Knight') {
            gamePrice = '34,99€';
        }  else if (game.name === 'Little Nightmares') {
            gamePrice = '19,99€';
        }  else if (game.name === 'Half-Life') {
            gamePrice = '9,99€';
        } else if (game.name === 'Super Meat Boy') {
            gamePrice = '14,99€';
        } else if (game.name === 'SEGA Mega Drive and Genesis Classics') {
            gamePrice = '19,99€';
        } else if (game.name === 'Psychonauts') {
            gamePrice = '44,95€';
        } else if (game.name === 'Batman: Arkham Asylum Game of the Year Edition') {
            gamePrice = '19,99€';
        } else if (game.name === 'INSIDE') {
            gamePrice = '19,99€';
        } else if (game.name === 'Cuphead') {
            gamePrice = 'Gratis';
        } else if (game.name === 'Trine 2: Complete Story') {
            gamePrice = '16,99€';
        } else if (game.name === 'Ori and the Blind Forest: Definitive Edition') {
            gamePrice = '39,95€';
        } else if (game.name === 'FEZ') {
            gamePrice = 'Gratis';
        } else if (game.name === 'Ori and the Blind Forest') {
            gamePrice = 'Gratis';
        } else if (game.name === 'Rayman Legends') {
            gamePrice = '4,18€';
        } else if (game.name === 'Dead Cells') {
            gamePrice = '8,20€';
        } else if (game.name === 'Guacamelee! Super Turbo Championship Edition') {
            gamePrice = '13,99€';
        } else if (game.name === 'Broforce') {
            gamePrice = '14,99€';
        } else if (game.name === 'A Story About My Uncle') {
            gamePrice = '1,06€';
        } 

        const gamePriceElement = document.createElement('p');
        gamePriceElement.classList.add('game-price');
        gamePriceElement.textContent = `Precio: ${gamePrice}`;
        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Comprar';
        
       buyButton.setAttribute('data-title', game.name);
       buyButton.addEventListener('click', () => sendGameTitleToSpringBoot(game.name, gamePrice));

        gameCard.appendChild(gameTitle);
        gameCard.appendChild(gameCover);
        gameCard.appendChild(gamePriceElement);


        return gameCard;
    }
   