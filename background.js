function discourseShare() {
	
	// Discourse URL, with trailing slash.
	var discourseURL = 'https://critcola.com/community/';

	// Share the current tab's URL in a new Discourse topic.
	function logTabs(tabs) {
		for (tab of tabs) {
			browser.tabs.create({
				url: discourseURL + 'new-topic?title=' + encodeURI(tab.url)
			});
		}
	}

	function onError(error) {
		console.log(`Error: ${error}`);
	}

	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then(logTabs, onError);
}

browser.browserAction.onClicked.addListener(discourseShare);
