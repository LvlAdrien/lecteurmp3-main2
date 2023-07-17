function initSlider(playlist,track){

    console.log("initialisation du slider");
    console.dir(playlist);
    //ici je récupere l'url de l'image à afficher dans mon slider
    console.dir(playlist[track].cover);
    const slider = document.querySelector("#slider");
    // creation d'une première image imageA
    const imageA = document.createElement("img");
    imageA.id = "imageA";
    imageA.src = playlist[track].cover;
    imageA.alt = playlist[track].author;
    imageA.style.zIndex = "2";
    slider.append(imageA);
    const imageB = document.createElement("img");
    imageB.id = "imageB";
    imageB.src = playlist[track+1].cover;
    imageB.alt = playlist[track+1].author;
    imageB.style.zIndex = "0";
    slider.append(imageB);
    // creation d'une balise texte texteA
    const texteA = document.createElement("p");
    texteA.id = "texteA";
    
    //texteA.innerText = playlist[track].title+"/"+playlist[track].author;
    texteA.innerHTML = "<p class='title'>"+playlist[track].title+"</p><p class='author'>"
    +playlist[track].author+"</p>";
    texteA.style.zIndex = "3";
    slider.append(texteA);
    const texteB = document.createElement("p");
    texteB.id = "texteB";
    
    //texteA.innerText = playlist[track].title+"/"+playlist[track].author;
    texteB.innerHTML = "<p class='title'>"+playlist[track+1].title+"</p><p class='author'>"
    +playlist[track+1].author+"</p>";
    texteB.style.zIndex = "1";
    slider.append(texteB);
    // j'aimerai connaitre le height de mon imageA mais je doit 
    // d'abord attendre que cette image soit uploader par mon navigateur
    // je dois temporiser avec javascript avant d'obtenir les informations
    // de mon image
    setTimeout(() => {
        console.dir(imageA.clientHeight);
        slider.style.height = imageA.clientHeight+"px";
    }, 500);

    // Toutes les 5 secondes je souhaiterais faire disparaitre 
    // l'imageA et le texteA pour faire apparaitre l'imageB et 
    // le texteB situés en dessous
    let trackB = track+1;
    setInterval(() => {
        //ajouter ma transition
        imageA.classList.add("trans");
        texteA.classList.add("trans");
        imageA.classList.add("swipeLeft");
        texteA.classList.add("swipeLeft");
        // j'attend la fin de ma transition (500ms) pour la suite
        
        setTimeout(() => {
            //je commence par incrémenter track
            if(trackB === playlist.length-1){
                trackB = 0; 
            } else {
                trackB++; 
            } 
            if(track === playlist.length-1){
                track = 0; 
            } else {
                track++;
            }
            
            


            imageA.src = playlist[track].cover;
            imageA.alt = playlist[track].author;
            texteA.innerHTML = "<p class='title'>"+playlist[track].title+"</p><p class='author'>"
            +playlist[track].author+"</p>";
            //je dois retirer la transition
            imageA.classList.remove("trans");
            texteA.classList.remove("trans");
            imageA.classList.remove("swipeLeft");
            texteA.classList.remove("swipeLeft");
            imageB.src = playlist[trackB].cover;
            imageB.alt = playlist[trackB].author;
            texteB.innerHTML = "<p class='title'>"+playlist[trackB].title+"</p><p class='author'>"
            +playlist[trackB].author+"</p>";
            
        }, 500);
    }, 5000);


}

export {initSlider}