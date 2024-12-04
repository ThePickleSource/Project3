const notes = {
    'A': 'C',  
    'S': 'D',  
    'D': 'E',  
    'F': 'F',  
    'G': 'G',  
    'H': 'A', 
    'J': 'B'  
};

const audioFiles = {
    'C': new Audio('audio/C.mp3'),
    'D': new Audio('audio/D.mp3'),
    'E': new Audio('audio/E.mp3'),
    'F': new Audio('audio/F.mp3'),
    'G': new Audio('audio/G.mp3'),
    'A': new Audio('audio/A.mp3'),
    'B': new Audio('audio/B.mp3')
};

function playNote(note) {
    if (audioFiles[note]) {
        audioFiles[note].play();
    }
}

document.addEventListener('keydown', function(event) {
    if (notes[event.key.toUpperCase()]) {
        playNote(notes[event.key.toUpperCase()]);
    }
});
