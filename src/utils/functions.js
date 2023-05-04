import detectEthereumProvider from '@metamask/detect-provider'

/**
* Connects metamask wallet
*/
export const connectWallet = async () => {
    try {
        const provider = await detectEthereumProvider()
        let account
    
        if (provider) {
            console.log('Ethereum successfully detected!')
    
            // checks which chain is currently active on Metamask
            const chainId = await provider.request({
                method: 'eth_chainId'
            })
            console.log('chainId', chainId)
    
            // getting accounts
            account = await provider.send('eth_requestAccounts').then(req => req.result[0]).catch(error => {
                console.log('Please allow the site to connect to your Ethereum wallet.', error)
            })
            console.log('inside account', account)
    
            // listner on chain change
            provider.on('chainChanged', (detail) => {
                console.log('chainChanged', detail)
            })
    
            return { account, provider }
        } else {
            // if the provider is not detected, detectEthereumProvider resolves to null
            console.error('Please install MetaMask!')
        }
    } catch (error) {
        throw new Error('Error while connecting wallet')
    }
}

/**
* Adding ellipsis to wallet address
*/
export const addEllipsis = (string, characters = 4, inCenter = true) => {
    if (inCenter) {
        if (string.length > (characters * 2)) {
            return string.substr(0, characters) + '...' + string.substr(string.length - characters, string.length)
        }
    } else {
        if (string.length > (characters)) {
            return string.substr(0, characters) + '...';
        }
    }
    return string;
}
