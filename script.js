const items = [
    "On Land", "Its not something", "I dont care", "If you want it", "Overboard", "Benny and the jetts",
    "Baby you were there", "Lizzy come back to life", "Your own religion", "Girls like me", "Sarah (meet me at the sauna)",
    "Keep Me Distracted", "I Wonder Who She's Kissing Now", "Misery", "It Evaporates", "Mirror Mirror",
    "Loneliness Can be Demanding", "Flip the Record!", "Loud And Clear", "TV In The Bedroom", "On The Fence", "Sweaters",
    "Jane's Critique The Artist", "Keep Me Distracted .ll", "All a Dream", "Diet-Coke", "Don't Say No", "I'm Someone Else",
    "Mary Moffett", "Jayney and Johnny", "I'll Kill Myself", "Theme for Unreleased Film Sayulita (Demo)", "Low Signal",
    "Girls Like Me (Demo)", "Museum (Pre-TV Girl)", "If You Want It (Alternative Version Demo)", "Easier to Cry (Acoustic video edit)",
    "Average Guy (Blame)", "She smokes in bed", "Laura", "My Girlfriend", "Easier to cry", "Melanie", "Pantyhose", "Birds Don't Sing",
    "Louise", "Hate Yourself", "The Getaway", "Talk to Strangers", "The Blonde", "Daughter of a Cop", "Lover's Rock", "Her and Her Friend",
    "Come When You Call", "Anjela", "Natalie Wood", "Like we planned", "Brilliant Silence (Demo)", "Taking what's not yours", "Song about me",
    "Cigarrettes Out the Window", "Till you tell me to leave", "Not Allowed", "(Do the) act like you never met me", "Safeword", "For You",
    "Loving Machine", "Heaven is a Bedroom", "Strange Loop", "Cut Chop Break Burn", "Kamikaze", "Make it Pop", "I Thought You Were Cool",
    "Speak French", "Chocolate Ice Cream Land", "Electric Kool Aid", "Pocketful of Posies", "Fallout", "Maddie in Heaven", "Pretty Boys",
    "7 Days Till Sunday", "Blue Hair", "Lonely Girls", "Drift Down", "Cynical One", "King of Echo Park", "Legendary Lovers", "Every Stupid Actress",
    "Death of a Party Girl", "The Night in Question", "Valerie", "Lines to a Different Play", "It Almost Worked", "The Disolation Tango",
    "Sleeping With the Enemy", "Your Friends are Calling Your Name", "Stay Away (It's Like That)", "Beautiful Horses", "Sweat Like Wine",
    "Symphony of Death", "Escalators to the Moon", "Ugly butterfly", "No looking", "This is the dream", "Magazines", "Magazines (Pt .ll)",
    "Vapor Season", "Running in Place", "Summer's Over", "Lo on the High way", "Jump into the Turnslite", "Sweet to Dream", "Ordinary Day",
    "Better in the Dark", "The Party's Not Over", "I'll Be Faithful", "All the Way Through", "Hang On", "Higher Ground", "Shame",
    "One of these Mornings", "The Night Time", "Big Black Void", "Fire", "99.5", "Grapes Upon a Vine", "Heaven Over Our Heads"
];

function selectRandomItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    document.getElementById('selected-item').textContent = selectedItem;
}