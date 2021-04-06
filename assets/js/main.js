var app = new Vue ({
    el: '#root',
    data: {
        contacts: contacts,
        contactActive: 0,
        inputMessage: '',
        inputSearch: '',
        index: 0,
        showChatList: false,
        messageIndex: null,
        isActive: false,
    },
    computed: {
        searchList() {
            return this.contacts.filter(contatto => {
                return contatto.name.toLowerCase().includes(this.inputSearch.toLowerCase());
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
            this.showChatList = false;
        },
        sendMessage: function(contactActive) {
            if(this.inputMessage != '') {
                let newMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.inputMessage,
                    status: 'sent'
                }
                this.contacts[contactActive].messages.push(newMessage);
                this.inputMessage = '';

                // !! cambiare in arrow function
                setTimeout(function() {
                    let newMessage = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ok',
                        status: 'received'
                    }
                this.contacts[contactActive].messages.push(newMessage);
                }, 1000);
            }
        },
        showPanel: function(index) {
            this.isActive = !this.isActive;
        },
        deleteMessage: function(messaggio) {
            let i = this.contacts.messages.indexOf(messaggio);
            this.contacts.messages[i].splice(i, 1);
        }
    }
});