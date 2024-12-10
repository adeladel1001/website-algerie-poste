// js/chatbot.js

class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox, sendButton } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // Afficher ou masquer la boîte de chat
        if (this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch('https://0e94-34-28-72-76.ngrok-free.app/ask', {  // Remplacez par votre véritable endpoint
            method: 'POST',
            body: JSON.stringify({ question: text1 }),  // Utilisez 'question' au lieu de 'message'
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(r => {
                if (r.answer) {
                    let msg2 = { name: "Sam", message: r.answer };
                    this.messages.push(msg2);
                    this.updateChatText(chatbox)
                } else {
                    let msg2 = { name: "Sam", message: "Désolé, je n'ai pas compris." };
                    this.messages.push(msg2);
                    this.updateChatText(chatbox)
                }
                textField.value = ''

            }).catch((error) => {
                console.error('Error:', error);
                let msg2 = { name: "Sam", message: "Une erreur est survenue. Veuillez réessayer." };
                this.messages.push(msg2);
                this.updateChatText(chatbox)
                textField.value = ''
            });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function (item, index) {
            if (item.name === "Sam") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();
chatbox.display();
