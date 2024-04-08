// Add event listeners for both reveal and hide buttons
document.getElementById('revealButton').addEventListener('click', function() {
    var letter = document.getElementById('letter');
    letter.style.display = 'block';
    
    // Show the hide button and hide the reveal button
    document.getElementById('revealButton').style.display = 'none';
    document.getElementById('hideButton').style.display = 'block';
});

document.getElementById('hideButton').addEventListener('click', function() {
    var letter = document.getElementById('letter');
    letter.style.display = 'none';
    
    // Show the reveal button and hide the hide button
    document.getElementById('revealButton').style.display = 'block';
    document.getElementById('hideButton').style.display = 'none';
});
