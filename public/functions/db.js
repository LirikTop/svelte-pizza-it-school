exports.handler = async function (event, context) {
    const db = {
        "pizzas": [
            {
                "id": 0,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
                "name": "Пепероні з перцем",
                "types": [
                    0,
                    2,
                    3
                ],
                "sizes": [
                    26,
                    30,
                    40
                ],
                "price": 125,
                "category": [0],
                "rating": 3
            },
            {
                "id": 1,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
                "name": "Сирна",
                "types": [
                    1
                ],
                "sizes": [
                    26,
                    40
                ],
                "price": 145,
                "category": [1],
                "rating": 6
            },
            {
                "id": 2,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
                "name": "Курча барбекю",
                "types": [
                    0
                ],
                "sizes": [
                    26,
                    40
                ],
                "price": 130,
                "category": [0],
                "rating": 4
            },
            {
                "id": 3,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
                "name": "Кисло-солодке курча",
                "types": [
                    0,
                    3
                ],
                "sizes": [
                    26,
                    30,
                    40
                ],
                "price": 150,
                "category": [0],
                "rating": 2
            },
            {
                "id": 4,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
                "name": "Чизбургер піца",
                "types": [
                    0,
                    4
                ],
                "sizes": [
                    26,
                    30,
                    40
                ],
                "price": 160,
                "category": [3],
                "rating": 8
            },
            {
                "id": 5,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
                "name": "Вар'ят папероні",
                "types": [
                    0,
                    2,
                    3
                ],
                "sizes": [
                    30,
                    40
                ],
                "price": 185,
                "category": [2],
                "rating": 2
            },
            {
                "id": 6,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
                "name": "Пепероні",
                "types": [
                    0
                ],
                "sizes": [
                    26,
                    30,
                    40
                ],
                "price": 110,
                "category": [0],
                "rating": 9
            },
            {
                "id": 7,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
                "name": "Маргарита",
                "types": [
                    0
                ],
                "sizes": [
                    26,
                    30,
                    40
                ],
                "price": 110,
                "category": [4],
                "rating": 6
            },
            {
                "id": 8,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
                "name": "Чотири пори року",
                "types": [
                    2,
                    0
                ],
                "sizes": [
                    26,
                    30,
                    40
                ],
                "price": 135,
                "category": [5],
                "rating": 10
            },
            {
                "id": 9,
                "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
                "name": "Городини та печериці 🌱",
                "types": [
                    2,
                    1
                ],
                "sizes": [
                    26,
                    30,
                    40
                ],
                "price": 100,
                "category": [5],
                "rating": 7
            }
        ]
    }
    return {
        statusCode: 200,
        body: JSON.stringify(db),
    };
};