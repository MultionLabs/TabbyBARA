chrome.commands.onCommand.addListener(async (command) => {
    if (command !== "open-container-tab") return;

    try {
        const tabs = await browser.tabs.query({
            active: true,
            currentWindow: true
        });

        if (!tabs || tabs.length === 0) {
            return;
        }

        const activeTab = tabs[0];

        if (!activeTab || !activeTab.cookieStoreId) {
            return;
        }

        const newTab = await browser.tabs.create({
            index: activeTab.index + 1,
            cookieStoreId: activeTab.cookieStoreId
        });

        // Try to add the new tab to the same group as the active tab
        if (activeTab.groupId) {
            try {
                if (browser.tabs.group) {
                    await browser.tabs.group({
                        groupId: activeTab.groupId,
                        tabIds: [newTab.id]
                    });
                }
            } catch (groupError) {
                // Silently fail if grouping doesn't work
                // The tab is still created successfully
                console.error("Failed to add tab to group:", groupError);
            }
        }
    } catch (error) {
        console.error("Failed to create container tab:", error);
    }
});
