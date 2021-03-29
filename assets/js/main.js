// milestone 1
    // 1 - replica deòòa grafoca con possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianchi) assegnando due classi css diverse
    // 2 - visualizzazione dimanica delal lista contatti tramite v-for usando nome e immagine di ogni contatto

var app = new Vue ({
    el: '#root',
    data: {
        contacts: contacts,
        contactActive: 0,
        inputMessage: '',
        inputSearch: '',
        showChatList: false,
    },
    computed: {
        searchList() {
            return this.contacts.filter(contatto => {
                return contatto.name.toLowerCase().includes(this.inputSearch.toLowerCase())
            });
        }
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
        sendMessage: function(contactActive) {
            if(this.inputMessage != '') {
                let newMessage = {
                    date: '10/01/2020 15:30:55',
                    text: this.inputMessage,
                    status: 'sent'
                }
                this.contacts[contactActive].messages.push(newMessage);
                this.inputMessage = '';
                setTimeout(function() {
                    let newMessage = {
                        date: '10/01/2020 15:30:55',
                        text: 'ok',
                        status: 'received'
                    }
                this.contacts[contactActive].messages.push(newMessage);
                }, 1000);
            }
        },
    }
});