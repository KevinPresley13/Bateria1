document.body.addEventListener('keyup', (event)=>{
    playSond(event.code.toLocaleLowerCase())
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    if(song!==''){
        let songArrey = song.split('');
        playComposition(songArrey);
        console.log(songArrey)
    }
});
function playSond(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if (keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300)
    }
}
function playComposition(songArrey){
    let wait = 0;
    
    for(let songItem of songArrey){
        setTimeout(()=>{
            playSond(`key${songItem}`);
        },wait)
        wait += 250;
    }
    
}