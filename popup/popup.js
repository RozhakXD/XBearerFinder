document.addEventListener('DOMContentLoaded', () => {
    const tokenDisplay = document.getElementById('tokenDisplay');
    const copyBtn = document.getElementById('copyBtn');
    const clearBtn = document.getElementById('clearBtn');
    const toast = document.getElementById('toast');

    chrome.storage.local.get('twitterToken', (result) => {
        try {
            tokenDisplay.value = result.twitterToken || 'No token found. Visit X/Twitter and refresh the page to capture token.';
            adjustTextareaHeight();
        } catch (error) {
            showToast('Error loading token!', 'error');
        }
    });

    function adjustTextareaHeight() {
        tokenDisplay.style.height = 'auto';
        tokenDisplay.style.height = tokenDisplay.scrollHeight + 'px';
    }

    copyBtn.addEventListener('click', async () => {
        if (!tokenDisplay.value || tokenDisplay.value.includes('No token')) {
            showToast('No token to copy!', 'error');
            return;
        }

        try {
            await navigator.clipboard.writeText(tokenDisplay.value);
            showToast('Token copied to clipboard!', 'success');
        } catch (error) {
            showToast('Failed to copy token!', 'error');
        }
    });

    clearBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the token?')) {
            chrome.storage.local.remove('twitterToken');
            tokenDisplay.value = '';
            adjustTextareaHeight();
            showToast('Token cleared successfully!', 'success');
        }
    });

    function showToast(message, type = 'success') {
        toast.textContent = message;
        toast.className = `toast-visible ${type === 'success' ? 'toast-success' : 'toast-error'}`;

        if (toast.timeoutId) clearTimeout(toast.timeoutId);

        toast.timeoutId = setTimeout(() => {
            toast.className = 'toast-hidden';
        }, 3000);
    }

    tokenDisplay.addEventListener('input', adjustTextareaHeight);
});