const telegram_call = "https://api.telegram.org/bot"+ process.env.TOKEN; + "/getme";

module.exports = {
    Get: async (req, res) => {

        try {
            const response = await Axios({
                url: telegram_call,
                method: "get",
            });
    
            console.log(response);
    
            return res.send(response.data);
        } catch (error) {
            console.log(error);
        }
        
    }
}

