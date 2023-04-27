  const container = document.querySelector('.main')

  const searchBtn = document.querySelector('#searchBtn')

  searchBtn.addEventListener('click', () => {
    const text = document.querySelector('#autoComplete').value
    console.log(text)
    
    let serverUrl = 'https://vercel-vedant48.vercel.app/results' ;
    
    fetch('http://localhost:8000/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text}),
    })

    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      for(const dat of data){
        console.log(dat);
        if (data.year === 'undefined') {
          span.style.display = 'none'
        }

        if (data.trailer === 'undefined') {
          ytaLink.style.display = 'none'
        }

        if (data.stream === 'undefined') {
          stream.style.display = 'none'
        }
        if(data.length === 0) continue
        dat.forEach(movie => {
          
        const movieDiv = document.createElement('div')
        movieDiv.className = 'movieDiv'
        const movieInfo = document.createElement('div')
        movieInfo.className = 'movieInfo'
        const h3 = document.createElement('h3')
        const span = document.createElement('span')
        const gaLink = document.createElement('a')
        gaLink.innerHTML = '<i class="fa-brands fa-google"></i>'
        const ytaLink = document.createElement('a')
        ytaLink.innerHTML = '<i class="fa-brands fa-youtube"></i>'
        const stream = document.createElement('span')



        let img = new Image()
        img.src = movie.photo
        h3.innerText = movie.name
        span.innerText = movie.year
        gaLink.href = movie.google
        ytaLink.href = movie.trailer
        stream.innerText = movie.stream
        gaLink.target = '_blank'
        ytaLink.target = '_blank'


        movieDiv.appendChild(img)
        movieInfo.appendChild(h3)
        movieInfo.appendChild(span)
        movieDiv.appendChild(movieInfo)
        movieInfo.appendChild(span)
        movieInfo.appendChild(gaLink)
        movieInfo.appendChild(ytaLink)
        movieInfo.appendChild(stream)
        container.appendChild(movieDiv)
         
        
        // console.log(movie)
      });
      }
    })
  })
