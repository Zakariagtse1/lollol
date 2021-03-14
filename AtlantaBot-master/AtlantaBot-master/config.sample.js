module.exports = {
	/* The token of your Discord Bot */
	token: "ODIwNjk0NjE0MzIyODM5NTY0.YE45aw.PYDdAsC8abMZAcGYx-dHh_XlCTc",
	/* For the support server */
	support: {
		id: "820639670655778836", // The ID of the support server
		logs: "820695297955987507", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://iiGreen:O4skVKF0TY3x4Z5c@cluster0.mffqq.mongodb.net/tests", // The URl of the mongodb database
	prefix: "%", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Raider Community Bot || Made By Zakaria" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "589837030595362837", // The ID of the bot's owner
		name: "! [GN] Zakaria#9294" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "QHkow9pL.X-Em4gliZd83.FA8P2S2SMO6ck6jWMeSpM1YNr_tdnRmv.ZrZ_5ZjLN",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "", // Founder's github account
		donate: "" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "",
			type: "LISTENING"
		},
		{
			name: "",
			type: "PLAYING"
		}
	]
};
