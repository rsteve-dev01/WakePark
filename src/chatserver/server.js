// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let teamMembers = {
    'Alice': { id: '1', activeChats: 0 },
    'Bob': { id: '2', activeChats: 0 },
    'Carol': { id: '3', activeChats: 0 }
};

const assignChat = () => {
    let assignedMember = null;
    let minChats = Infinity;

    for (let name in teamMembers) {
        if (teamMembers[name].activeChats < minChats) {
            minChats = teamMembers[name].activeChats;
            assignedMember = teamMembers[name];
        }
    }

    if (assignedMember) {
        teamMembers[assignedMember.id].activeChats++;
        return assignedMember;
    }

    return null;
};

app.post('/new-chat', (req, res) => {
    const assignedMember = assignChat();
    if (assignedMember) {
        res.json({ member: assignedMember.id, activeChats: assignedMember.activeChats });
    } else {
        res.status(500).json({ message: 'Failed to assign chat' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
