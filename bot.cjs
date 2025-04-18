const venom = require('venom-bot');

// Função principal assíncrona
async function startBot() {
    try {
        console.log("Iniciando bot WhatsApp...");

        const client = await venom.create({
            session: 'bot-geografia',
            puppeteerOptions: {
                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                args: ['--no-sandbox']
            }
        });

        console.log('Bot conectado com sucesso!');

        client.onMessage(async (message) => {
            if (!message.isGroupMsg) {
                console.log('Mensagem recebida:', message.body);
                await client.sendText(message.from, `Recebi sua mensagem: "${message.body}"`);
            }
        });

    } catch (error) {
        console.error('Erro ao iniciar bot:', error);
        process.exit(1); // Encerra o processo com erro
    }
}

// Chama a função principal
startBot();