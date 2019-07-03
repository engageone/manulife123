window.rtc = window.rtc || {};
window.rtc.strings = {
	get: function( container, key ) {
		return rtc.strings[container][key];
	},
	session: {
		preparedFor: 'Prepared for',
		from: 'from'
	},
	mailto: {
		mailBody: "Hi {{firstname}},%0A%0A{{message}}%0A%0AI recently came across these very useful tips for Floridians that I thought you would also appreciate. Not only are the tips helpful the personalized personalization is really cool. Click on the link below and check it out:%0A%0A{{link}}%0A%0AI hope to see you soon,%0A%0A{{fullname}}",
		mailSubject: "Your personalized video of important tips for Floridians",
		ifSendDirectlyFailed: "If you were unable to send the email please copy and paste the content below into your email client:"
	},
	mailtoTooltips: {
		sendDirectly: 'Send directly from your email client – useful if recipients have overzealous spam filters',
		sendVia: 'We will send the link on your behalf'
	},
	mailtoCardButtonLabels: {
		sendVia: "Send via Security First",
		sendDirectly: "Send Directly"
	},
	main: {
		timeline: {
			START	: "Introduction",
			S_7		: "Hurricane Preparedness",
			S_9 	: "Identity Theft Prevention",
			S_11 	: "Fire Prevention",
			S_13 	: "Thanks"
		}
	}
};
