// milestone 1
    // 1 - replica deòòa grafoca con possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianchi) assegnando due classi css diverse
    // 2 - visualizzazione dimanica delal lista contatti tramite v-for usando nome e immagine di ogni contatto

var app = new Vue ({
    el: '#root',
    data: {
        contacts: contacts,
        contactActive: 0,
        inputMessage: '',
    },
    computed: {
        // lastMsg: function () {    
        //     this.contacts.forEach((messaggio, index) => {
        //         this.contacts[index].lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].text;

        //         console.log(messaggio);
        //         console.log(index);
        //         console.log(this.lastMessage);
        //     });
        // }
    },
    methods: {
        dateMessage: function(date) {
            let data = new Date(date);
            let ore = data.getHours();
            let minuti = data.getMinutes();
            return (`${ore}:${minuti}`)
        },
        setActive: function(index) {
            this.contactActive = index;
        },
        sendMessage: function() {
            if(this.inputMessage != '') {
                let newMessage = {
                    date: '10/01/2020 15:30:55',
                    text: this.inputMessage,
                    status: 'sent'
                }
            this.contacts[index].messages.push(newMessage);
            this.inputMessage = '';
            }
        },
    }
});