async function weather(shaxar) {
    const url = `https://open-weather13.p.rapidapi.com/city/${shaxar}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c5e2556b83msh6c9176a364d4112p17113cjsnd3a250aa6ec6',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(JSON.parse(result));
    } catch (error) {
        console.error(error);
    }
}

async function weather() {
    const city = document.getElementById('city');
    const shaxar = city.value;

    
        const button = await weather(shaxar);

        console.log(button);

        const buttonDiv = document.getElementById('button');

        if (button) {
            buttonDiv.innerHTML += `
                <p>${button.name}</p>
                <p>${button.weather[0].description}</p>
                <p>${button.main.temp}°C</p>
                <p>${button.main.humidity}% humidity</p>
                <hr>
            `;
        } else {
            buttonDiv.innerHTML = 'Ob-havo malumotini olib bo\'lmadi';
            
        }
    }
