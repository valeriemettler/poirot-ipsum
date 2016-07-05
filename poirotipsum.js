// quotes from http://www.imdb.com/character/ch0013286/quotes
var quotes_array = [
    'Miss lemon\, I\'ll have my tisane now please.',
    'Yes\, mon ami\, her eyes\, they are blue!', 'Poor Captain Hastings...',
    'Only by interrogating the other passengers could I hope to see the light, but when I began to question them, the light, as Macbeth would have said, thickened.',
    'Ah, you are not *accused*... you are *ex*-cused!',
    'Why must the English conceal even their most impeccable emotions?',
    'Now you have accidentally said something valuable.',
    'Perhaps.',
    'Poirot does not pull the legs.',
    'C\'est ça.',
    'Some of us, in the words of the divine Greta Garbo, want to be alone.',
    'If all these people are not implicated in the crime, then why have they all told me, under interrogation, stupid and often unnecessary lies? Why? Why? Why? Why?',
    'My friend. Now I must go and wrestle with my report to the police and with my conscience.',
    'Ohhhh, if you must go woof-woof, kindly go woof-woof not to windward, but to leeward.',
    'The bottle is more distinguished than its wine.',
    'I was not aware that I was keeping my hands *on* Miss Debenham!',
    'Ah, certainly.',
    'But I am! Always I am right. It is so invariable it startles me. And now it looks very much as though I may be wrong, and that upsets me. But I should not be upset, because I am right. I must be right because I am never wrong.',
    'Enchante, Madame.',
    'Oui?',
    'Jen sais pas.',
    'Failure? Well, the last one was 28 years ago.',
    'So, we have played, and Hercule Poirot, he has won.',
    'How would I like my eggs? Two, boiled, and *exactly* the same size, s\'il vous plaît.',
    ' You people! With your kangaroo jury, your kangaroo justice! You had no right to take the law into your own hands!',
    'No! No, you behave like this and we become just... savages in the street!',
    'I do not play poker with you, monsieur.',
    'Mademoiselle, do not cross me!',
    'Shall I tell you what I know? Huh, Mademoiselle Debenham, shall I?',
    'All but a farce, was it not, Linda Arden, to make a mockery of Poirot?',
    'Was he, in your opinion, a gentleman?',
    'No! Lieutenant, you lie to Poirot.',
    'Poirot, Mademoiselle, pucker your lips as though about to bestow a kiss! Poi-rot.',
    'The sky is blue, the sun is shining, and yet you forget that everywhere there is evil under the sun.',
    'Little boys laugh easily if it keeps them away even for a moment from their study of Latin.',
    'Really to count, a woman must have either goodness or brains.',
    'Ah you are too amiable madame.',
    'Are you all comfortable? Even the murderer?',
    'It is not me that is hiding, it is you who are lying!',
    'You see, it is folly to try and trick Hercule Poirot... even in a dead language.',
    'Mais porquoi, madame?',
    'Look at them lying on the beach in rows, like corpses at the morgue, butcher\'s meat, steaks grilling in the sun!',
    'My intuition tells me... I haven\'t finished my breakfast!',
    'And why should you make such an observation, madamoiselle?',
    'Mind my own business? I have tried... but I can\'t.',
    'Hercule Poirot will *never* give up.',
    'There is a considerable difference between military intelligence and... normal intelligence.',
    'You know, every wine, even a small wine, has its own personality with its own secret past and its own promises of pleasure in the future.',
    'Lynch-Bages 1944! You know that when these grapes were being picked, the battle was raging all the way round the vineyard, but picked they were!',
    'Madame Dainty, has it ever occurred to you to organize the goods by the country of origin?',
    'I steady my nerves, that is all.',
    'But we must be even more intelligent that he does not suspect us of being intelligent at all. And there you will be invaluable, mon ami.',
    'Things are moving quickly, my friend - perhaps too quickly!',
    'That I do not know.',
    'Perhaps one day when this terrible war is ended, we shall work again together, and Poirot will explain it all to you.',
    'It is indeed, mon ami Hastings.',
    'Superintendent, I beg of you to allow me to ask of Mr. Inglethorp just one question.',
    'Again, we have cleared away the clues manufactured, and now for the real ones.'
];

var paragraph_length = 5;

//shuffle:http://stackoverflow.com/a/12646864
var shuffle_quotes = function(quotes_array) {
    for (var i = quotes_array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = quotes_array[i];
        quotes_array[i] = quotes_array[j];
        quotes_array[j] = temp;
    }
    return quotes_array;

};

$(document).ready(function() {

    $("button").on('click', function(e) {
        e.stopPropagation();
        var num_paragraphs = $("select").val();
        console.log("number of paragraphs selected", num_paragraphs);
        var shuffled_quotes = shuffle_quotes(quotes_array);
        var paragraph1 = [];
        var paragraph2 = [];
        var paragraph3 = [];
        var paragraph4 = [];
        x = "";


        for (var i = 0; i <= paragraph_length; i++) {
            paragraph1.push(shuffled_quotes[i]);
            paragraph2.push(shuffled_quotes[i + 6]);
            paragraph3.push(shuffled_quotes[i + 11]);
            paragraph4.push(shuffled_quotes[i + 16]);
        }


        if (num_paragraphs === "1") {
            x = '<p>';
            for (var i = 0; i < paragraph1.length; i++) {
                x = x + paragraph1[i] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);
        }

        if (num_paragraphs === "2") {
            x = '<p>';
            for (var i = 0; i < paragraph1.length; i++) {
                x = x + paragraph1[i] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);

            x = x + '<p>';
            for (var j = 0; j < paragraph2.length; j++) {
                x = x + paragraph2[j] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);
        }
        if (num_paragraphs === "3") {
            x = '<p>';
            for (var i = 0; i < paragraph1.length; i++) {
                x = x + paragraph1[i] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);

            x = x + '<p>';
            for (var j = 0; j < paragraph2.length; j++) {
                x = x + paragraph2[j] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);

            x = x + '<p>';
            for (var k = 0; k < paragraph3.length; k++) {
                x = x + paragraph3[k] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);
        }
        if (num_paragraphs === "4") {
            x = '<p>';
            for (var i = 0; i < paragraph1.length; i++) {
                x = x + paragraph1[i] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);

            x = x + '<p>';
            for (var j = 0; j < paragraph2.length; j++) {
                x = x + paragraph2[j] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);

            x = x + '<p>';
            for (var k = 0; k < paragraph3.length; k++) {
                x = x + paragraph3[k] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);

            x = x + '<p>';
            for (var l = 0; l < paragraph4.length; l++) {
                x = x + paragraph4[l] + "  ";
            }
            x = x + '</p>';
            $('#x').html(x);
        }
    });
});